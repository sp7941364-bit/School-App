const express = require('express');
const cors = require('cors');
const path = require('path');
const os = require('os');
const { db, initSchema, dbPath } = require('./db');

const app = express();
const PORT_MAIN = process.env.PORT || 3000;
const PORT_COMPAT = 5000;

app.use(cors());
app.use(express.json());

// Request logging & no-cache headers for instant browser freshness
app.use((req, res, next) => {
  if (req.path.endsWith('.html') || req.path.endsWith('.js') || req.path === '/') {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  if (req.path.startsWith('/api') && !req.path.includes('/sync/events')) {
    console.log(`[API ${req.method}] ${req.url}`);
  }
  next();
});

// Initialize DB schema on boot
initSchema().catch(err => console.error('[Server] DB init error:', err));

// =========================================================================
// REAL-TIME MULTI-DEVICE LIVE SYNC EVENT BUS (SSE + BROADCAST)
// =========================================================================
const sseClients = new Set();

function broadcastEvent(type, payload, excludeDeviceId = null) {
  const data = JSON.stringify({ type, payload, timestamp: Date.now() });
  for (const client of sseClients) {
    if (excludeDeviceId && client.deviceId === excludeDeviceId) continue;
    try {
      client.res.write(`data: ${data}\n\n`);
    } catch (err) {
      sseClients.delete(client);
    }
  }
}

// 1. SSE Real-Time Event Stream
app.get('/api/sync/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (res.flushHeaders) res.flushHeaders();

  const deviceId = req.query.deviceId || ('device_' + Math.random().toString(36).substring(2, 9));
  const client = { deviceId, res };
  sseClients.add(client);

  // Send initial handshake packet
  res.write(`data: ${JSON.stringify({ type: 'CONNECTED', deviceId, clientCount: sseClients.size, timestamp: Date.now() })}\n\n`);

  // Heartbeat to prevent connection dropouts
  const heartbeat = setInterval(() => {
    try {
      res.write(': heartbeat\n\n');
    } catch (e) {
      clearInterval(heartbeat);
      sseClients.delete(client);
    }
  }, 15000);

  req.on('close', () => {
    clearInterval(heartbeat);
    sseClients.delete(client);
  });
});

// 2. Broadcast endpoint for client-initiated sync
app.post('/api/sync/broadcast', (req, res) => {
  const { type, payload, senderDeviceId } = req.body || {};
  if (!type) {
    return res.status(400).json({ error: 'type is required for broadcast' });
  }
  broadcastEvent(type, payload, senderDeviceId);
  res.json({ success: true, deliveredTo: sseClients.size });
});

// =========================================================================
// REST API ENDPOINTS
// =========================================================================

// Health Check
app.get('/api/health', async (req, res) => {
  try {
    const studentCount = await db.getAsync('SELECT COUNT(*) as count FROM students');
    res.json({
      status: 'online',
      school: 'Basava Shree School',
      database: 'SQLite',
      totalStudents: studentCount ? studentCount.count : 0,
      activeSyncDevices: sseClients.size,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

// Authentication
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
      staff: 'English Faculty (Class 10 Faculty)',
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

// Students API
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
  const { roll, name, grade, section, wing, gender, parent_name, phone, avatar, deviceId } = req.body;
  if (!roll || !name || !grade) {
    return res.status(400).json({ error: 'Roll number, Name, and Grade are required' });
  }

  try {
    const existing = await db.getAsync('SELECT * FROM students WHERE roll = ?', [roll]);

    await db.runAsync(`
      INSERT OR REPLACE INTO students (roll, name, grade, section, wing, gender, parent_name, phone, avatar)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [roll, name, grade.toLowerCase(), section || '', wing || 'General', gender || 'Other', parent_name || '', phone || '', avatar || '']);

    const studentRecord = {
      roll,
      name,
      fullName: name,
      grade: grade.toLowerCase(),
      studentClass: `Class ${grade.toUpperCase()}`,
      section: section || 'A',
      wing: wing || 'General',
      gender: gender || 'Other',
      parent_name: parent_name || '',
      parentName: parent_name || '',
      phone: phone || '',
      avatar: avatar || ''
    };

    // Auto-broadcast real-time event to all connected phones/browsers
    const eventType = existing ? 'STUDENT_UPDATED' : 'STUDENT_ADDED';
    broadcastEvent(eventType, studentRecord, deviceId);

    res.status(existing ? 200 : 201).json({ success: true, isUpdate: !!existing, ...studentRecord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/students/:roll', async (req, res) => {
  try {
    const { roll } = req.params;
    const { name, grade, section, wing, gender, parent_name, phone, avatar, deviceId } = req.body;

    const existing = await db.getAsync('SELECT * FROM students WHERE roll = ?', [roll]);
    if (!existing) {
      return res.status(404).json({ error: `Student with roll ${roll} not found` });
    }

    const updatedName = name !== undefined ? name : existing.name;
    const updatedGrade = grade !== undefined ? grade.toLowerCase() : existing.grade;
    const updatedSection = section !== undefined ? section : existing.section;
    const updatedWing = wing !== undefined ? wing : existing.wing;
    const updatedGender = gender !== undefined ? gender : existing.gender;
    const updatedParentName = parent_name !== undefined ? parent_name : existing.parent_name;
    const updatedPhone = phone !== undefined ? phone : existing.phone;
    const updatedAvatar = avatar !== undefined ? avatar : (existing.avatar || '');

    await db.runAsync(`
      UPDATE students 
      SET name = ?, grade = ?, section = ?, wing = ?, gender = ?, parent_name = ?, phone = ?, avatar = ?
      WHERE roll = ?
    `, [updatedName, updatedGrade, updatedSection, updatedWing, updatedGender, updatedParentName, updatedPhone, updatedAvatar, roll]);

    const updatedRecord = {
      roll,
      name: updatedName,
      fullName: updatedName,
      grade: updatedGrade,
      studentClass: `Class ${updatedGrade.toUpperCase()}`,
      section: updatedSection,
      wing: updatedWing,
      gender: updatedGender,
      parent_name: updatedParentName,
      parentName: updatedParentName,
      phone: updatedPhone,
      avatar: updatedAvatar
    };

    // Auto-broadcast real-time update event to all connected phones/browsers
    broadcastEvent('STUDENT_UPDATED', updatedRecord, deviceId);

    res.json({ success: true, ...updatedRecord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.delete('/api/students/:roll', async (req, res) => {
  try {
    const { roll } = req.params;
    const deviceId = req.query.deviceId;
    await db.runAsync('DELETE FROM students WHERE roll = ?', [roll]);

    // Auto-broadcast deletion to all connected devices
    broadcastEvent('STUDENT_DELETED', { roll }, deviceId);

    res.json({ success: true, message: `Student ${roll} deleted.` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Attendance Marking & Query
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
    const { date, grade, records, submittedBy, deviceId } = req.body;
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

    const payload = {
      date,
      grade: cleanGrade,
      records,
      totalPresent,
      totalAbsent,
      submittedBy: submittedBy || 'Faculty',
      submittedAt,
      status: 'Submitted'
    };

    // Auto-broadcast real-time attendance update to all devices
    broadcastEvent('ATTENDANCE_SYNCED', payload, deviceId);

    res.json({ success: true, ...payload });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Principal Executive Attendance Summary
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

// Staff Attendance & Moderation
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

// =========================================================================
// STATIC FRONTEND ASSET SERVING (PORTAL FILES)
// =========================================================================
const workspaceRoot = path.join(__dirname, '..');

// Serve static portal assets directly
app.use(express.static(workspaceRoot, {
  etag: true,
  maxAge: '0',
  index: 'index.html'
}));

// Fallback to index.html for root or SPA navigation
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: `Endpoint not found: ${req.path}` });
  }
  res.sendFile(path.join(workspaceRoot, 'index.html'));
});

// =========================================================================
// SERVER STARTUP & LOCAL NETWORK DISCOVERY
// =========================================================================
function getLocalIpAddresses() {
  const nets = os.networkInterfaces();
  const results = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        results.push(net.address);
      }
    }
  }
  return results;
}

const serverMain = app.listen(PORT_MAIN, '0.0.0.0', () => {
  const ips = getLocalIpAddresses();
  console.log('\n====================================================================');
  console.log('   🏫 BASAVA SHREE SCHOOL - OFFICIAL CAMPUS PORTAL SERVER');
  console.log('====================================================================');
  console.log(`  -> Local Access:          http://localhost:${PORT_MAIN}/`);
  console.log(`  -> IP Access:             http://127.0.0.1:${PORT_MAIN}/`);
  ips.forEach(ip => {
    console.log(`  -> Mobile / Tablet / LAN: http://${ip}:${PORT_MAIN}/`);
  });
  console.log(`  -> REST API Base:         http://localhost:${PORT_MAIN}/api`);
  console.log(`  -> Real-Time Live Sync:   http://localhost:${PORT_MAIN}/api/sync/events`);
  console.log('====================================================================\n');
});

// Also bind port 5000 for compatibility with any hardcoded legacy clients/APKs
try {
  const serverCompat = app.listen(PORT_COMPAT, '0.0.0.0', () => {
    console.log(`[Express Backend] Compatibility listener active on port ${PORT_COMPAT}`);
  });
  serverCompat.on('error', (err) => {
    if (err.code !== 'EADDRINUSE') {
      console.warn(`[Express Backend] Port ${PORT_COMPAT} notice:`, err.message);
    }
  });
} catch (e) { }

module.exports = app;
