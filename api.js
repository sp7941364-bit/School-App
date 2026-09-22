/**
 * Basava Shree School Portal - Client Data & SQLite REST API Adapter
 * Handles communication with the Express/SQLite backend with automatic offline fallback.
 */

const SchoolAPI = (function () {
  // Default to localhost:5000 for local desktop/APK, or configured URL
  let apiBase = localStorage.getItem('bss_api_base') || 'http://localhost:5000/api';
  let isConnected = false;
  let listeners = [];

  // Update connection status and notify UI
  function setConnectionStatus(status, details = {}) {
    if (isConnected !== status) {
      isConnected = status;
      listeners.forEach(fn => fn(isConnected, details));
      const event = new CustomEvent('school-db-status-change', {
        detail: { connected: isConnected, details }
      });
      window.dispatchEvent(event);
    }
  }

  // Check backend health
  async function checkHealth() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);
      const res = await fetch(`${apiBase}/health`, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        setConnectionStatus(true, data);
        return true;
      } else {
        setConnectionStatus(false);
        return false;
      }
    } catch (e) {
      setConnectionStatus(false);
      return false;
    }
  }

  // Periodic health check (every 12 seconds)
  setInterval(checkHealth, 12000);
  // Initial check on load
  if (typeof window !== 'undefined') {
    setTimeout(checkHealth, 500);
  }

  return {
    getBaseUrl() {
      return apiBase;
    },

    setBaseUrl(url) {
      apiBase = url.replace(/\/+$/, '');
      localStorage.setItem('bss_api_base', apiBase);
      checkHealth();
    },

    isOnline() {
      return isConnected;
    },

    onStatusChange(fn) {
      listeners.push(fn);
      fn(isConnected);
    },

    checkHealth,

    // --- Students API ---
    async getStudents(grade) {
      try {
        const res = await fetch(`${apiBase}/students?grade=${encodeURIComponent(grade || '')}`);
        if (res.ok) {
          const students = await res.json();
          // Update local cache
          localStorage.setItem(`bss_cache_students_${grade}`, JSON.stringify(students));
          return students;
        }
      } catch (err) {
        console.warn('[API] Could not fetch students from server, using local fallback:', err.message);
      }
      const cached = localStorage.getItem(`bss_cache_students_${grade}`);
      return cached ? JSON.parse(cached) : null;
    },

    async addStudent(studentData) {
      try {
        const res = await fetch(`${apiBase}/students`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(studentData)
        });
        if (res.ok) return await res.json();
      } catch (err) {
        console.warn('[API] addStudent offline fallback:', err.message);
      }
      return { success: true, offline: true, ...studentData };
    },

    async deleteStudent(roll) {
      try {
        const res = await fetch(`${apiBase}/students/${encodeURIComponent(roll)}`, {
          method: 'DELETE'
        });
        if (res.ok) return await res.json();
      } catch (err) {
        console.warn('[API] deleteStudent offline fallback:', err.message);
      }
      return { success: true, offline: true, roll };
    },

    // --- Attendance API ---
    async getAttendance(date, grade) {
      try {
        const res = await fetch(`${apiBase}/attendance?date=${encodeURIComponent(date)}&grade=${encodeURIComponent(grade)}`);
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('[API] getAttendance offline fallback:', err.message);
      }
      return null;
    },

    async submitAttendance(date, grade, records, submittedBy) {
      try {
        const res = await fetch(`${apiBase}/attendance/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ date, grade, records, submittedBy })
        });
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('[API] submitAttendance offline fallback:', err.message);
      }
      return { success: true, offline: true, date, grade, records };
    },

    // --- Principal Executive Summary ---
    async getPrincipalSummary(date) {
      try {
        const res = await fetch(`${apiBase}/principal/attendance-summary?date=${encodeURIComponent(date || '')}`);
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('[API] getPrincipalSummary offline fallback:', err.message);
      }
      return null;
    },

    // --- Staff Attendance & Moderation ---
    async getStaffAttendance(date) {
      try {
        const res = await fetch(`${apiBase}/staff/attendance?date=${encodeURIComponent(date || '')}`);
        if (res.ok) {
          const data = await res.json();
          return data.staff;
        }
      } catch (err) {
        console.warn('[API] getStaffAttendance offline fallback:', err.message);
      }
      return null;
    },

    async moderateStaffAttendance(date, emp_id, status, remarks, moderatedBy) {
      try {
        const res = await fetch(`${apiBase}/staff/attendance/moderate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ date, emp_id, status, remarks, moderatedBy })
        });
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('[API] moderateStaffAttendance offline fallback:', err.message);
      }
      return { success: true, offline: true, date, emp_id, status };
    }
  };
})();

if (typeof window !== 'undefined') {
  window.SchoolAPI = SchoolAPI;
}
