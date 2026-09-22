const express = require('express');
const cors = require('cors');
const { db, initSchema } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize DB schema on boot
initSchema().catch(err => console.error('[Server] DB init error:', err));

// 1. Health Check
app.get('/api/health', async (req, res) => {
  try {
    const studentCount = await db.getAsync('SELECT COUNT(*) as count FROM students');
    res.json({
      status: 'online',
      school: 'Basava Shree School',
      database: 'SQLite',
      totalStudents: studentCount ? studentCount.count : 0,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

// 2. Authentication
app.post('/api/auth/login', async (req, res) => {
  const { username, password, role } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const user = await db.getAsync('SELECT * FROM users WHERE username = ?', [username.toLowerCase().trim()]);
    if (user) {
      if (password && user.password !== password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
      return res.json({
        success: true,
        user: {
          username: user.username,
          role: user.role,
          displayName: user.display_name
        }
      });
    }

    // Role-based demo fallback
    const roleNames = {
      principal: 'Dr. S. Patil (Principal)',
      staff: 'Basava Shree Faculty',
      student: 'Student Workspace',
      parent: 'Guardian Account'
    };

    return res.json({
      success: true,
      user: {
        username,
        role: role || 'student',
        displayName: roleNames[role] || username
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Students API
app.get('/api/students', async (req, res) => {
  try {
    const { grade } = req.query;
    let sql = 'SELECT * FROM students';
    const params = [];
    if (grade) {
      sql += ' WHERE grade = ? ORDER BY roll ASC';
      params.push(grade.toLowerCase());
    } else {
      sql += ' ORDER BY grade, roll ASC';
    }
    const students = await db.allAsync(sql, params);
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/students', async (req, res) => {
  const { roll, name, grade, section, wing, gender, parent_name, phone } = req.body;
  if (!roll || !name || !grade) {
    return res.status(400).json({ error: 'Roll number, Name, and Grade are required' });
  }

  try {
    await db.runAsync(`
      INSERT INTO students (roll, name, grade, section, wing, gender, parent_name, phone)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [roll, name, grade.toLowerCase(), section || '', wing || 'General', gender || 'Other', parent_name || '', phone || '']);

    res.status(201).json({ success: true, roll, name, grade });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/students/:roll', async (req, res) => {
  try {
    const { roll } = req.params;
    await db.runAsync('DELETE FROM students WHERE roll = ?', [roll]);
    res.json({ success: true, message: `Student ${roll} deleted.` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Attendance Marking & Query
app.get('/api/attendance', async (req, res) => {
  try {
    const { date, grade } = req.query;
    if (!date || !grade) {
      return res.status(400).json({ error: 'date and grade query parameters are required' });
    }

    const cleanGrade = grade.toLowerCase();
    const submission = await db.getAsync(
      'SELECT * FROM attendance_submissions WHERE date = ? AND grade = ?',
      [date, cleanGrade]
    );

    const rows = await db.allAsync(
      'SELECT roll, status FROM daily_attendance WHERE date = ? AND grade = ?',
      [date, cleanGrade]
    );

    const records = {};
    rows.forEach(r => { records[r.roll] = r.status; });

    res.json({
      date,
      grade: cleanGrade,
      submission: submission || null,
      records
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/attendance/submit', async (req, res) => {
  try {
    const { date, grade, records, submittedBy } = req.body;
    if (!date || !grade || !records) {
      return res.status(400).json({ error: 'date, grade, and records map are required' });
    }

    const cleanGrade = grade.toLowerCase();
    let totalPresent = 0;
    let totalAbsent = 0;

    for (const [roll, status] of Object.entries(records)) {
      if (status === 'P') totalPresent++;
      else if (status === 'A') totalAbsent++;

      await db.runAsync(`
        INSERT OR REPLACE INTO daily_attendance (date, grade, roll, status, marked_by, updated_at)
        VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      `, [date, cleanGrade, roll, status, submittedBy || 'Faculty']);
    }

    const submittedAt = new Date().toLocaleTimeString();
    await db.runAsync(`
      INSERT OR REPLACE INTO attendance_submissions (date, grade, total_present, total_absent, submitted_by, submitted_at, status)
      VALUES (?, ?, ?, ?, ?, ?, 'Submitted')
    `, [date, cleanGrade, totalPresent, totalAbsent, submittedBy || 'Faculty', submittedAt]);

    res.json({
      success: true,
      date,
      grade: cleanGrade,
      totalPresent,
      totalAbsent,
      submittedAt,
      status: 'Submitted'
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Principal Executive Attendance Summary (Across All 12 Classes)
app.get('/api/principal/attendance-summary', async (req, res) => {
  try {
    const date = req.query.date || new Date().toISOString().split('T')[0];

    const allGrades = ['lkg', 'ukg', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const summary = {};

    let grandTotal = 0;
    let grandPresent = 0;
    let grandAbsent = 0;

    for (const g of allGrades) {
      const studentCountRow = await db.getAsync(
        'SELECT COUNT(*) as count FROM students WHERE grade = ?',
        [g]
      );
      const totalStudents = studentCountRow ? studentCountRow.count : 0;

      const subRow = await db.getAsync(
        'SELECT * FROM attendance_submissions WHERE date = ? AND grade = ?',
        [date, g]
      );

      let present = subRow ? subRow.total_present : 0;
      let absent = subRow ? subRow.total_absent : 0;
      let isSubmitted = !!subRow;

      if (!isSubmitted && totalStudents > 0) {
        // Fallback or estimated attendance if not yet explicitly submitted
        const markedRows = await db.allAsync(
          'SELECT status FROM daily_attendance WHERE date = ? AND grade = ?',
          [date, g]
        );
        if (markedRows && markedRows.length > 0) {
          markedRows.forEach(r => {
            if (r.status === 'P') present++; else absent++;
          });
        }
      }

      const percent = totalStudents > 0 ? Math.round((present / totalStudents) * 100) : 0;
      grandTotal += totalStudents;
      grandPresent += present;
      grandAbsent += absent;

      summary[g] = {
        grade: g,
        total: totalStudents,
        present,
        absent,
        percent,
        status: isSubmitted ? 'Completed' : (present > 0 ? 'In Progress' : 'Pending'),
        submittedAt: subRow ? subRow.submitted_at : null
      };
    }

    const schoolPercent = grandTotal > 0 ? Math.round((grandPresent / grandTotal) * 100) : 0;

    res.json({
      date,
      schoolPercent,
      grandTotal,
      grandPresent,
      grandAbsent,
      classes: summary
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 6. Staff Attendance & Moderation
app.get('/api/staff/attendance', async (req, res) => {
  try {
    const date = req.query.date || new Date().toISOString().split('T')[0];

    const rows = await db.allAsync(`
      SELECT 
        sm.emp_id,
        sm.name,
        sm.department,
        sm.role,
        COALESCE(sa.check_in, '--') as check_in,
        COALESCE(sa.check_out, '--') as check_out,
        COALESCE(sa.status, 'Unregistered') as status,
        COALESCE(sa.biometric_terminal, 'Terminal') as biometric_terminal,
        sa.moderated_by,
        sa.moderated_at,
        sa.remarks
      FROM staff_members sm
      LEFT JOIN staff_attendance sa 
        ON sm.emp_id = sa.emp_id AND sa.date = ?
      ORDER BY sm.emp_id ASC
    `, [date]);

    res.json({ date, staff: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/staff/attendance/moderate', async (req, res) => {
  try {
    const { date, emp_id, status, remarks, moderatedBy } = req.body;
    if (!date || !emp_id || !status) {
      return res.status(400).json({ error: 'date, emp_id, and status are required' });
    }

    const moderatedAt = new Date().toLocaleTimeString();

    await db.runAsync(`
      INSERT INTO staff_attendance (date, emp_id, status, remarks, moderated_by, moderated_at)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(date, emp_id) DO UPDATE SET
        status = excluded.status,
        remarks = excluded.remarks,
        moderated_by = excluded.moderated_by,
        moderated_at = excluded.moderated_at
    `, [date, emp_id, status, remarks || 'Principal Moderated', moderatedBy || 'Principal', moderatedAt]);

    res.json({
      success: true,
      date,
      emp_id,
      status,
      remarks,
      moderatedBy,
      moderatedAt
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Express Backend] Basava Shree School REST API listening on port ${PORT}`);
  console.log(`[Express Backend] API Base: http://localhost:${PORT}/api`);
});
