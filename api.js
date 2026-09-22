/**
 * Basava Shree School Portal - Client Data & SQLite REST API Adapter
 * Handles communication with the Express/SQLite backend with automatic offline fallback.
 */

const SchoolAPI = (function () {
  function resolveDefaultApiBase() {
    const saved = localStorage.getItem('bss_api_base');
    if (saved) return saved;

    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      const origin = window.location.origin;
      if (origin.startsWith('http://') || origin.startsWith('https://')) {
        return origin + '/api';
      }
    }
    return 'http://localhost:3000/api';
  }

  let apiBase = resolveDefaultApiBase();
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

  // Check backend health with fallback to port 5000/3000 if needed
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
      }
    } catch (e) { }

    // Automatic fallback between 3000 and 5000 for local dev if not explicitly customized
    if (!localStorage.getItem('bss_api_base')) {
      const fallbackUrl = apiBase.includes(':3000') ? 'http://localhost:5000/api' : 'http://localhost:3000/api';
      try {
        const controller2 = new AbortController();
        const timeoutId2 = setTimeout(() => controller2.abort(), 2000);
        const res2 = await fetch(`${fallbackUrl}/health`, { signal: controller2.signal });
        clearTimeout(timeoutId2);
        if (res2.ok) {
          const data2 = await res2.json();
          apiBase = fallbackUrl;
          setConnectionStatus(true, data2);
          return true;
        }
      } catch (e2) { }
    }

    setConnectionStatus(false);
    return false;
  }

  // Periodic health check (every 10 seconds)
  setInterval(checkHealth, 10000);
  // Initial check on load
  if (typeof window !== 'undefined') {
    setTimeout(checkHealth, 300);
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
