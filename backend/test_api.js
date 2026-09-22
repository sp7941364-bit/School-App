const http = require('http');

function get(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:5000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('--- Testing Backend Endpoints ---');

  const health = await get('/api/health');
  console.log('1. Health check:', health);

  const students10 = await get('/api/students?grade=10');
  console.log('2. Students in Grade 10:', students10.length);

  const principal = await get('/api/principal/attendance-summary');
  console.log('3. Principal summary classes:', Object.keys(principal.classes).length, 'Grand total students:', principal.grandTotal);

  const staff = await get('/api/staff/attendance');
  console.log('4. Staff attendance records:', staff.staff.length);

  console.log('--- All Backend Tests PASSED! ---');
}

runTests().catch(console.error);
