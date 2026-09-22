const { db, initSchema } = require('./db');

const SEED_STUDENTS = {
  'lkg': [
    { roll: "BSS-LKG01", name: "Aadhya Kulkarni", studentClass: "Class LKG - Lotus", wing: "Early Childhood", gender: "Female", parent: "Ramesh Kulkarni", phone: "9845012301" },
    { roll: "BSS-LKG02", name: "Vihaan Sharma", studentClass: "Class LKG - Lotus", wing: "Early Childhood", gender: "Male", parent: "Sunil Sharma", phone: "9845012302" },
    { roll: "BSS-LKG03", name: "Ananya Patil", studentClass: "Class LKG - Lotus", wing: "Early Childhood", gender: "Female", parent: "Basavaraj Patil", phone: "9845012303" },
    { roll: "BSS-LKG04", name: "Reyansh Reddy", studentClass: "Class LKG - Lotus", wing: "Early Childhood", gender: "Male", parent: "Venkat Reddy", phone: "9845012304" },
    { roll: "BSS-LKG05", name: "Ishani Hegde", studentClass: "Class LKG - Lotus", wing: "Early Childhood", gender: "Female", parent: "Girish Hegde", phone: "9845012305" },
    { roll: "BSS-LKG06", name: "Advik Gowda", studentClass: "Class LKG - Lotus", wing: "Early Childhood", gender: "Male", parent: "Praveen Gowda", phone: "9845012306" },
    { roll: "BSS-LKG07", name: "Saanvi Joshi", studentClass: "Class LKG - Lotus", wing: "Early Childhood", gender: "Female", parent: "Mahesh Joshi", phone: "9845012307" },
    { roll: "BSS-LKG08", name: "Kabir Hiremath", studentClass: "Class LKG - Lotus", wing: "Early Childhood", gender: "Male", parent: "Sharan Hiremath", phone: "9845012308" }
  ],
  'ukg': [
    { roll: "BSS-UKG01", name: "Dhruv Rao", studentClass: "Class UKG - Jasmine", wing: "Early Childhood", gender: "Male", parent: "Sanjay Rao", phone: "9845012309" },
    { roll: "BSS-UKG02", name: "Diya Bhat", studentClass: "Class UKG - Jasmine", wing: "Early Childhood", gender: "Female", parent: "Kishore Bhat", phone: "9845012310" },
    { roll: "BSS-UKG03", name: "Atharv K.", studentClass: "Class UKG - Jasmine", wing: "Early Childhood", gender: "Male", parent: "Kumaraswamy", phone: "9845012311" },
    { roll: "BSS-UKG04", name: "Myra Deshmukh", studentClass: "Class UKG - Jasmine", wing: "Early Childhood", gender: "Female", parent: "Anand Deshmukh", phone: "9845012312" },
    { roll: "BSS-UKG05", name: "Samarth Pujar", studentClass: "Class UKG - Jasmine", wing: "Early Childhood", gender: "Male", parent: "Veeresh Pujar", phone: "9845012313" },
    { roll: "BSS-UKG06", name: "Ira Kulkarni", studentClass: "Class UKG - Jasmine", wing: "Early Childhood", gender: "Female", parent: "Deepak Kulkarni", phone: "9845012314" },
    { roll: "BSS-UKG07", name: "Rudra Nayak", studentClass: "Class UKG - Jasmine", wing: "Early Childhood", gender: "Male", parent: "Manjunath Nayak", phone: "9845012315" },
    { roll: "BSS-UKG08", name: "Anvi Patil", studentClass: "Class UKG - Jasmine", wing: "Early Childhood", gender: "Female", parent: "Shivanand Patil", phone: "9845012316" }
  ],
  '1': [
    { roll: "BSS-101", name: "Tanmay Angadi", studentClass: "Class 1-A", wing: "Primary", gender: "Male", parent: "Suresh Angadi", phone: "9845012317" },
    { roll: "BSS-102", name: "Avani Sharan", studentClass: "Class 1-A", wing: "Primary", gender: "Female", parent: "Sharanappa", phone: "9845012318" },
    { roll: "BSS-103", name: "Pranav Biradar", studentClass: "Class 1-A", wing: "Primary", gender: "Male", parent: "Mallikarjun Biradar", phone: "9845012319" },
    { roll: "BSS-104", name: "Prisha Shettar", studentClass: "Class 1-A", wing: "Primary", gender: "Female", parent: "Jagadish Shettar", phone: "9845012320" },
    { roll: "BSS-105", name: "Manish Desai", studentClass: "Class 1-A", wing: "Primary", gender: "Male", parent: "Vinod Desai", phone: "9845012321" },
    { roll: "BSS-106", name: "Tanvi Hubballi", studentClass: "Class 1-A", wing: "Primary", gender: "Female", parent: "Ashok Hubballi", phone: "9845012322" },
    { roll: "BSS-107", name: "Yashasvi V.", studentClass: "Class 1-A", wing: "Primary", gender: "Female", parent: "Vijaykumar", phone: "9845012323" },
    { roll: "BSS-108", name: "Kushagra Jain", studentClass: "Class 1-A", wing: "Primary", gender: "Male", parent: "Mahaveer Jain", phone: "9845012324" }
  ],
  '2': [
    { roll: "BSS-201", name: "Chirag Meti", studentClass: "Class 2-A", wing: "Primary", gender: "Male", parent: "Shivappa Meti", phone: "9845012325" },
    { roll: "BSS-202", name: "Bhoomi Kallur", studentClass: "Class 2-A", wing: "Primary", gender: "Female", parent: "Basavaraj Kallur", phone: "9845012326" },
    { roll: "BSS-203", name: "Siddharth Bellad", studentClass: "Class 2-A", wing: "Primary", gender: "Male", parent: "Arvind Bellad", phone: "9845012327" },
    { roll: "BSS-204", name: "Riddhi Kankanwadi", studentClass: "Class 2-A", wing: "Primary", gender: "Female", parent: "Prakash Kankanwadi", phone: "9845012328" },
    { roll: "BSS-205", name: "Aditya Badiger", studentClass: "Class 2-A", wing: "Primary", gender: "Male", parent: "Somaling Badiger", phone: "9845012329" },
    { roll: "BSS-206", name: "Nandini Mathad", studentClass: "Class 2-A", wing: "Primary", gender: "Female", parent: "Chandrashekhar", phone: "9845012330" },
    { roll: "BSS-207", name: "Darshan Bagalkot", studentClass: "Class 2-A", wing: "Primary", gender: "Male", parent: "Santosh Bagalkot", phone: "9845012331" },
    { roll: "BSS-208", name: "Sneha Goudar", studentClass: "Class 2-A", wing: "Primary", gender: "Female", parent: "Rudrappa Goudar", phone: "9845012332" }
  ],
  '3': [
    { roll: "BSS-301", name: "Akash Kammar", studentClass: "Class 3-A", wing: "Primary", gender: "Male", parent: "Parashuram Kammar", phone: "9845012333" },
    { roll: "BSS-302", name: "Keerthana Hallur", studentClass: "Class 3-A", wing: "Primary", gender: "Female", parent: "Ningappa Hallur", phone: "9845012334" },
    { roll: "BSS-303", name: "Varun Hatti", studentClass: "Class 3-A", wing: "Primary", gender: "Male", parent: "Kallappa Hatti", phone: "9845012335" },
    { roll: "BSS-304", name: "Ananya Savadi", studentClass: "Class 3-A", wing: "Primary", gender: "Female", parent: "Laxman Savadi", phone: "9845012336" },
    { roll: "BSS-305", name: "Nikhil Channur", studentClass: "Class 3-A", wing: "Primary", gender: "Male", parent: "Basavaraj Channur", phone: "9845012337" },
    { roll: "BSS-306", name: "Pooja Alagawadi", studentClass: "Class 3-A", wing: "Primary", gender: "Female", parent: "Yallappa Alagawadi", phone: "9845012338" },
    { roll: "BSS-307", name: "Gautam Ronad", studentClass: "Class 3-A", wing: "Primary", gender: "Male", parent: "Veeranna Ronad", phone: "9845012339" },
    { roll: "BSS-308", name: "Sahana Horatti", studentClass: "Class 3-A", wing: "Primary", gender: "Female", parent: "Basavaraj Horatti", phone: "9845012340" }
  ],
  '4': [
    { roll: "BSS-401", name: "Abhishek Navi", studentClass: "Class 4-A", wing: "Primary", gender: "Male", parent: "Hanumant Navi", phone: "9845012341" },
    { roll: "BSS-402", name: "Divya Byadagi", studentClass: "Class 4-A", wing: "Primary", gender: "Female", parent: "Shankar Byadagi", phone: "9845012342" },
    { roll: "BSS-403", name: "Pawan Kalal", studentClass: "Class 4-A", wing: "Primary", gender: "Male", parent: "Gopal Kalal", phone: "9845012343" },
    { roll: "BSS-404", name: "Megha Sannaki", studentClass: "Class 4-A", wing: "Primary", gender: "Female", parent: "Ramesh Sannaki", phone: "9845012344" },
    { roll: "BSS-405", name: "Tejas Kundaragi", studentClass: "Class 4-A", wing: "Primary", gender: "Male", parent: "Basavaraj Kundaragi", phone: "9845012345" },
    { roll: "BSS-406", name: "Rashmi Itagi", studentClass: "Class 4-A", wing: "Primary", gender: "Female", parent: "Irappa Itagi", phone: "9845012346" },
    { roll: "BSS-407", name: "Sharath Banakar", studentClass: "Class 4-A", wing: "Primary", gender: "Male", parent: "Somappa Banakar", phone: "9845012347" },
    { roll: "BSS-408", name: "Preeti Nelogi", studentClass: "Class 4-A", wing: "Primary", gender: "Female", parent: "Mahadevappa Nelogi", phone: "9845012348" }
  ],
  '5': [
    { roll: "BSS-501", name: "Kiran Bhavikatti", studentClass: "Class 5-A", wing: "Primary", gender: "Male", parent: "Sharanappa Bhavikatti", phone: "9845012349" },
    { roll: "BSS-502", name: "Sindhu Morab", studentClass: "Class 5-A", wing: "Primary", gender: "Female", parent: "Gangadhar Morab", phone: "9845012350" },
    { roll: "BSS-503", name: "Vikas Walikar", studentClass: "Class 5-A", wing: "Primary", gender: "Male", parent: "Durgappa Walikar", phone: "9845012351" },
    { roll: "BSS-504", name: "Kavya Kerur", studentClass: "Class 5-A", wing: "Primary", gender: "Female", parent: "Prabhu Kerur", phone: "9845012352" },
    { roll: "BSS-505", name: "Sachin Shirahatti", studentClass: "Class 5-A", wing: "Primary", gender: "Male", parent: "Kuber Shirahatti", phone: "9845012353" },
    { roll: "BSS-506", name: "Anusha Gokak", studentClass: "Class 5-A", wing: "Primary", gender: "Female", parent: "Vithal Gokak", phone: "9845012354" },
    { roll: "BSS-507", name: "Manoj Jamakhandi", studentClass: "Class 5-A", wing: "Primary", gender: "Male", parent: "Sidramappa", phone: "9845012355" },
    { roll: "BSS-508", name: "Shruti Mudhol", studentClass: "Class 5-A", wing: "Primary", gender: "Female", parent: "Sangappa Mudhol", phone: "9845012356" }
  ],
  '6': [
    { roll: "BSS-601", name: "Rohit Noolvi", studentClass: "Class 6-A", wing: "Middle School", gender: "Male", parent: "Basavaraj Noolvi", phone: "9845012357" },
    { roll: "BSS-602", name: "Spandana Hiregoudar", studentClass: "Class 6-A", wing: "Middle School", gender: "Female", parent: "Shivangouda", phone: "9845012358" },
    { roll: "BSS-603", name: "Omkar Pattanshetti", studentClass: "Class 6-A", wing: "Middle School", gender: "Male", parent: "Gurupadappa", phone: "9845012359" },
    { roll: "BSS-604", name: "Vaishnavi Mulgund", studentClass: "Class 6-A", wing: "Middle School", gender: "Female", parent: "Narayana Mulgund", phone: "9845012360" },
    { roll: "BSS-605", name: "Vinay Tirlapur", studentClass: "Class 6-A", wing: "Middle School", gender: "Male", parent: "Kallappa Tirlapur", phone: "9845012361" },
    { roll: "BSS-606", name: "Deepa Yaragatti", studentClass: "Class 6-A", wing: "Middle School", gender: "Female", parent: "Mallappa Yaragatti", phone: "9845012362" },
    { roll: "BSS-607", name: "Girish Hulkoti", studentClass: "Class 6-A", wing: "Middle School", gender: "Male", parent: "Shivanna Hulkoti", phone: "9845012363" },
    { roll: "BSS-608", name: "Soumya Kundgol", studentClass: "Class 6-A", wing: "Middle School", gender: "Female", parent: "Channappa Kundgol", phone: "9845012364" }
  ],
  '7': [
    { roll: "BSS-701", name: "Harsh Vardhan", studentClass: "Class 7-A", wing: "Middle School", gender: "Male", parent: "Kiran Vardhan", phone: "9845012365" },
    { roll: "BSS-702", name: "Rakshita Navalgund", studentClass: "Class 7-A", wing: "Middle School", gender: "Female", parent: "Basalingappa", phone: "9845012366" },
    { roll: "BSS-703", name: "Chetan Savanur", studentClass: "Class 7-A", wing: "Middle School", gender: "Male", parent: "Mahadevappa", phone: "9845012367" },
    { roll: "BSS-704", name: "Vidya Annigeri", studentClass: "Class 7-A", wing: "Middle School", gender: "Female", parent: "Shankar Annigeri", phone: "9845012368" },
    { roll: "BSS-705", name: "Samarth Kalghatgi", studentClass: "Class 7-A", wing: "Middle School", gender: "Male", parent: "Venkatesh Kalghatgi", phone: "9845012369" },
    { roll: "BSS-706", name: "Bhavana Alnavar", studentClass: "Class 7-A", wing: "Middle School", gender: "Female", parent: "Ramachandra", phone: "9845012370" },
    { roll: "BSS-707", name: "Prashant Shiggaon", studentClass: "Class 7-A", wing: "Middle School", gender: "Male", parent: "Virupaxappa", phone: "9845012371" },
    { roll: "BSS-708", name: "Jyoti Halyal", studentClass: "Class 7-A", wing: "Middle School", gender: "Female", parent: "Somappa Halyal", phone: "9845012372" }
  ],
  '8': [
    { roll: "BSS-801", name: "Anand Mugad", studentClass: "Class 8-A", wing: "High School", gender: "Male", parent: "Girish Mugad", phone: "9845012373" },
    { roll: "BSS-802", name: "Aishwarya Garag", studentClass: "Class 8-A", wing: "High School", gender: "Female", parent: "Malleshappa Garag", phone: "9845012374" },
    { roll: "BSS-803", name: "Suresh Kelageri", studentClass: "Class 8-A", wing: "High School", gender: "Male", parent: "Fakirappa Kelageri", phone: "9845012375" },
    { roll: "BSS-804", name: "Namrata Attikolla", studentClass: "Class 8-A", wing: "High School", gender: "Female", parent: "Vasant Attikolla", phone: "9845012376" },
    { roll: "BSS-805", name: "Mahesh Sattur", studentClass: "Class 8-A", wing: "High School", gender: "Male", parent: "Prakash Sattur", phone: "9845012377" },
    { roll: "BSS-806", name: "Kavita Mummigatti", studentClass: "Class 8-A", wing: "High School", gender: "Female", parent: "Shivappa", phone: "9845012378" },
    { roll: "BSS-807", name: "Ramesh Rayapur", studentClass: "Class 8-A", wing: "High School", gender: "Male", parent: "Basavaraj Rayapur", phone: "9845012379" },
    { roll: "BSS-808", name: "Shweta Navalur", studentClass: "Class 8-A", wing: "High School", gender: "Female", parent: "Sidramappa Navalur", phone: "9845012380" }
  ],
  '9': [
    { roll: "BSS-901", name: "Yashwant Unkal", studentClass: "Class 9-A", wing: "High School", gender: "Male", parent: "Prabhu Unkal", phone: "9845012381" },
    { roll: "BSS-902", name: "Pallavi Bengeri", studentClass: "Class 9-A", wing: "High School", gender: "Female", parent: "Suresh Bengeri", phone: "9845012382" },
    { roll: "BSS-903", name: "Deepak Gabbur", studentClass: "Class 9-A", wing: "High School", gender: "Male", parent: "Veerappa Gabbur", phone: "9845012383" },
    { roll: "BSS-904", name: "Roopa Kusugal", studentClass: "Class 9-A", wing: "High School", gender: "Female", parent: "Shankar Kusugal", phone: "9845012384" },
    { roll: "BSS-905", name: "Praveen Byahatti", studentClass: "Class 9-A", wing: "High School", gender: "Male", parent: "Kallappa Byahatti", phone: "9845012385" },
    { roll: "BSS-906", name: "Sangeeta Amminabhavi", studentClass: "Class 9-A", wing: "High School", gender: "Female", parent: "Gurusiddayya", phone: "9845012386" },
    { roll: "BSS-907", name: "Basavaraj Shiraguppi", studentClass: "Class 9-A", wing: "High School", gender: "Male", parent: "Somalingappa", phone: "9845012387" },
    { roll: "BSS-908", name: "Madhuri Hebballi", studentClass: "Class 9-A", wing: "High School", gender: "Female", parent: "Basavaraj Hebballi", phone: "9845012388" }
  ],
  '10': [
    { roll: "BSS-10042", name: "Aarav Sharma", studentClass: "Class 10-A", wing: "High School", gender: "Male", parent: "Dr. Rajesh Sharma", phone: "9845012389" },
    { roll: "BSS-10043", name: "Diya Patil", studentClass: "Class 10-A", wing: "High School", gender: "Female", parent: "Basavaraj Patil", phone: "9845012390" },
    { roll: "BSS-10044", name: "Rohan Deshmukh", studentClass: "Class 10-A", wing: "High School", gender: "Male", parent: "Anand Deshmukh", phone: "9845012391" },
    { roll: "BSS-10045", name: "Ananya Hegde", studentClass: "Class 10-A", wing: "High School", gender: "Female", parent: "Girish Hegde", phone: "9845012392" },
    { roll: "BSS-10046", name: "Aditya Verma", studentClass: "Class 10-A", wing: "High School", gender: "Male", parent: "Sanjay Verma", phone: "9845012393" },
    { roll: "BSS-10047", name: "Pooja Kulkarni", studentClass: "Class 10-A", wing: "High School", gender: "Female", parent: "Ramesh Kulkarni", phone: "9845012394" },
    { roll: "BSS-10048", name: "Kiran Kumar", studentClass: "Class 10-A", wing: "High School", gender: "Male", parent: "Kumaraswamy", phone: "9845012395" },
    { roll: "BSS-10049", name: "Sneha Reddy", studentClass: "Class 10-A", wing: "High School", gender: "Female", parent: "Venkat Reddy", phone: "9845012396" },
    { roll: "BSS-10050", name: "Manjunath Gowda", studentClass: "Class 10-A", wing: "High School", gender: "Male", parent: "Praveen Gowda", phone: "9845012397" },
    { roll: "BSS-10051", name: "Priya Hiremath", studentClass: "Class 10-A", wing: "High School", gender: "Female", parent: "Sharan Hiremath", phone: "9845012398" }
  ]
};

const SEED_STAFF = [
  { emp_id: "BSS-ADM01", name: "Dr. S. Patil", department: "Administration", role: "Principal", email: "principal@basavashrees.edu.in", phone: "9845000001" },
  { emp_id: "BSS-ADM02", name: "Mrs. S. Desai", department: "Administration", role: "Vice Principal", email: "viceprincipal@basavashrees.edu.in", phone: "9845000002" },
  { emp_id: "BSS-ACD01", name: "Mr. K. Sharma", department: "Academics", role: "Chief Exam Coordinator", email: "exams@basavashrees.edu.in", phone: "9845000003" },
  { emp_id: "BSS-FAC01", name: "Dr. R. Kulkarni", department: "Science (Physics)", role: "Senior Faculty", email: "kulkarni@basavashrees.edu.in", phone: "9845000004" },
  { emp_id: "BSS-FAC02", name: "Dr. B. Patil", department: "Kannada Literature", role: "Head of Dept", email: "bpatil@basavashrees.edu.in", phone: "9845000005" },
  { emp_id: "BSS-FAC03", name: "Mr. D. Alva", department: "English", role: "Senior Faculty", email: "alva@basavashrees.edu.in", phone: "9845000006" },
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
