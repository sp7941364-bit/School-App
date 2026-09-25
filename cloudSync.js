/**
 * Basava Shree School Portal - Real-Time Multi-Device Cloud Synchronization Engine
 * Dual-Mode Engine:
 * 1. Native Real-Time Live Bus (Server-Sent Events via /api/sync/events) - instant, zero-config, LAN/Wi-Fi worldwide.
 * 2. Local Cross-Tab Channel (BroadcastChannel + LocalStorage) - zero latency within same machine.
 * 3. Optional Custom Firebase Cloud - for admins who enter their own Firebase keys.
 */

const CloudSync = (function () {
  let isCloudActive = false;
  let eventSource = null;
  let reconnectTimeout = null;

  let deviceId = localStorage.getItem('bss_device_id');
  if (!deviceId) {
    deviceId = 'device_' + Math.random().toString(36).substring(2, 9);
    localStorage.setItem('bss_device_id', deviceId);
  }

  // Cross-tab / Cross-window broadcast channel for instant local device sync
  let broadcastChannel = null;
  if (typeof BroadcastChannel !== 'undefined') {
    try {
      broadcastChannel = new BroadcastChannel('bss_cloud_sync_bus');
      broadcastChannel.onmessage = (event) => {
        handleIncomingSyncEvent(event.data);
      };
    } catch (e) {
      console.warn('[CloudSync] BroadcastChannel not supported:', e);
    }
  }

  // Window storage event listener for cross-window sync fallback
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e) => {
      if (e.key === 'bss_cloud_sync_packet' && e.newValue) {
        try {
          const packet = JSON.parse(e.newValue);
          if (packet.senderDeviceId !== deviceId) {
            handleIncomingSyncEvent(packet);
          }
        } catch (err) { }
      }
    });
  }

  function handleIncomingSyncEvent(packet) {
    if (!packet || packet.senderDeviceId === deviceId) return;

    console.log('[CloudSync] ⚡ Real-time event received:', packet.type, packet.payload);

    if (packet.type === 'STUDENT_ADDED') {
      const student = packet.payload;
      window.dispatchEvent(new CustomEvent('cloud-student-added', { detail: student }));
    } else if (packet.type === 'STUDENT_UPDATED') {
      const student = packet.payload;
      window.dispatchEvent(new CustomEvent('cloud-student-updated', { detail: student }));
    } else if (packet.type === 'STUDENT_DELETED') {
      window.dispatchEvent(new CustomEvent('cloud-student-deleted', { detail: packet.payload }));
    } else if (packet.type === 'ATTENDANCE_SYNCED') {
      window.dispatchEvent(new CustomEvent('cloud-attendance-synced', { detail: packet.payload }));
    }
  }

  function broadcastPacketLocally(type, payload) {
    const packet = {
      type,
      payload,
      senderDeviceId: deviceId,
      timestamp: Date.now()
    };

    if (broadcastChannel) {
      try { broadcastChannel.postMessage(packet); } catch (e) { }
    }
    try {
      localStorage.setItem('bss_cloud_sync_packet', JSON.stringify(packet));
    } catch (e) { }
  }

  // Determine server base URL
  function getServerApiBase() {
    if (typeof window !== 'undefined' && window.SchoolAPI) {
      return window.SchoolAPI.getBaseUrl();
    }
    const saved = localStorage.getItem('bss_api_base');
    if (saved) return saved;
    if (typeof window !== 'undefined' && window.location && window.location.origin.startsWith('http')) {
      return window.location.origin + '/api';
    }
    return 'http://localhost:3000/api';
  }

  // Connect to native Server-Sent Events (SSE) Live Bus
  function initLiveSyncBus() {
    if (typeof EventSource === 'undefined') {
      console.warn('[CloudSync] EventSource not supported by browser.');
      setCloudStatus(true, 'Local Tab Sync Active');
      return;
    }

    if (eventSource) {
      try { eventSource.close(); } catch (e) { }
      eventSource = null;
    }

    const apiBase = getServerApiBase();
    const sseUrl = `${apiBase}/sync/events?deviceId=${encodeURIComponent(deviceId)}`;
    console.log('[CloudSync] Connecting to Real-Time Live Bus at:', sseUrl);

    try {
      eventSource = new EventSource(sseUrl);

      eventSource.onopen = () => {
        console.log('[CloudSync] ✅ Connected to Real-Time Multi-Device Live Bus!');
        setCloudStatus(true, 'Live Multi-Device Sync Active');
      };

      eventSource.onmessage = (e) => {
        try {
          const packet = JSON.parse(e.data);
          if (packet.type === 'CONNECTED') {
            console.log(`[CloudSync] Live Bus Handshake: Active devices = ${packet.clientCount}`);
            setCloudStatus(true, `Live Sync: ${packet.clientCount} Devices Online`);
            return;
          }
          handleIncomingSyncEvent(packet);
        } catch (err) {
          // Heartbeat or non-JSON message
        }
      };

      eventSource.onerror = () => {
        console.warn('[CloudSync] Live Bus disconnected. Reconnecting in 5s...');
        setCloudStatus(false, 'Sync Reconnecting...');
        if (eventSource) {
          eventSource.close();
          eventSource = null;
        }
        clearTimeout(reconnectTimeout);
        reconnectTimeout = setTimeout(initLiveSyncBus, 5000);
      };
    } catch (err) {
      console.warn('[CloudSync] Could not open EventSource:', err.message);
      setCloudStatus(true, 'Local Bus Active');
    }
  }

  // Optional Custom Firebase initialization
  let firestore = null;
  async function initFirebaseIfCustom() {
    const customConfigStr = localStorage.getItem('bss_firebase_config');
    if (!customConfigStr || typeof firebase === 'undefined') return;

    try {
      const config = JSON.parse(customConfigStr);
      if (config && config.apiKey && !config.apiKey.includes('BasavaShreePortalLiveSyncKey2024')) {
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }
        firestore = firebase.firestore();
        console.log('[CloudSync] Custom Firebase project connected.');

        // Real-time Firestore snapshot listener across all worldwide devices
        firestore.collection('students').onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const data = change.doc.data();
            if (!data || data.updatedByDeviceId === deviceId) return;

            if (change.type === 'added') {
              window.dispatchEvent(new CustomEvent('cloud-student-added', { detail: data }));
            } else if (change.type === 'modified') {
              window.dispatchEvent(new CustomEvent('cloud-student-updated', { detail: data }));
            } else if (change.type === 'removed') {
              window.dispatchEvent(new CustomEvent('cloud-student-deleted', { detail: { roll: change.doc.id } }));
            }
          });
        }, (err) => {
          console.warn('[CloudSync] Firestore snapshot error:', err);
        });
      }
    } catch (e) {
      console.warn('[CloudSync] Custom Firebase error:', e.message);
    }
  }

  function setCloudStatus(active, message) {
    isCloudActive = active;
    const event = new CustomEvent('cloud-status-change', {
      detail: { active: isCloudActive, message, deviceId }
    });
    if (typeof window !== 'undefined') {
      window.dispatchEvent(event);
    }
  }

  // Send packet to server to broadcast to all other devices
  async function sendServerBroadcast(type, payload) {
    const apiBase = getServerApiBase();
    try {
      const res = await fetch(`${apiBase}/sync/broadcast`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          payload,
          senderDeviceId: deviceId
        })
      });
      return res.ok;
    } catch (err) {
      return false;
    }
  }

  return {
    init() {
      initFirebaseIfCustom();
      initLiveSyncBus();
    },

    isOnline() {
      return isCloudActive;
    },

    getDeviceId() {
      return deviceId;
    },

    // Add student with instant multi-device propagation
    async addStudent(student) {
      student.updatedByDeviceId = deviceId;
      student.updatedAt = Date.now();

      // 1. Broadcast locally immediately
      broadcastPacketLocally('STUDENT_ADDED', student);

      // 2. Broadcast via Server Live Bus to all other devices
      sendServerBroadcast('STUDENT_ADDED', student);

      // 3. Custom Firebase write if configured
      if (firestore) {
        try {
          await firestore.collection('students').doc(student.roll).set(student, { merge: true });
        } catch (err) { }
      }

      return { success: true, student };
    },

    // Update student with instant multi-device propagation
    async updateStudent(student) {
      student.updatedByDeviceId = deviceId;
      student.updatedAt = Date.now();

      // 1. Broadcast locally immediately
      broadcastPacketLocally('STUDENT_UPDATED', student);

      // 2. Broadcast via Server Live Bus to all other devices
      sendServerBroadcast('STUDENT_UPDATED', student);

      // 3. Custom Firebase write if configured
      if (firestore) {
        try {
          await firestore.collection('students').doc(student.roll).set(student, { merge: true });
        } catch (err) { }
      }

      return { success: true, student };
    },


    // Delete student with instant multi-device propagation
    async deleteStudent(roll) {
      const payload = { roll, updatedByDeviceId: deviceId, updatedAt: Date.now() };

      // 1. Broadcast locally
      broadcastPacketLocally('STUDENT_DELETED', payload);

      // 2. Broadcast via Server Live Bus
      sendServerBroadcast('STUDENT_DELETED', payload);

      // 3. Custom Firebase
      if (firestore) {
        try {
          await firestore.collection('students').doc(roll).delete();
        } catch (err) { }
      }

      return { success: true, roll };
    },

    // Save & Broadcast Attendance across all devices
    async saveAttendance(date, grade, records, submittedBy) {
      const payload = {
        date,
        grade: String(grade).toLowerCase(),
        records,
        submittedBy: submittedBy || 'Class Teacher',
        updatedByDeviceId: deviceId,
        updatedAt: Date.now()
      };

      // 1. Broadcast locally
      broadcastPacketLocally('ATTENDANCE_SYNCED', payload);

      // 2. Broadcast via Server Live Bus
      sendServerBroadcast('ATTENDANCE_SYNCED', payload);

      // 3. Custom Firebase
      if (firestore) {
        try {
          const docId = `${date}_${payload.grade}`;
          await firestore.collection('attendance').doc(docId).set(payload, { merge: true });
        } catch (err) { }
      }

      return { success: true, ...payload };
    },

    // Save custom Firebase config if provided by user
    setFirebaseConfig(config) {
      localStorage.setItem('bss_firebase_config', JSON.stringify(config));
      initFirebaseIfCustom();
    },

    getFirebaseConfig() {
      const custom = localStorage.getItem('bss_firebase_config');
      return custom ? JSON.parse(custom) : null;
    }
  };
})();

// Auto-initialize when loaded
if (typeof window !== 'undefined') {
  window.CloudSync = CloudSync;
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => {
      CloudSync.init();
    });
  } else {
    CloudSync.init();
  }
}
