const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, 'database');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'school.db');
console.log('[SQLite DB] Connecting to:', dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('[SQLite DB] Connection error:', err.message);
  } else {
    console.log('[SQLite DB] Connected successfully to SQLite database.');
  }
});

// Promise wrappers for async/await
db.runAsync = function (sql, params = []) {
  return new Promise((resolve, reject) => {
    this.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
};

db.getAsync = function (sql, params = []) {
  return new Promise((resolve, reject) => {
    this.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

db.allAsync = function (sql, params = []) {
  return new Promise((resolve, reject) => {
    this.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

// Initialize Schemas
async function initSchema() {
  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      roll TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      grade TEXT NOT NULL,
      section TEXT,
      wing TEXT,
      gender TEXT,
      parent_name TEXT,
      phone TEXT,
      avatar TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  try {
    await db.runAsync('ALTER TABLE students ADD COLUMN avatar TEXT');
  } catch (e) {}

  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS daily_attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      grade TEXT NOT NULL,
      roll TEXT NOT NULL,
      status TEXT NOT NULL,
      marked_by TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(date, grade, roll)
    );
  `);

  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS attendance_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      grade TEXT NOT NULL,
      total_present INTEGER DEFAULT 0,
      total_absent INTEGER DEFAULT 0,
      submitted_by TEXT,
      submitted_at TEXT,
      status TEXT DEFAULT 'Submitted',
      UNIQUE(date, grade)
    );
  `);

  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS staff_members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      emp_id TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      department TEXT NOT NULL,
      role TEXT NOT NULL,
      email TEXT,
      phone TEXT
    );
  `);

  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS staff_attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      emp_id TEXT NOT NULL,
      check_in TEXT,
      check_out TEXT,
      status TEXT NOT NULL,
      biometric_terminal TEXT,
      moderated_by TEXT,
      moderated_at TEXT,
      remarks TEXT,
      UNIQUE(date, emp_id)
    );
  `);

  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      display_name TEXT
    );
  `);

  console.log('[SQLite DB] Schema tables verified and ready.');
}

module.exports = {
  db,
  initSchema,
  dbPath
};
