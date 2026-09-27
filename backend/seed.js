const { db, initSchema } = require('./db');

const SEED_STUDENTS = {
  'lkg': [],
  'ukg': [],
  '1': [],
  '2': [],
  '3': [],
  '4': [],
  '5': [],
  '6': [],
  '7': [],
  '8': [],
  '9': [],
  '10': [
    { roll: "BSS-10050", name: "JAGADISH", studentClass: "10th Std", wing: "High School", gender: "Male", parent: "Father", phone: "9591943600" }
  ]
};

const SEED_STAFF = [
  { emp_id: "BSS-ADM01", name: "Dr. S. Patil", department: "Administration", role: "Principal", email: "principal@basavashrees.edu.in", phone: "9845000001" },
  { emp_id: "BSS-ADM02", name: "Mrs. S. Desai", department: "Administration", role: "Vice Principal", email: "viceprincipal@basavashrees.edu.in", phone: "9845000002" },
  { emp_id: "BSS-ACD01", name: "Mr. K. Sharma", department: "Academics", role: "Chief Exam Coordinator", email: "exams@basavashrees.edu.in", phone: "9845000003" },
  { emp_id: "BSS-FAC01", name: "Dr. R. Kulkarni", department: "Science (Physics)", role: "Senior Faculty", email: "kulkarni@basavashrees.edu.in", phone: "9845000004" },
  { emp_id: "BSS-FAC02", name: "Dr. B. Patil", department: "Kannada Literature", role: "Class Teacher (Class 9-A) • Kannada", email: "bpatil@basavashrees.edu.in", phone: "9845000005" },
  { emp_id: "BSS-FAC03", name: "Mr. D. Alva", department: "English", role: "Class Teacher (Class 10-A) • English", email: "alva@basavashrees.edu.in", phone: "9845000006" },
  { emp_id: "BSS-FAC04", name: "Mrs. M. Joshi", department: "Social Science", role: "Faculty", email: "joshi@basavashrees.edu.in", phone: "9845000007" },
  { emp_id: "BSS-FAC05", name: "Coach Ramesh", department: "Physical Education", role: "Sports Director", email: "sports@basavashrees.edu.in", phone: "9845000008" }
];

const SEED_USERS = [
  { username: "principal", password: "123", role: "principal", display_name: "Dr. S. Patil (Principal)" },
  { username: "staff", password: "123", role: "staff", display_name: "Basava Shree Faculty" },
  { username: "student", password: "123", role: "student", display_name: "Aarav Sharma (Class 10)" },
  { username: "parent", password: "123", role: "parent", display_name: "Rajesh Sharma (Parent)" }
];

async function seed() {
  console.log('[SQLite Seeder] Initializing schema...');
  await initSchema();

  console.log('[SQLite Seeder] Seeding Users...');
  for (const u of SEED_USERS) {
    await db.runAsync(`
      INSERT OR REPLACE INTO users (username, password, role, display_name)
      VALUES (?, ?, ?, ?);
    `, [u.username, u.password, u.role, u.display_name]);
  }

  console.log('[SQLite Seeder] Seeding Students across 12 Classes...');
  for (const [grade, students] of Object.entries(SEED_STUDENTS)) {
    for (const s of students) {
      await db.runAsync(`
        INSERT OR REPLACE INTO students (roll, name, grade, section, wing, gender, parent_name, phone)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
      `, [s.roll, s.name, grade, s.studentClass, s.wing, s.gender, s.parent, s.phone]);
    }
  }

  console.log('[SQLite Seeder] Seeding Staff Members...');
  for (const st of SEED_STAFF) {
    await db.runAsync(`
      INSERT OR REPLACE INTO staff_members (emp_id, name, department, role, email, phone)
      VALUES (?, ?, ?, ?, ?, ?);
    `, [st.emp_id, st.name, st.department, st.role, st.email, st.phone]);
  }

  // Seed sample attendance for today for Class 10
  const today = new Date().toISOString().split('T')[0];
  console.log('[SQLite Seeder] Seeding today attendance for Class 10 (' + today + ')...');
  const class10 = SEED_STUDENTS['10'];
  let presentCount = 0;
  let absentCount = 0;

  for (let i = 0; i < class10.length; i++) {
    const s = class10[i];
    const status = (i === 1 || i === 4) ? 'A' : 'P'; // 2 absent for demo
    if (status === 'P') presentCount++; else absentCount++;

    await db.runAsync(`
      INSERT OR REPLACE INTO daily_attendance (date, grade, roll, status, marked_by)
      VALUES (?, ?, ?, ?, ?);
    `, [today, '10', s.roll, status, 'Class Teacher']);
  }

  await db.runAsync(`
    INSERT OR REPLACE INTO attendance_submissions (date, grade, total_present, total_absent, submitted_by, submitted_at, status)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `, [today, '10', presentCount, absentCount, 'Class Teacher', new Date().toLocaleTimeString(), 'Submitted']);

  // Seed sample staff biometric attendance for today
  console.log('[SQLite Seeder] Seeding Staff Biometric Attendance...');
  const staffLogs = [
    { emp_id: "BSS-ADM01", check_in: "07:55 AM", check_out: "--", status: "Present", terminal: "Gate A - Biometric #1" },
    { emp_id: "BSS-ADM02", check_in: "08:12 AM", check_out: "--", status: "Present", terminal: "Gate A - Biometric #1" },
    { emp_id: "BSS-ACD01", check_in: "08:24 AM", check_out: "--", status: "Present", terminal: "Academic Hub #2" },
    { emp_id: "BSS-FAC01", check_in: "08:35 AM", check_out: "--", status: "Late", terminal: "Gate B - Biometric #3" },
    { emp_id: "BSS-FAC02", check_in: "08:05 AM", check_out: "--", status: "Present", terminal: "Gate A - Biometric #1" },
    { emp_id: "BSS-FAC03", check_in: "08:10 AM", check_out: "--", status: "Present", terminal: "Gate A - Biometric #1" },
    { emp_id: "BSS-FAC04", check_in: "--", check_out: "--", status: "Absent", terminal: "Unregistered", remarks: "Medical Leave applied" },
    { emp_id: "BSS-FAC05", check_in: "07:45 AM", check_out: "--", status: "Present", terminal: "Sports Complex #4" }
  ];

  for (const log of staffLogs) {
    await db.runAsync(`
      INSERT OR REPLACE INTO staff_attendance (date, emp_id, check_in, check_out, status, biometric_terminal, remarks)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `, [today, log.emp_id, log.check_in, log.check_out, log.status, log.terminal, log.remarks || null]);
  }

  console.log('[SQLite Seeder] ✅ Database successfully populated with initial school data!');
}

if (require.main === module) {
  seed()
    .then(() => {
      console.log('[SQLite Seeder] Process completed successfully.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('[SQLite Seeder] Seed error:', err);
      process.exit(1);
    });
}

module.exports = { seed };
