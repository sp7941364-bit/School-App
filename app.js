// Basava Shree School Portal - Core Application State
let currentRole = 'student';
    let currentActiveView = 'login';
    let activeTimetableDay = 'Tue';
    let isDesktopExpanded = false;

    // Timetable Data by Day
    const timetableData = {
      Mon: [
        { period: 1, time: "08:30 AM", subject: "Mathematics", teacher: "Class Teacher", room: "Room 204", status: "Completed" },
        { period: 2, time: "09:15 AM", subject: "Science (Physics)", teacher: "Dr. R. Kulkarni", room: "Lab Block 1", status: "Completed" },
        { period: 3, time: "10:15 AM", subject: "Kannada Language", teacher: "Dr. B. Patil", room: "Room 204", status: "Completed" },
        { period: 4, time: "11:00 AM", subject: "English Literature", teacher: "Mr. D. Alva", room: "Room 204", status: "Completed" },
        { period: 5, time: "12:30 PM", subject: "Social Studies", teacher: "Mrs. M. Joshi", room: "Room 204", status: "Completed" },
        { period: 6, time: "01:15 PM", subject: "Physical Education", teacher: "Coach Ramesh", room: "Sports Ground", status: "Completed" }
      ],
      Tue: [
        { period: 1, time: "08:30 AM", subject: "Mathematics", teacher: "Class Teacher", room: "Room 204", status: "Completed" },
        { period: 2, time: "09:15 AM", subject: "Physics Theory & Optics", teacher: "Dr. R. Kulkarni", room: "Lab Block 1", status: "Active" },
        { period: 3, time: "10:15 AM", subject: "English Literature", teacher: "Mr. D. Alva", room: "Room 204", status: "Upcoming" },
        { period: 4, time: "11:00 AM", subject: "Kannada Grammar", teacher: "Dr. B. Patil", room: "Room 204", status: "Upcoming" },
        { period: 5, time: "12:30 PM", subject: "Social Studies (History)", teacher: "Mrs. M. Joshi", room: "Room 204", status: "Upcoming" },
        { period: 6, time: "01:15 PM", subject: "Computer Applications", teacher: "Mr. S. Rao", room: "Computer Lab 2", status: "Upcoming" }
      ],
      Wed: [
        { period: 1, time: "08:30 AM", subject: "Chemistry Practical", teacher: "Dr. S. K. Hiremath", room: "Chemistry Lab", status: "Scheduled" },
        { period: 2, time: "09:15 AM", subject: "Chemistry Practical", teacher: "Dr. S. K. Hiremath", room: "Chemistry Lab", status: "Scheduled" },
        { period: 3, time: "10:15 AM", subject: "Mathematics Problem Solving", teacher: "Class Teacher", room: "Room 204", status: "Scheduled" },
        { period: 4, time: "11:00 AM", subject: "Social Studies (Civics)", teacher: "Mrs. M. Joshi", room: "Room 204", status: "Scheduled" },
        { period: 5, time: "12:30 PM", subject: "English Creative Writing", teacher: "Mr. D. Alva", room: "Room 204", status: "Scheduled" },
        { period: 6, time: "01:15 PM", subject: "Library & Self Study", teacher: "Librarian G. Rao", room: "Central Library", status: "Scheduled" }
      ],
      Thu: [
        { period: 1, time: "08:30 AM", subject: "Biology & Cell Genetics", teacher: "Mrs. V. Deshpande", room: "Biology Lab", status: "Scheduled" },
        { period: 2, time: "09:15 AM", subject: "Mathematics Coordinate Geometry", teacher: "Class Teacher", room: "Room 204", status: "Scheduled" },
        { period: 3, time: "10:15 AM", subject: "Physics Thermodynamics", teacher: "Dr. R. Kulkarni", room: "Room 204", status: "Scheduled" },
        { period: 4, time: "11:00 AM", subject: "Kannada Sahitya", teacher: "Dr. B. Patil", room: "Room 204", status: "Scheduled" },
        { period: 5, time: "12:30 PM", subject: "English Comprehension", teacher: "Mr. D. Alva", room: "Room 204", status: "Scheduled" },
        { period: 6, time: "01:15 PM", subject: "Art & Heritage Craft", teacher: "Mr. C. Somesh", room: "Art Studio", status: "Scheduled" }
      ],
      Fri: [
        { period: 1, time: "08:30 AM", subject: "Mathematics Mock Test", teacher: "Class Teacher", room: "Room 204", status: "Scheduled" },
        { period: 2, time: "09:15 AM", subject: "Science Pre-Board Revision", teacher: "Dr. R. Kulkarni", room: "Room 204", status: "Scheduled" },
        { period: 3, time: "10:15 AM", subject: "Social Science Geography Map", teacher: "Mrs. M. Joshi", room: "Room 204", status: "Scheduled" },
        { period: 4, time: "11:00 AM", subject: "Kannada Essay & Poetry", teacher: "Dr. B. Patil", room: "Room 204", status: "Scheduled" },
        { period: 5, time: "12:30 PM", subject: "English Formal Letters", teacher: "Mr. D. Alva", room: "Room 204", status: "Scheduled" },
        { period: 6, time: "01:15 PM", subject: "Sports / NCC Drill", teacher: "Coach Ramesh", room: "Main Ground", status: "Scheduled" }
      ],
      Sat: [
        { period: 1, time: "08:30 AM", subject: "Weekly Quiz & Evaluation", teacher: "Class Teacher", room: "Room 204", status: "Scheduled" },
        { period: 2, time: "09:15 AM", subject: "Science Exhibition Mentoring", teacher: "Dr. S. K. Hiremath", room: "Science Hub", status: "Scheduled" },
        { period: 3, time: "10:15 AM", subject: "Club Activities & Debate", teacher: "Staff Committee", room: "Auditorium", status: "Scheduled" },
        { period: 4, time: "11:00 AM", subject: "Assembly & Vachana Recitation", teacher: "All Faculty", room: "Assembly Hall", status: "Scheduled" }
      ]
    };

    // Role Configs
    const roleConfigs = {
      student: {
        title: 'Student Portal Sign In',
        subtitle: '',
        label: 'Student Roll Number',
        placeholder: 'e.g., BSS-10042 (or 10042)',
        demoVal: 'BSS-10042'
      },
      staff: {
        title: 'Faculty & Staff Sign In',
        subtitle: '',
        label: 'Staff ID / Employee Code',
        placeholder: 'e.g., BSS-101 (or 101)',
        demoVal: 'BSS-101'
      },
      parent: {
        title: 'Parent & Guardian Portal',
        subtitle: '',
        label: 'Registered Mobile No.',
        placeholder: 'e.g., 98450 12345',
        demoVal: '98450 12345'
      },
      principal: {
        title: 'Principal Administration Portal',
        subtitle: '',
        label: 'Principal ID / Passcode',
        placeholder: 'e.g., BSS-100 (or principal)',
        demoVal: 'BSS-100'
      }
    };

    function selectRole(roleKey) {
      currentRole = roleKey;
      ['student', 'staff', 'parent', 'principal'].forEach(r => {
        const btn = document.getElementById('role-' + r);
        if (btn) {
          if (r === roleKey) {
            btn.className = "flex-1 py-2 text-center rounded-lg bg-surface-container-lowest dark:bg-primary-container text-primary-container dark:text-white font-bold text-xs card-depth-1 transition-all";
          } else {
            btn.className = "flex-1 py-2 text-center rounded-lg text-on-surface-variant dark:text-slate-400 font-semibold text-xs hover:text-on-surface transition-all";
          }
        }
      });

      const config = roleConfigs[roleKey];
      const heading = document.getElementById('login-heading');
      const subheading = document.getElementById('login-subheading');
      const label = document.getElementById('identifier-label');
      const input = document.getElementById('enrollment-id');
      const pwdContainer = document.getElementById('password-container');
      const pwdLabel = document.getElementById('password-label');
      const studentRollBadge = document.getElementById('student-roll-badge');
      const studentRollHint = document.getElementById('student-roll-hint');
      const studentPwdHint = document.getElementById('student-pwd-hint');
      const pwdPinText = document.getElementById('pwd-pin-text');
      const pwdField = document.getElementById('password-field');
      const forgotBtn = document.getElementById('forgot-pwd-btn');
      const submitBtn = document.getElementById('btn-login-submit');

      if (heading) heading.innerText = config.title;
      if (subheading) {
        subheading.innerText = config.subtitle;
        if (!config.subtitle) {
          subheading.classList.add('hidden');
        } else {
          subheading.classList.remove('hidden');
        }
      }
      if (label) label.innerText = config.label;
      if (input) {
        input.setAttribute('placeholder', config.placeholder);
        input.value = config.demoVal;
        input.classList.remove('border-red-500', 'ring-2', 'ring-red-400');
      }

      if (pwdContainer) pwdContainer.classList.remove('hidden');
      if (forgotBtn) forgotBtn.classList.remove('hidden');

      const studentChips = document.getElementById('student-demo-chips');
      const staffChips = document.getElementById('staff-demo-chips');
      const parentChips = document.getElementById('parent-demo-chips');

      if (roleKey === 'student') {
        if (pwdLabel) pwdLabel.innerText = 'Student Password';
        if (studentRollBadge) {
          studentRollBadge.classList.add('hidden');
        }
        const pwdPinBadge = document.getElementById('pwd-pin-badge');
        if (pwdPinBadge) {
          pwdPinBadge.classList.add('hidden');
        }
        if (studentRollHint) {
          studentRollHint.classList.add('hidden');
          studentRollHint.innerText = '';
        }
        if (studentPwdHint) studentPwdHint.classList.add('hidden');
        if (submitBtn) submitBtn.innerHTML = `<span>Sign In to Student Portal</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span>`;
        if (studentChips) studentChips.classList.add('hidden');
        if (staffChips) staffChips.classList.add('hidden');
        if (parentChips) parentChips.classList.add('hidden');
        handleStudentRollInput(input ? input.value : 'BSS-10042');
      } else if (roleKey === 'staff') {
        if (pwdLabel) pwdLabel.innerText = 'Faculty Password';
        if (studentRollBadge) {
          studentRollBadge.classList.add('hidden');
        }
        const pwdPinBadge = document.getElementById('pwd-pin-badge');
        if (pwdPinBadge) {
          pwdPinBadge.classList.add('hidden');
        }
        if (studentRollHint) {
          studentRollHint.classList.add('hidden');
          studentRollHint.innerText = '';
        }
        if (studentPwdHint) studentPwdHint.classList.add('hidden');
        if (submitBtn) submitBtn.innerHTML = `<span>Sign In to Faculty Console</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span>`;
        if (studentChips) studentChips.classList.add('hidden');
        if (staffChips) staffChips.classList.add('hidden');
        if (parentChips) parentChips.classList.add('hidden');
        handleStaffIdInput(input ? input.value : 'BSS-101');
      } else if (roleKey === 'parent') {
        if (pwdLabel) pwdLabel.innerText = 'Parent Password';
        if (studentRollBadge) {
          studentRollBadge.classList.add('hidden');
        }
        const pwdPinBadge = document.getElementById('pwd-pin-badge');
        if (pwdPinBadge) {
          pwdPinBadge.classList.add('hidden');
        }
        if (studentRollHint) {
          studentRollHint.classList.add('hidden');
          studentRollHint.innerText = '';
        }
        if (studentPwdHint) studentPwdHint.classList.add('hidden');
        if (submitBtn) submitBtn.innerHTML = `<span>Sign In to Parent Portal</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span>`;
        if (studentChips) studentChips.classList.add('hidden');
        if (staffChips) staffChips.classList.add('hidden');
        if (parentChips) parentChips.classList.add('hidden');
        handleParentPhoneInput(input ? input.value : '98450 12345');
      } else if (roleKey === 'principal') {
        if (pwdLabel) pwdLabel.innerText = 'Principal Passcode';
        if (studentRollBadge) {
          studentRollBadge.classList.add('hidden');
        }
        const pwdPinBadge = document.getElementById('pwd-pin-badge');
        if (pwdPinBadge) {
          pwdPinBadge.classList.add('hidden');
        }
        if (studentRollHint) {
          studentRollHint.classList.add('hidden');
          studentRollHint.innerText = '';
        }
        if (studentPwdHint) studentPwdHint.classList.add('hidden');
        if (submitBtn) submitBtn.innerHTML = `<span>Sign In as Principal</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span>`;
        if (studentChips) studentChips.classList.add('hidden');
        if (staffChips) staffChips.classList.add('hidden');
        if (parentChips) parentChips.classList.add('hidden');
        handlePrincipalIdInput(input ? input.value : 'BSS-100');
      }

      const errorMsg = document.getElementById('login-error-msg');
      if (errorMsg) errorMsg.classList.add('hidden');
    }

    function fillStudentRollDemo(roll) {
      selectRole('student');
      const input = document.getElementById('enrollment-id');
      if (input) {
        input.value = roll;
        input.classList.remove('border-red-500', 'ring-2', 'ring-red-400');
        handleStudentRollInput(roll);
      }
      showToast('Selected student roll: ' + roll);
    }

    function fillStaffDemo(staffId) {
      selectRole('staff');
      const input = document.getElementById('enrollment-id');
      if (input) {
        input.value = staffId;
        input.classList.remove('border-red-500', 'ring-2', 'ring-red-400');
        handleStaffIdInput(staffId);
      }
      showToast('Selected faculty ID: ' + staffId);
    }

    function fillParentDemo(phone) {
      selectRole('parent');
      const input = document.getElementById('enrollment-id');
      if (input) {
        input.value = phone;
        input.classList.remove('border-red-500', 'ring-2', 'ring-red-400');
        handleParentPhoneInput(phone);
      }
      showToast('Selected parent mobile: ' + phone);
    }

    function fillDemo(roleKey) {
      selectRole(roleKey);
      if (roleKey === 'student') {
        const input = document.getElementById('enrollment-id');
        if (input) handleStudentRollInput(input.value);
      } else if (roleKey === 'staff') {
        const input = document.getElementById('enrollment-id');
        if (input) handleStaffIdInput(input.value);
      } else if (roleKey === 'parent') {
        const input = document.getElementById('enrollment-id');
        if (input) handleParentPhoneInput(input.value);
      } else if (roleKey === 'principal') {
        const input = document.getElementById('enrollment-id');
        if (input) handlePrincipalIdInput(input.value);
      }
      showToast('Autofilled credentials for ' + roleKey.toUpperCase());
    }

    function handleLoginIdentifierInput(val) {
      if (currentRole === 'student') {
        handleStudentRollInput(val);
      } else if (currentRole === 'staff') {
        handleStaffIdInput(val);
      } else if (currentRole === 'parent') {
        handleParentPhoneInput(val);
      } else if (currentRole === 'principal') {
        handlePrincipalIdInput(val);
      }
    }

    function handlePrincipalIdInput(val) {
      if (currentRole !== 'principal') return;
      const pwdBadgeVal = document.getElementById('pwd-pin-val');
      const pwdPinBadge = document.getElementById('pwd-pin-badge');
      if (pwdPinBadge) pwdPinBadge.classList.add('hidden');
      const studentRollBadge = document.getElementById('student-roll-badge');
      if (studentRollBadge) studentRollBadge.classList.add('hidden');
      const studentRollHint = document.getElementById('student-roll-hint');
      if (studentRollHint) {
        studentRollHint.classList.add('hidden');
        studentRollHint.innerText = '';
      }
    }

    function handleParentPhoneInput(phoneVal) {
      if (currentRole !== 'parent') return;
      const pwdBadgeVal = document.getElementById('pwd-pin-val');
      const pwdPinBadge = document.getElementById('pwd-pin-badge');
      if (pwdPinBadge) pwdPinBadge.classList.add('hidden');
      const studentRollBadge = document.getElementById('student-roll-badge');
      if (studentRollBadge) studentRollBadge.classList.add('hidden');
      const studentRollHint = document.getElementById('student-roll-hint');
      if (studentRollHint) {
        studentRollHint.classList.add('hidden');
        studentRollHint.innerText = '';
      }
      const pwdField = document.getElementById('password-field');
      const pwdHint = document.getElementById('student-pwd-hint');
      if (pwdHint) {
        pwdHint.classList.add('hidden');
        pwdHint.innerText = '';
      }
      const errorMsg = document.getElementById('login-error-msg');
      if (errorMsg) errorMsg.classList.add('hidden');

      const trimmed = (phoneVal || '').trim();
      if (!trimmed) {
        if (pwdBadgeVal) pwdBadgeVal.innerText = 'parent@number';
        if (pwdField) pwdField.setAttribute('placeholder', "Enter parent password");
        if (pwdHint) {
          pwdHint.classList.add('hidden');
          pwdHint.innerText = '';
        }
        return;
      }

      let matchedStudent = null;
      if (typeof classXStudents !== 'undefined' && Array.isArray(classXStudents)) {
        const clean = trimmed.toLowerCase().replace(/[\/\-\s\+]/g, '');
        const digits = trimmed.replace(/\D/g, '');

        matchedStudent = classXStudents.find(st => {
          const stPhoneClean = (st.phone || '').replace(/\D/g, '');
          const stRollClean = (st.roll || '').toLowerCase().replace(/[\/\-\s]/g, '');
          const stRollDigits = (st.roll || '').replace(/\D/g, '');
          const stParentName = (st.parentName || '').toLowerCase();
          const stName = (st.name || '').toLowerCase();

          return (stPhoneClean && digits && (stPhoneClean.endsWith(digits) || digits.endsWith(stPhoneClean) || (digits.length >= 5 && stPhoneClean.includes(digits)))) ||
            (stRollDigits && digits && stRollDigits === digits) ||
            (stRollClean && stRollClean === clean) ||
            (clean.length >= 4 && stParentName.includes(clean)) ||
            (clean.length >= 4 && stName.includes(clean));
        });
      }

      if (matchedStudent) {
        const expectedPwd = typeof getParentDefaultPassword === 'function' ? getParentDefaultPassword(matchedStudent) : 'mahesh@12345';
        if (pwdBadgeVal) {
          pwdBadgeVal.innerText = expectedPwd;
        }
        if (pwdField) {
          pwdField.setAttribute('placeholder', 'Enter parent password');
          const curVal = (pwdField.value || '').trim().toLowerCase();
          const isGenericOrOtherParent = !curVal || curVal === 'parent2024' || curVal === 'basava2024' || (typeof classXStudents !== 'undefined' && classXStudents.some(s => {
            const op = typeof getParentDefaultPassword === 'function' ? getParentDefaultPassword(s) : '';
            return op && op.toLowerCase() === curVal;
          }));
          if (isGenericOrOtherParent) {
            pwdField.value = expectedPwd;
          }
        }
        if (pwdHint) {
          pwdHint.classList.add('hidden');
          pwdHint.innerText = '';
        }
      } else {
        if (pwdBadgeVal) pwdBadgeVal.innerText = 'parent@number';
        if (pwdField) pwdField.setAttribute('placeholder', 'Enter parent password');
        if (pwdHint) {
          pwdHint.classList.add('hidden');
          pwdHint.innerText = '';
        }
      }
    }

    function handleStaffIdInput(idVal) {
      if (currentRole !== 'staff') return;
      const pwdPinBadge = document.getElementById('pwd-pin-badge');
      if (pwdPinBadge) pwdPinBadge.classList.add('hidden');
      const studentRollBadge = document.getElementById('student-roll-badge');
      if (studentRollBadge) studentRollBadge.classList.add('hidden');
      const pwdField = document.getElementById('password-field');
      const pwdHint = document.getElementById('student-pwd-hint');
      if (pwdHint) pwdHint.classList.add('hidden');
      const studentRollHint = document.getElementById('student-roll-hint');
      if (studentRollHint) {
        studentRollHint.classList.add('hidden');
        studentRollHint.innerText = '';
      }
      const errorMsg = document.getElementById('login-error-msg');
      if (errorMsg) errorMsg.classList.add('hidden');

      const trimmed = (idVal || '').trim();
      if (!trimmed) {
        if (pwdField) pwdField.setAttribute('placeholder', "Enter faculty password");
        return;
      }

      let matchedStaff = null;
      if (typeof staffMembersList !== 'undefined' && Array.isArray(staffMembersList)) {
        const clean = trimmed.toLowerCase().replace(/[\/\-\s]/g, '');
        const digits = trimmed.replace(/\D/g, '');
        matchedStaff = staffMembersList.find(st => {
          const stClean = (st.id || '').toLowerCase().replace(/[\/\-\s]/g, '');
          const stDigits = (st.id || '').replace(/\D/g, '');
          const stName = (st.name || '').toLowerCase();
          return (stClean && stClean === clean) ||
            (stDigits && digits && stDigits === digits) ||
            (st.id && st.id.toLowerCase() === trimmed.toLowerCase()) ||
            (clean.length >= 4 && stName.includes(clean));
        });
      }

      if (matchedStaff) {
        const expectedPwd = matchedStaff.password || (typeof getStaffDefaultPassword === 'function' ? getStaffDefaultPassword(matchedStaff) : 'staff@101');
        if (pwdField) {
          pwdField.setAttribute('placeholder', `Enter faculty password`);
          const curVal = (pwdField.value || '').trim().toLowerCase();
          const isGenericOrOtherStaff = !curVal || curVal === 'faculty2024' || curVal === 'basava2024' || (typeof staffMembersList !== 'undefined' && staffMembersList.some(s => s.password && s.password.toLowerCase() === curVal));
          if (isGenericOrOtherStaff) {
            pwdField.value = expectedPwd;
          }
        }
      } else {
        if (pwdField) pwdField.setAttribute('placeholder', "Enter faculty password");
      }
    }

    function togglePasswordVisibility() {
      const pwd = document.getElementById('password-field');
      const icon = document.getElementById('pwd-eye-icon');
      if (pwd.type === 'password') {
        pwd.type = 'text';
        icon.innerText = 'visibility_off';
      } else {
        pwd.type = 'password';
        icon.innerText = 'visibility';
      }
    }

    // Dynamic Student Roll & Password Sync
    function handleStudentRollInput(rollVal) {
      if (currentRole !== 'student') return;
      const studentRollBadge = document.getElementById('student-roll-badge');
      if (studentRollBadge) studentRollBadge.classList.add('hidden');
      const pwdPinBadge = document.getElementById('pwd-pin-badge');
      if (pwdPinBadge) pwdPinBadge.classList.add('hidden');
      const pwdBadgeVal = document.getElementById('pwd-pin-val');
      const pwdField = document.getElementById('password-field');
      const pwdHint = document.getElementById('student-pwd-hint');
      if (pwdHint) pwdHint.classList.add('hidden');
      const errorMsg = document.getElementById('login-error-msg');
      if (errorMsg) errorMsg.classList.add('hidden');

      const trimmed = (rollVal || '').trim();
      if (!trimmed) {
        if (pwdBadgeVal) pwdBadgeVal.innerText = '';
        if (pwdField) pwdField.setAttribute('placeholder', "Enter student password");
        if (pwdHint) pwdHint.innerHTML = '';
        return;
      }

      let matchedStudent = null;
      if (typeof classXStudents !== 'undefined' && Array.isArray(classXStudents)) {
        const clean = trimmed.toLowerCase().replace(/[\/\-\s]/g, '');
        const digits = trimmed.replace(/\D/g, '');
        matchedStudent = classXStudents.find(st => {
          const stClean = (st.roll || '').toLowerCase().replace(/[\/\-\s]/g, '');
          const stDigits = (st.roll || '').replace(/\D/g, '');
          const stName = (st.name || '').toLowerCase();
          return (stClean && stClean === clean) ||
            (stDigits && digits && stDigits === digits) ||
            (st.roll && st.roll.toLowerCase() === trimmed.toLowerCase()) ||
            (clean.length >= 4 && stName.includes(clean));
        });
      }

      if (matchedStudent) {
        const expectedPwd = matchedStudent.password || (typeof getStudentDefaultPassword === 'function' ? getStudentDefaultPassword(matchedStudent) : `${matchedStudent.name.split(' ')[0].toLowerCase()}@${matchedStudent.roll.replace(/\D/g, '')}`);
        if (pwdBadgeVal) {
          pwdBadgeVal.innerText = expectedPwd;
        }
        if (pwdField) {
          pwdField.setAttribute('placeholder', `Enter student password`);
          // Auto-sync value if currently pointing to previous student's password or generic default
          const curVal = (pwdField.value || '').trim().toLowerCase();
          const isGenericOrOtherStudent = !curVal || curVal === 'basava2024' || (typeof classXStudents !== 'undefined' && classXStudents.some(s => s.password && s.password.toLowerCase() === curVal));
          if (isGenericOrOtherStudent) {
            pwdField.value = expectedPwd;
          }
        }
        if (pwdHint) {
          pwdHint.classList.add('hidden');
        }
      } else {
        if (pwdBadgeVal) pwdBadgeVal.innerText = '';
        if (pwdHint) pwdHint.classList.add('hidden');
      }
    }

    // View Navigation
    function navigateTo(viewId, subtab) {
      let targetView = viewId;
      let activeNavTab = viewId;
      if (viewId === 'attendance') {
        targetView = 'timetable';
        subtab = 'attendance';
        activeNavTab = 'attendance';
      } else if (viewId === 'timetable' && subtab === 'attendance') {
        activeNavTab = 'attendance';
      } else if (viewId === 'timetable') {
        activeNavTab = 'timetable';
      }

      const views = ['login', 'dashboard', 'timetable', 'academics', 'profile', 'faculty', 'parent', 'principal'];
      views.forEach(v => {
        const el = document.getElementById('view-' + v);
        if (el) {
          if (v === targetView) {
            el.classList.remove('view-exit', 'hidden');
            el.classList.add('view-enter');
          } else {
            el.classList.add('view-exit', 'hidden');
            el.classList.remove('view-enter');
          }
        }
      });

      // Bottom bar active highlight
      const navBar = document.getElementById('bottom-nav');
      if (targetView === 'login' || targetView === 'faculty' || targetView === 'parent' || targetView === 'principal') {
        navBar.classList.add('hidden');
      } else {
        navBar.classList.remove('hidden');
        ['dashboard', 'attendance', 'timetable', 'academics', 'profile'].forEach(tab => {
          const item = document.getElementById('nav-item-' + tab);
          if (item) {
            const icon = item.querySelector('.material-symbols-outlined');
            if (tab === activeNavTab) {
              item.className = "flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-150 bg-primary text-white cursor-pointer active:scale-95";
              if (icon) icon.classList.add('material-symbols-fill');
            } else {
              item.className = "flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-150 text-on-surface-variant dark:text-slate-400 hover:text-primary cursor-pointer active:scale-95";
              if (icon) icon.classList.remove('material-symbols-fill');
            }
          }
        });
      }

      currentActiveView = targetView;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (targetView === 'dashboard') {
        renderDashboardTodaySchedule();
      } else if (targetView === 'timetable') {
        renderDaySchedule(activeTimetableDay);
        if (subtab === 'attendance') {
          switchTimetableTab('attendance');
        } else {
          switchTimetableTab('schedule');
        }
      } else if (targetView === 'faculty') {
        renderStaffRegister(currentStaffFilter);
        renderFacultyAttendanceRoster();
        renderFacultyMarksTable();
        if (subtab) {
          switchFacultyTab(subtab);
        } else {
          switchFacultyTab('staff-matrix');
        }
      } else if (targetView === 'parent') {
        if (subtab) {
          switchParentTab(subtab);
        } else {
          switchParentTab('safety');
        }
      } else if (targetView === 'principal') {
        if (subtab) {
          switchPrincipalTab(subtab);
        } else {
          switchPrincipalTab('overview');
        }
      }
    }

    function handleLogin(e) {
      if (e) e.preventDefault();
      const errorMsg = document.getElementById('login-error-msg');
      const errorText = document.getElementById('login-error-text');
      if (errorMsg) {
        errorMsg.classList.add('hidden');
        if (errorText) errorText.innerText = '';
      }

      const idInput = document.getElementById('enrollment-id');
      const pwdInput = document.getElementById('password-field');
      const identifier = idInput ? idInput.value.trim() : '';

      // Reset error styles
      if (idInput) idInput.classList.remove('border-red-500', 'ring-2', 'ring-red-400');
      if (pwdInput) pwdInput.classList.remove('border-red-500', 'ring-2', 'ring-red-400');

      if (!identifier) {
        if (idInput) {
          idInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
          idInput.focus();
        }
        if (errorMsg && errorText) {
          errorText.innerText = currentRole === 'student' ? 'Please enter your Student Roll Number' : 'Please enter your ID';
          errorMsg.classList.remove('hidden');
        }
        showToast(currentRole === 'student' ? 'Please enter Roll Number' : 'Please enter ID');
        return;
      }

      // =========================================================================
      // STUDENT LOGIN: ROLL NUMBER & STUDENT PASSWORD
      // =========================================================================
      if (currentRole === 'student') {
        const password = pwdInput ? pwdInput.value.trim() : '';

        // Strict match: One student = One roll number
        let matchedStudent = null;
        if (typeof classXStudents !== 'undefined' && Array.isArray(classXStudents)) {
          const inputClean = identifier.toLowerCase().replace(/[\/\-\s]/g, '');
          const inputDigits = identifier.replace(/\D/g, '');

          matchedStudent = classXStudents.find(st => {
            const stRollClean = (st.roll || '').toLowerCase().replace(/[\/\-\s]/g, '');
            const stRollDigits = (st.roll || '').replace(/\D/g, '');
            const stAdmnClean = (st.admn || '').toLowerCase().replace(/[\/\-\s]/g, '');
            const stNameClean = (st.name || '').toLowerCase();

            return (stRollClean && stRollClean === inputClean) ||
              (stRollDigits && inputDigits && stRollDigits === inputDigits) ||
              (stAdmnClean && stAdmnClean === inputClean) ||
              (identifier.toLowerCase() === (st.roll || '').toLowerCase()) ||
              (inputClean.length >= 4 && stNameClean.includes(inputClean));
          });
        }

        if (!matchedStudent) {
          if (idInput) {
            idInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            idInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Roll Number "${identifier}" not found. Each student has 1 unique roll number (e.g. BSS-10042 to BSS-10049).`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Roll "${identifier}" not registered`);
          return;
        }

        // Validate Student Password: 1 STUDENT = 1 PASSWORD
        const studentDefaultPwd = matchedStudent.password || (typeof getStudentDefaultPassword === 'function' ? getStudentDefaultPassword(matchedStudent) : `${matchedStudent.name.split(' ')[0].toLowerCase()}@${matchedStudent.roll.replace(/\D/g, '')}`);

        if (!password) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Please enter password for ${matchedStudent.name}. (PIN: ${studentDefaultPwd})`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Please enter ${matchedStudent.name}'s password (${studentDefaultPwd})`);
          return;
        }

        const cleanPwd = password.toLowerCase();
        const expectedStudentPwd = studentDefaultPwd.toLowerCase();
        const rollDigits = (matchedStudent.roll || '').replace(/\D/g, '');
        const rollCode = (matchedStudent.roll || '').toLowerCase().replace(/[^a-z0-9]/g, '');

        // Check if user entered a password belonging to ANOTHER student!
        let belongsToOtherStudent = null;
        if (typeof classXStudents !== 'undefined' && Array.isArray(classXStudents)) {
          belongsToOtherStudent = classXStudents.find(other => {
            if ((other.roll || '').toLowerCase() === (matchedStudent.roll || '').toLowerCase()) return false;
            const otherPwd = (other.password || (typeof getStudentDefaultPassword === 'function' ? getStudentDefaultPassword(other) : '')).toLowerCase();
            const otherRollDigits = (other.roll || '').replace(/\D/g, '');
            const otherRollCode = (other.roll || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            return (otherPwd && cleanPwd === otherPwd) ||
              (otherRollDigits && cleanPwd === otherRollDigits) ||
              (otherRollCode && cleanPwd === otherRollCode);
          });
        }

        if (belongsToOtherStudent) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Access Denied: That password belongs to "${belongsToOtherStudent.name}". Please enter ${matchedStudent.name}'s password.`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Wrong password! That belongs to ${belongsToOtherStudent.name}`);
          return;
        }

        // Valid passwords for THIS specific student:
        // 1. Their designated personal password (e.g. "aarav@10042")
        // 2. Their numeric roll digits (e.g. "10042")
        // 3. Their roll code (e.g. "bss10042")
        // 4. Institutional master override: "basava2024"
        const isMatchedStudentPassword = (
          cleanPwd === expectedStudentPwd ||
          (rollDigits && cleanPwd === rollDigits) ||
          (rollCode && cleanPwd === rollCode) ||
          cleanPwd === 'basava2024'
        );

        if (!isMatchedStudentPassword) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Incorrect password for ${matchedStudent.name}. One student = One password. Unique PIN: "${studentDefaultPwd}".`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Incorrect password for ${matchedStudent.name}. Use: ${studentDefaultPwd}`);
          return;
        }

        const btn = document.getElementById('btn-login-submit');
        const originalBtnContent = btn ? btn.innerHTML : '';
        if (btn) {
          btn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Authenticating...`;
          btn.disabled = true;
        }

        setTimeout(() => {
          if (btn) {
            btn.innerHTML = originalBtnContent;
            btn.disabled = false;
          }

          // Matched exact student! One student, one roll number!
          switchActiveStudent(matchedStudent.roll);

          // Save remember ID if checked
          if (document.getElementById('remember-me')?.checked) {
            try {
              localStorage.setItem('bss_remember_id', matchedStudent.roll);
              localStorage.setItem('bss_remember_role', 'student');
            } catch (e) { }
          }

          showToast(`Welcome, ${matchedStudent.name}! Signed in with Roll No. ${matchedStudent.roll}`);
          navigateTo('dashboard');
        }, 350);

        return;
      }

      // =========================================================================
      // FACULTY & STAFF LOGIN: 1 STAFF = 1 ID & 1 STAFF = 1 PASSWORD
      // =========================================================================
      if (currentRole === 'staff') {
        const password = pwdInput ? pwdInput.value.trim() : '';

        // Strict match: One staff = One ID
        let matchedStaff = null;
        if (typeof staffMembersList !== 'undefined' && Array.isArray(staffMembersList)) {
          const inputClean = identifier.toLowerCase().replace(/[\/\-\s]/g, '');
          const inputDigits = identifier.replace(/\D/g, '');

          matchedStaff = staffMembersList.find(st => {
            const stIdClean = (st.id || '').toLowerCase().replace(/[\/\-\s]/g, '');
            const stIdDigits = (st.id || '').replace(/\D/g, '');
            const stNameClean = (st.name || '').toLowerCase();

            return (stIdClean && stIdClean === inputClean) ||
              (stIdDigits && inputDigits && stIdDigits === inputDigits) ||
              (identifier.toLowerCase() === (st.id || '').toLowerCase()) ||
              (inputClean.length >= 4 && stNameClean.includes(inputClean));
          });
        }

        if (!matchedStaff) {
          if (idInput) {
            idInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            idInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Staff ID "${identifier}" not found. Each faculty/staff member has 1 unique ID (e.g. BSS-101, BSS-102, etc.).`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Staff ID "${identifier}" not registered`);
          return;
        }

        // Validate Staff Password: 1 STAFF = 1 PASSWORD
        const staffDefaultPwd = matchedStaff.password || (typeof getStaffDefaultPassword === 'function' ? getStaffDefaultPassword(matchedStaff) : 'staff@101');

        if (!password) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Please enter password for ${matchedStaff.name}. (PIN: ${staffDefaultPwd})`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Please enter ${matchedStaff.name}'s password (${staffDefaultPwd})`);
          return;
        }

        const cleanPwd = password.toLowerCase();
        const expectedStaffPwd = staffDefaultPwd.toLowerCase();
        const idDigits = (matchedStaff.id || '').replace(/\D/g, '');
        const idCode = (matchedStaff.id || '').toLowerCase().replace(/[^a-z0-9]/g, '');

        // Check if user entered a password belonging to ANOTHER faculty/staff member!
        let belongsToOtherStaff = null;
        if (typeof staffMembersList !== 'undefined' && Array.isArray(staffMembersList)) {
          belongsToOtherStaff = staffMembersList.find(other => {
            if ((other.id || '').toLowerCase() === (matchedStaff.id || '').toLowerCase()) return false;
            const otherPwd = (other.password || (typeof getStaffDefaultPassword === 'function' ? getStaffDefaultPassword(other) : '')).toLowerCase();
            const otherIdDigits = (other.id || '').replace(/\D/g, '');
            const otherIdCode = (other.id || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            return (otherPwd && cleanPwd === otherPwd) ||
              (otherIdDigits && cleanPwd === otherIdDigits) ||
              (otherIdCode && cleanPwd === otherIdCode);
          });
        }

        if (belongsToOtherStaff) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Access Denied: One Staff = One Password! That password belongs to "${belongsToOtherStaff.name}". Please enter ${matchedStaff.name}'s unique password (${staffDefaultPwd}).`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Wrong password! That belongs to ${belongsToOtherStaff.name}`);
          return;
        }

        // Valid passwords for THIS specific faculty/staff member:
        // 1. Their designated personal password (e.g. "shalini@101")
        // 2. Their numeric ID digits (e.g. "101")
        // 3. Their ID code (e.g. "bss101")
        // 4. Institutional master override: "basava2024"
        const isMatchedStaffPassword = (
          cleanPwd === expectedStaffPwd ||
          (idDigits && cleanPwd === idDigits) ||
          (idCode && cleanPwd === idCode) ||
          cleanPwd === 'basava2024'
        );

        if (!isMatchedStaffPassword) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Incorrect password for ${matchedStaff.name}. One staff = One password. Unique PIN: "${staffDefaultPwd}".`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Incorrect password for ${matchedStaff.name}. Use: ${staffDefaultPwd}`);
          return;
        }

        const btn = document.getElementById('btn-login-submit');
        const originalBtnContent = btn ? btn.innerHTML : '';
        if (btn) {
          btn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Authenticating...`;
          btn.disabled = true;
        }

        setTimeout(() => {
          if (btn) {
            btn.innerHTML = originalBtnContent;
            btn.disabled = false;
          }

          // Matched exact staff member! One staff = one ID & one staff = one password!
          currentLoggedInStaff = matchedStaff;
          if (typeof renderFacultyHeroProfile === 'function') {
            renderFacultyHeroProfile(matchedStaff);
          }

          // Save remember ID if checked
          if (document.getElementById('remember-me')?.checked) {
            try {
              localStorage.setItem('bss_remember_id', matchedStaff.id);
              localStorage.setItem('bss_remember_role', 'staff');
              localStorage.setItem('bss_logged_in_staff_id', matchedStaff.id);
            } catch (e) { }
          }

          showToast(`Welcome, ${matchedStaff.name}! Signed in as ${matchedStaff.role}`);
          navigateTo('faculty');
        }, 350);

        return;
      }

      // =========================================================================
      // PARENT LOGIN
      // =========================================================================
      if (currentRole === 'parent') {
        const password = pwdInput ? pwdInput.value.trim() : '';

        // Strict match: One parent = One registered mobile number
        let matchedStudent = null;
        if (typeof classXStudents !== 'undefined' && Array.isArray(classXStudents)) {
          const inputClean = identifier.toLowerCase().replace(/[\/\-\s\+]/g, '');
          const inputDigits = identifier.replace(/\D/g, '');

          matchedStudent = classXStudents.find(st => {
            const phoneDigits = (st.phone || '').replace(/\D/g, '');
            const rollDigits = (st.roll || '').replace(/\D/g, '');
            const rollClean = (st.roll || '').toLowerCase().replace(/[\/\-\s]/g, '');
            const parentNameClean = (st.parentName || '').toLowerCase();
            const studentNameClean = (st.name || '').toLowerCase();

            return (phoneDigits && inputDigits && (phoneDigits.endsWith(inputDigits) || inputDigits.endsWith(phoneDigits) || (inputDigits.length >= 5 && phoneDigits.includes(inputDigits)))) ||
              (rollDigits && inputDigits && rollDigits === inputDigits) ||
              (rollClean && rollClean === inputClean) ||
              (inputClean.length >= 4 && parentNameClean.includes(inputClean)) ||
              (inputClean.length >= 4 && studentNameClean.includes(inputClean));
          });
        }

        if (!matchedStudent) {
          if (idInput) {
            idInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            idInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Parent phone/number "${identifier}" not found.`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Number "${identifier}" not registered`);
          return;
        }

        // Validate Parent Password
        const parentDefaultPwd = typeof getParentDefaultPassword === 'function' ? getParentDefaultPassword(matchedStudent) : `mahesh@12345`;

        if (!password) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Please enter password for ${matchedStudent.parentName}.`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Please enter password`);
          return;
        }

        const cleanPwd = password.toLowerCase();
        const expectedParentPwd = parentDefaultPwd.toLowerCase();
        const phoneDigits = (matchedStudent.phone || '').replace(/\D/g, '');
        const phoneLast5 = phoneDigits.slice(-5);
        const rollDigits = (matchedStudent.roll || '').replace(/\D/g, '');

        // Check if user entered a password belonging to ANOTHER parent!
        let belongsToOtherParent = null;
        if (typeof classXStudents !== 'undefined' && Array.isArray(classXStudents)) {
          belongsToOtherParent = classXStudents.find(other => {
            if ((other.roll || '').toLowerCase() === (matchedStudent.roll || '').toLowerCase()) return false;
            const otherPwd = (typeof getParentDefaultPassword === 'function' ? getParentDefaultPassword(other) : '').toLowerCase();
            const otherPhoneDigits = (other.phone || '').replace(/\D/g, '');
            const otherPhoneLast5 = otherPhoneDigits.slice(-5);
            return (otherPwd && cleanPwd === otherPwd) ||
              (otherPhoneLast5 && cleanPwd === otherPhoneLast5);
          });
        }

        if (belongsToOtherParent) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Access Denied: That password belongs to "${belongsToOtherParent.parentName}". Please enter ${matchedStudent.parentName}'s password.`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Wrong password! That belongs to ${belongsToOtherParent.parentName}`);
          return;
        }

        // Valid passwords for THIS specific parent:
        // 1. Their designated personal password (e.g. "mahesh@12345")
        // 2. Generic prefix format "parent@12345"
        // 3. Their phone last 5 digits (e.g. "12345")
        // 4. Their full phone digits (e.g. "9845012345")
        // 5. Their ward roll digits (e.g. "10042")
        // 6. Institutional master override: "basava2024" or "parent2024"
        const isMatchedParentPassword = (
          cleanPwd === expectedParentPwd ||
          cleanPwd === `parent@${phoneLast5}` ||
          (phoneLast5 && cleanPwd === phoneLast5) ||
          (phoneDigits && cleanPwd === phoneDigits) ||
          (rollDigits && cleanPwd === rollDigits) ||
          cleanPwd === 'basava2024' ||
          cleanPwd === 'parent2024'
        );

        if (!isMatchedParentPassword) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Incorrect password for ${matchedStudent.parentName}. One parent = One password. Unique PIN: "${parentDefaultPwd}".`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Incorrect password for ${matchedStudent.parentName}. Use: ${parentDefaultPwd}`);
          return;
        }

        const btn = document.getElementById('btn-login-submit');
        const originalBtnContent = btn ? btn.innerHTML : '';
        if (btn) {
          btn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Authenticating...`;
          btn.disabled = true;
        }

        setTimeout(() => {
          if (btn) {
            btn.innerHTML = originalBtnContent;
            btn.disabled = false;
          }

          // Matched exact parent & ward! Synchronize ward view!
          switchActiveStudent(matchedStudent.roll);

          // Save remember ID if checked
          if (document.getElementById('remember-me')?.checked) {
            try {
              localStorage.setItem('bss_remember_id', matchedStudent.phone || matchedStudent.roll);
              localStorage.setItem('bss_remember_role', 'parent');
            } catch (e) { }
          }

          showToast(`Welcome, ${matchedStudent.parentName}! Signed in for ward ${matchedStudent.name}`);
          navigateTo('parent');
        }, 350);

        return;
      }

      // =========================================================================
      // PRINCIPAL LOGIN: ID BSS-100 / PASS principal@100 or basava2024
      // =========================================================================
      if (currentRole === 'principal') {
        const password = pwdInput ? pwdInput.value.trim() : '';
        const cleanId = identifier.toLowerCase().replace(/[\/\-\s]/g, '');

        const isPrincipalId = (
          cleanId === 'bss100' ||
          cleanId === '100' ||
          cleanId === 'principal' ||
          identifier.toLowerCase().includes('principal') ||
          identifier.toLowerCase().includes('patil')
        );

        if (!isPrincipalId) {
          if (idInput) {
            idInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            idInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Principal credential "${identifier}" not recognized. Use: BSS-100.`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Invalid Principal ID. Use: BSS-100`);
          return;
        }

        const expectedPrincipalPwd = 'principal@100';
        if (!password) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Please enter Principal passcode (Default: principal@100).`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Please enter passcode (principal@100)`);
          return;
        }

        const cleanPwd = password.toLowerCase();
        const isMatchedPrincipalPwd = (
          cleanPwd === expectedPrincipalPwd ||
          cleanPwd === '100' ||
          cleanPwd === 'principal' ||
          cleanPwd === 'principal100' ||
          cleanPwd === 'basava2024'
        );

        if (!isMatchedPrincipalPwd) {
          if (pwdInput) {
            pwdInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
            pwdInput.focus();
          }
          if (errorMsg && errorText) {
            errorText.innerText = `Incorrect passcode for Principal desk. Passcode: "${expectedPrincipalPwd}".`;
            errorMsg.classList.remove('hidden');
          }
          showToast(`Incorrect passcode. Use: ${expectedPrincipalPwd}`);
          return;
        }

        const btn = document.getElementById('btn-login-submit');
        const originalBtnContent = btn ? btn.innerHTML : '';
        if (btn) {
          btn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Authenticating...`;
          btn.disabled = true;
        }

        setTimeout(() => {
          if (btn) {
            btn.innerHTML = originalBtnContent;
            btn.disabled = false;
          }

          if (document.getElementById('remember-me')?.checked) {
            try {
              localStorage.setItem('bss_remember_id', 'BSS-100');
              localStorage.setItem('bss_remember_role', 'principal');
            } catch (e) { }
          }

          showToast('Welcome, Dr. S. Patil! Signed in to Principal Administration Desk');
          navigateTo('principal');
        }, 350);

        return;
      }
    }

    function openParentPortal() {
      selectRole('parent');
      navigateTo('parent');
      showToast('Viewing Parent & Guardian Portal');
    }

    function openPrincipalPortal() {
      selectRole('principal');
      navigateTo('principal');
      renderPrincipalStaffAttendance();
      showToast('Viewing Principal Administration Desk');
    }

    // =========================================================================
    // PRINCIPAL PORTAL CONTROLLER
    // =========================================================================

        function filterPrincipalAttendance(wing) {
      const buttons = ['all', 'pre-primary', 'primary', 'middle', 'secondary'];
      buttons.forEach(b => {
        const btn = document.getElementById('btn-p-att-' + b);
        if (btn) {
          if (b === wing) {
            btn.className = "px-2.5 py-1 rounded-lg bg-primary text-white shadow-xs transition";
          } else {
            btn.className = "px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition";
          }
        }
      });

      const cards = document.querySelectorAll('.principal-grade-card');
      cards.forEach(card => {
        const cardWing = card.getAttribute('data-wing');
        if (wing === 'all' || cardWing === wing) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function switchPrincipalTab(tabKey) {
      const tabs = ['overview', 'leaves', 'academics', 'circulars'];
      tabs.forEach(t => {
        const btn = document.getElementById('principal-tab-btn-' + t);
        const subview = document.getElementById('principal-subview-' + t);
        if (btn) {
          if (t === tabKey) {
            btn.className = "flex-1 min-w-[95px] py-2 px-2 rounded-lg bg-white dark:bg-slate-900 text-primary dark:text-white font-bold text-xs card-depth-1 transition flex items-center justify-center gap-1 shadow-xs";
          } else {
            btn.className = "flex-1 min-w-[95px] py-2 px-2 rounded-lg text-on-surface-variant dark:text-slate-400 font-semibold text-xs hover:text-on-surface transition flex items-center justify-center gap-1";
          }
        }
        if (subview) {
          if (t === tabKey) {
            subview.classList.remove('hidden');
          } else {
            subview.classList.add('hidden');
          }
        }
      });
      if (tabKey === 'academics') {
        renderPrincipalStaffAttendance();
      }
    }

    function approvePrincipalLeave(leaveId, leaveType, staffName) {
      const card = document.getElementById('leave-card-' + leaveId);
      if (card) {
        card.innerHTML = `
          <div class="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[20px] text-emerald-600">task_alt</span>
              <div>
                <span class="font-bold text-xs">Sanctioned & Approved by Principal</span>
                <p class="text-[10px] text-slate-500">${staffName} • ${leaveType} • Digital Seal Issued</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded bg-emerald-600 text-white text-[9px] font-bold">Approved</span>
          </div>
        `;
      }
      updatePrincipalPendingLeavesBadge();
      showToast(`Sanctioned ${leaveType} for ${staffName}`);
    }

    function rejectPrincipalLeave(leaveId) {
      const card = document.getElementById('leave-card-' + leaveId);
      if (card) {
        card.innerHTML = `
          <div class="flex items-center justify-between p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[20px] text-rose-600">cancel</span>
              <div>
                <span class="font-bold text-xs">Leave Application Rejected</span>
                <p class="text-[10px] text-slate-500">Notice dispatched to faculty member with remarks</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded bg-rose-600 text-white text-[9px] font-bold">Rejected</span>
          </div>
        `;
      }
      updatePrincipalPendingLeavesBadge();
      showToast('Leave request rejected and logged');
    }

    function updatePrincipalPendingLeavesBadge() {
      const container = document.getElementById('principal-pending-leaves-container');
      if (!container) return;
      const pendingCards = container.querySelectorAll('button[onclick*="approvePrincipalLeave"]').length;
      const badge = document.getElementById('principal-pending-leaves-badge');
      const pill = document.getElementById('principal-pending-count-pill');
      if (badge) {
        badge.innerText = pendingCards;
        if (pendingCards === 0) badge.classList.add('hidden');
        else badge.classList.remove('hidden');
      }
      if (pill) {
        pill.innerText = `${pendingCards} Pending`;
        if (pendingCards === 0) {
          pill.className = "px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]";
          pill.innerText = "All Sanctioned";
        }
      }
    }

        // =========================================================================
    // PRINCIPAL STAFF ATTENDANCE ENGINE
    // =========================================================================
    let currentPrincipalStaffFilter = 'all';

    function renderPrincipalStaffAttendance() {
      const container = document.getElementById('principal-staff-attendance-list');
      if (!container) return;

      const staffList = (typeof staffMembersList !== 'undefined' && Array.isArray(staffMembersList)) ? staffMembersList : [];

      let countPresent = 0;
      let countOD = 0;
      let countLeave = 0;

      staffList.forEach(s => {
        if (s.status === 'Present') countPresent++;
        else if (s.status === 'On Duty') countOD++;
        else if (s.status === 'On Leave') countLeave++;
      });

      const elTotal = document.getElementById('principal-staff-total-count');
      const elPresent = document.getElementById('principal-staff-present-count');
      const elOD = document.getElementById('principal-staff-od-count');
      const elLeave = document.getElementById('principal-staff-leave-count');
      const kpiStaff = document.getElementById('principal-kpi-staff');

      if (elTotal) elTotal.innerText = staffList.length;
      if (elPresent) elPresent.innerText = countPresent;
      if (elOD) elOD.innerText = countOD;
      if (elLeave) elLeave.innerText = countLeave;
      if (kpiStaff) kpiStaff.innerText = `${countPresent + countOD} / ${staffList.length}`;

      const filtered = staffList.filter(s => {
        if (currentPrincipalStaffFilter === 'all') return true;
        return s.status === currentPrincipalStaffFilter;
      });

      if (filtered.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-400 py-3 text-center">No staff records match the "${currentPrincipalStaffFilter}" filter.</p>`;
        return;
      }

      container.innerHTML = filtered.map(s => {
        const isP = s.status === 'Present';
        const isOD = s.status === 'On Duty';
        const isL = s.status === 'On Leave';

        let badgeHtml = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">Present â€¢ In ${s.inTime || '08:15 AM'}</span>`;
        if (isOD) {
          badgeHtml = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">On Duty (OD)</span>`;
        } else if (isL) {
          badgeHtml = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">On Leave</span>`;
        }

        return `
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2 transition hover:bg-slate-100 dark:hover:bg-slate-800">
            <div class="flex items-center gap-2.5 min-w-0 flex-1">
              <img src="${s.avatar}" alt="" class="w-9 h-9 rounded-xl object-cover border border-slate-300 dark:border-slate-700 flex-shrink-0" />
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <h4 class="font-bold text-slate-900 dark:text-white truncate">${s.name}</h4>
                  <span class="font-mono text-[10px] text-slate-400">(${s.id})</span>
                </div>
                <p class="text-[10px] text-slate-500 truncate">${s.role} â€¢ <span class="font-medium text-primary">${s.location}</span></p>
                <div class="mt-0.5">${badgeHtml}</div>
              </div>
            </div>

            <div class="flex items-center gap-1 flex-shrink-0">
              <button onclick="setPrincipalStaffStatus('${s.id}', 'Present')"
                class="px-2 py-1 rounded-lg text-[10px] font-bold transition active:scale-95 cursor-pointer ${isP ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300'}"
                title="Mark Present">
                Present
              </button>
              <button onclick="setPrincipalStaffStatus('${s.id}', 'On Duty')"
                class="px-2 py-1 rounded-lg text-[10px] font-bold transition active:scale-95 cursor-pointer ${isOD ? 'bg-purple-600 text-white shadow-xs' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300'}"
                title="Mark Official Duty">
                OD
              </button>
              <button onclick="setPrincipalStaffStatus('${s.id}', 'On Leave')"
                class="px-2 py-1 rounded-lg text-[10px] font-bold transition active:scale-95 cursor-pointer ${isL ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300'}"
                title="Mark Leave">
                Leave
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    function setPrincipalStaffStatus(staffId, newStatus) {
      if (typeof staffMembersList === 'undefined') return;
      const staff = staffMembersList.find(s => s.id === staffId);
      if (!staff) return;

      staff.status = newStatus;
      if (newStatus === 'Present' && (!staff.inTime || staff.inTime === '--')) {
        staff.inTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }

      try {
        localStorage.setItem('bss_staff_members_list', JSON.stringify(staffMembersList));
      } catch (e) {
        console.warn('Could not save staffMembersList to localStorage:', e);
      }

      renderPrincipalStaffAttendance();
      if (typeof renderStaffRegister === 'function') {
        renderStaffRegister();
      }
      showToast(`Updated ${staff.name} status to "${newStatus}"`);
    }

    function filterPrincipalStaffList(filterVal) {
      currentPrincipalStaffFilter = filterVal || 'all';
      const buttons = ['all', 'present', 'od', 'leave'];
      buttons.forEach(b => {
        const btn = document.getElementById('btn-p-staff-' + b);
        if (btn) {
          const match = (b === 'all' && filterVal === 'all') ||
                        (b === 'present' && filterVal === 'Present') ||
                        (b === 'od' && filterVal === 'On Duty') ||
                        (b === 'leave' && filterVal === 'On Leave');
          if (match) {
            btn.className = "px-2.5 py-1 rounded-lg bg-primary text-white shadow-xs transition";
          } else {
            btn.className = "px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition";
          }
        }
      });
      renderPrincipalStaffAttendance();
    }

    function principalMarkAllStaffPresent() {
      if (typeof staffMembersList === 'undefined') return;
      staffMembersList.forEach(s => {
        s.status = 'Present';
        if (!s.inTime || s.inTime === '--') {
          s.inTime = '08:15 AM';
        }
      });
      try {
        localStorage.setItem('bss_staff_members_list', JSON.stringify(staffMembersList));
      } catch (e) {
        console.warn('Could not save staffMembersList to localStorage:', e);
      }
      renderPrincipalStaffAttendance();
      if (typeof renderStaffRegister === 'function') {
        renderStaffRegister();
      }
      showToast('Marked all faculty and staff members as Present on duty');
    }

    function principalSyncStaffAttendance() {
      const btn = document.getElementById('btn-principal-sync-staff');
      if (btn) {
        btn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[14px]">progress_activity</span><span>Syncing...</span>`;
        btn.disabled = true;
      }
      setTimeout(() => {
        if (btn) {
          btn.innerHTML = `<span class="material-symbols-outlined text-[14px]">task_alt</span><span>Synced</span>`;
          btn.className = "px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center gap-1 shadow-xs transition";
          btn.disabled = false;
        }
        showToast('Faculty & staff biometric attendance synchronized with uniRP Central Server');
      }, 400);
    }

    function attestAllAcademicReports() {
      const btn = document.getElementById('btn-principal-attest');
      if (btn) {
        btn.innerHTML = `<span class="material-symbols-outlined text-[16px] animate-spin">progress_activity</span> Attesting...`;
        btn.disabled = true;
      }
      setTimeout(() => {
        if (btn) {
          btn.innerHTML = `<span class="material-symbols-outlined text-[16px]">check_circle</span> Attested`;
          btn.className = "px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition";
        }
        const banner = document.getElementById('principal-attest-status-banner');
        if (banner) {
          banner.classList.remove('hidden');
          banner.classList.add('ring-2', 'ring-emerald-400');
        }
        showToast('All Class X Pre-Board Academic Marks Attested by Dr. S. Patil');
      }, 500);
    }

    function dispatchPrincipalCircular(e) {
      if (e) e.preventDefault();
      const titleInput = document.getElementById('principal-notice-title');
      const targetInput = document.getElementById('principal-notice-target');
      const priorityInput = document.getElementById('principal-notice-priority');
      const bodyInput = document.getElementById('principal-notice-body');

      const title = titleInput ? titleInput.value.trim() : '';
      const target = targetInput ? targetInput.value : 'All Campus';
      const priority = priorityInput ? priorityInput.value : 'Normal';
      const body = bodyInput ? bodyInput.value.trim() : '';

      if (!title || !body) {
        showToast('Please complete circular title and directive text');
        return;
      }

      const feed = document.getElementById('principal-circulars-feed');
      if (feed) {
        const item = document.createElement('div');
        item.className = "p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-1 animate-pulse";
        item.innerHTML = `
          <div class="flex justify-between items-center">
            <span class="font-bold text-slate-900 dark:text-white">${title}</span>
            <span class="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[9px] font-bold">${priority}</span>
          </div>
          <p class="text-[11px] text-slate-700 dark:text-slate-200">${body}</p>
          <div class="flex justify-between text-[10px] text-slate-400 pt-1">
            <span>Target: ${target}</span>
            <span>Issued: Just Now • Dr. S. Patil</span>
          </div>
        `;
        feed.prepend(item);
        setTimeout(() => {
          item.classList.remove('animate-pulse');
        }, 1200);
      }

      if (titleInput) titleInput.value = '';
      if (bodyInput) bodyInput.value = '';
      showToast(`Official Circular Broadcast to ${target}!`);
    }

    // =========================================================================
    // PARENT & GUARDIAN PORTAL CONTROLLER
    // =========================================================================

    function switchParentTab(tabKey) {
      const tabs = ['safety', 'fees', 'academics', 'ptm'];
      tabs.forEach(t => {
        const sub = document.getElementById('parent-subview-' + t);
        const btn = document.getElementById('parent-tab-btn-' + t);
        if (sub && btn) {
          if (t === tabKey) {
            sub.classList.remove('hidden');
            btn.className = "flex-1 min-w-[80px] py-2 px-2 rounded-lg bg-white dark:bg-slate-900 text-primary dark:text-white font-bold text-xs card-depth-1 transition flex items-center justify-center gap-1";
          } else {
            sub.classList.add('hidden');
            btn.className = "flex-1 min-w-[80px] py-2 px-2 rounded-lg text-on-surface-variant dark:text-slate-400 font-semibold text-xs hover:text-on-surface transition flex items-center justify-center gap-1";
          }
        }
      });
    }

    function bookPtmSlot(timeSlot) {
      document.querySelectorAll('.ptm-slot-btn').forEach(btn => {
        btn.className = "ptm-slot-btn p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary transition font-semibold text-center";
        btn.innerText = btn.innerText.replace(' ✓', '');
      });

      const clickedBtn = event.currentTarget;
      if (clickedBtn) {
        clickedBtn.className = "ptm-slot-btn p-2 rounded-xl border-2 border-primary bg-primary/10 text-primary dark:text-white transition font-bold text-center";
        clickedBtn.innerText = timeSlot + ' ✓';
      }

      const badge = document.getElementById('ptm-active-slot-badge');
      if (badge) badge.innerText = timeSlot;

      showToast(`PTM Slot Confirmed: ${timeSlot} with Class Teacher`);
    }

    function selectPaymentMethod(method) {
      ['upi', 'card', 'nb'].forEach(m => {
        const btn = document.getElementById('pay-opt-' + m);
        if (btn) {
          if (m === method) {
            btn.className = "pay-method-opt p-2.5 rounded-xl border-2 border-primary bg-primary/10 text-primary dark:text-white font-bold transition flex flex-col items-center gap-1";
          } else {
            btn.className = "pay-method-opt p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium transition flex flex-col items-center gap-1";
          }
        }
      });

      const container = document.getElementById('pay-details-container');
      if (!container) return;

      if (method === 'upi') {
        container.innerHTML = `
          <div class="space-y-2">
            <label class="block text-[11px] font-medium text-slate-600 dark:text-slate-300">Enter UPI VPA / Mobile No.:</label>
            <input type="text" id="parent-upi-id" value="mahesh.patil@okhdfcbank"
              class="w-full p-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-lowest dark:bg-slate-800 text-xs font-mono" />
            <p class="text-[10px] text-slate-400">Supported: Google Pay, PhonePe, Paytm, BHIM, Cred</p>
          </div>
        `;
      } else if (method === 'card') {
        container.innerHTML = `
          <div class="space-y-2 text-xs">
            <div>
              <label class="block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1">Card Number:</label>
              <input type="text" value="4532 •••• •••• 8912"
                class="w-full p-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-lowest dark:bg-slate-800 text-xs font-mono" />
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1">Valid Thru:</label>
                <input type="text" value="08/28"
                  class="w-full p-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-lowest dark:bg-slate-800 text-xs font-mono" />
              </div>
              <div>
                <label class="block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1">CVV:</label>
                <input type="password" value="•••"
                  class="w-full p-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-lowest dark:bg-slate-800 text-xs font-mono" />
              </div>
            </div>
          </div>
        `;
      } else if (method === 'nb') {
        container.innerHTML = `
          <div class="space-y-2 text-xs">
            <label class="block text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1">Select Bank:</label>
            <select class="w-full p-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-lowest dark:bg-slate-800 text-xs">
              <option>HDFC Bank (Retail NetBanking)</option>
              <option>State Bank of India</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
              <option>Canara Bank</option>
            </select>
          </div>
        `;
      }
    }

    function openParentPaymentModal() {
      openModal('modal-parent-payment');
    }

    function processParentFeePayment() {
      const btn = document.getElementById('btn-submit-fee-payment');
      if (btn) {
        btn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[16px]">progress_activity</span> Processing Gateway...`;
        btn.disabled = true;
      }

      setTimeout(() => {
        if (btn) {
          btn.innerHTML = `<span class="material-symbols-outlined text-[16px]">verified</span><span>Authorize ₹24,000</span>`;
          btn.disabled = false;
        }
        closeModal('modal-parent-payment');

        // Update UI state
        const dueEl = document.getElementById('parent-due-amount');
        if (dueEl) dueEl.innerText = "₹0.00";

        const term3Card = document.getElementById('term3-installment-card');
        if (term3Card) {
          term3Card.className = "p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between";
        }

        const badge = document.getElementById('term3-badge');
        if (badge) {
          badge.className = "px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400";
          badge.innerText = "Paid";
        }

        const desc = document.getElementById('term3-desc');
        if (desc) desc.innerText = "Paid on 15 Oct 2024 • Receipt #BSS-2024-1104 • Online UPI";

        const amountText = document.getElementById('term3-amount-text');
        if (amountText) {
          amountText.className = "font-mono font-bold text-slate-800 dark:text-slate-200";
        }

        const actionBtn = document.getElementById('term3-action-btn');
        if (actionBtn) {
          actionBtn.className = "text-[10px] font-bold text-primary-container dark:text-primary-fixed hover:underline";
          actionBtn.innerText = "View Receipt";
          actionBtn.onclick = function () { openModal('modal-fee'); };
        }

        const heroPayBtn = document.getElementById('btn-parent-pay-now');
        if (heroPayBtn) {
          heroPayBtn.className = "px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5";
          heroPayBtn.innerHTML = `<span class="material-symbols-outlined text-[16px]">check_circle</span><span>All Dues Cleared</span>`;
          heroPayBtn.onclick = function () { showToast('All academic dues cleared for AY 2024-25'); };
        }

        showToast('Payment of ₹24,000 successful! Receipt #BSS-2024-1104 generated.');
        openModal('modal-fee');
      }, 900);
    }

    function sendParentMessage(e) {
      if (e) e.preventDefault();
      const recipient = document.getElementById('parent-msg-recipient').value;
      showToast(`Inquiry dispatched to ${recipient.split('(')[0].trim()}. Reference #INQ-882`);
      document.getElementById('parent-msg-subject').value = '';
      document.getElementById('parent-msg-body').value = '';
    }

    function handleLogout() {
      if (confirm('Are you sure you want to securely log out from Basava Shree School Portal?')) {
        navigateTo('login');
        showToast('Logged out securely');
      }
    }

    // Biometrics Trigger
    function triggerBiometrics() {
      openModal('modal-biometrics');
      document.getElementById('bio-status-text').innerText = "Scanning fingerprint / Touch ID...";
      setTimeout(() => {
        const sName = (typeof studentProfile !== 'undefined' && studentProfile.callingName) ? studentProfile.callingName : "Aarav Patil";
        document.getElementById('bio-status-text').innerText = `Verified! Welcome ${sName}`;
        setTimeout(() => {
          closeModal('modal-biometrics');
          showToast('Biometric Access Verified');
          navigateTo('dashboard');
        }, 500);
      }, 1200);
    }

    // Timetable Day Selector
    function selectDay(dayName) {
      activeTimetableDay = dayName;
      document.querySelectorAll('.day-btn').forEach(btn => {
        btn.className = "day-btn flex flex-col items-center justify-center min-w-[54px] py-2 px-1 rounded-xl bg-surface-container-lowest dark:bg-slate-900 border border-outline-variant/50 dark:border-slate-800 text-on-surface-variant transition";
        const daySpan = btn.querySelector('span:first-child');
        if (daySpan && daySpan.innerText !== 'TODAY') {
          daySpan.className = "text-[10px] font-medium";
        }
      });

      const activeBtn = document.getElementById('day-btn-' + dayName);
      if (activeBtn) {
        activeBtn.className = "day-btn flex flex-col items-center justify-center min-w-[58px] py-2 px-1 rounded-xl bg-primary-container text-white shadow-md ring-2 ring-primary-container/30 transition";
      }

      renderDaySchedule(dayName);
    }

    // Helper to resolve live staff attendance for timetable
    function getTeacherPresenceInfo(teacherName) {
      if (!teacherName) return null;
      if (typeof staffMembersList === 'undefined') return null;

      const tLower = teacherName.toLowerCase();
      return staffMembersList.find(s => {
        const sLower = s.name.toLowerCase();
        const sLast = s.name.split(' ').pop().toLowerCase();
        const tLast = teacherName.split(' ').pop().toLowerCase();
        return sLower.includes(tLower) || tLower.includes(sLower) || (sLast.length > 2 && tLast === sLast);
      }) || null;
    }

    function renderPeriodCard(item) {
      const staff = getTeacherPresenceInfo(item.teacher);
      let statusBadge = `<span class="text-[10px] font-bold text-on-surface-variant dark:text-slate-400 bg-surface-container dark:bg-slate-800 px-2 py-0.5 rounded-full">${item.status}</span>`;
      let cardBg = "bg-surface-container-low dark:bg-slate-800/60 border-outline-variant/30";
      let timeColor = "text-on-surface-variant dark:text-slate-400";
      let liveIndicator = "";

      if (item.status === 'Active') {
        statusBadge = `<span class="text-[10px] font-bold text-white bg-primary-container px-2 py-0.5 rounded-full">In Session</span>`;
        cardBg = "bg-primary/5 dark:bg-primary-container/25 border-primary-container border-2 shadow-xs";
        timeColor = "text-primary-container dark:text-primary-fixed font-bold";
        liveIndicator = `<span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping ml-1.5"></span>`;
      } else if (item.status === 'Completed') {
        statusBadge = `<span class="text-[10px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full">Completed</span>`;
      }

      // Student Attendance for this Period
      let studentPeriodBadge = '';
      if (typeof classXStudents !== 'undefined') {
        const activeRoll = (typeof studentProfile !== 'undefined' && studentProfile.roll) ? studentProfile.roll : "BSS-10042";
        const studentAarav = classXStudents.find(s => s.roll === activeRoll) || { status: 'P' };
        if (studentAarav.status === 'A') {
          studentPeriodBadge = `
            <span class="inline-flex items-center gap-1 text-[9px] font-bold text-rose-700 dark:text-rose-300 bg-rose-500/10 border border-rose-500/20 px-1.5 py-0.2 rounded" title="Student marked Absent today">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              <span>Absent</span>
            </span>
          `;
        } else if (item.status === 'Completed') {
          studentPeriodBadge = `
            <span class="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded" title="Period attended today">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Today Present</span>
            </span>
          `;
        } else if (item.status === 'Active') {
          studentPeriodBadge = `
            <span class="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.2 rounded" title="Attending in class right now">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Today In Class</span>
            </span>
          `;
        }
      }

      // Live Teacher Presence Badge
      let teacherPresenceHtml = '';
      let substituteBanner = '';

      if (staff) {
        if (staff.status === 'Present') {
          teacherPresenceHtml = `
            <span class="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-500/20 px-1.5 py-0.2 rounded" title="Campus Entry Recorded: ${staff.inTime}">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>In Campus</span>
            </span>
          `;
        } else if (staff.status === 'On Leave') {
          teacherPresenceHtml = `
            <span class="inline-flex items-center gap-1 text-[9px] font-bold text-rose-700 dark:text-rose-300 bg-rose-500/15 border border-rose-500/20 px-1.5 py-0.2 rounded" title="Faculty on Approved Leave">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              <span>On Leave</span>
            </span>
          `;
          if (staff.substitute) {
            substituteBanner = `
              <div class="mt-1.5 pt-1.5 border-t border-rose-200/50 dark:border-rose-800/40 flex items-center gap-1 text-[10px] text-rose-700 dark:text-rose-300 font-medium">
                <span class="material-symbols-outlined text-[14px] text-rose-600 flex-shrink-0">swap_horiz</span>
                <span><b>Faculty Coverage:</b> ${staff.substitute}</span>
              </div>
            `;
          }
        } else if (staff.status === 'On Duty') {
          teacherPresenceHtml = `
            <span class="inline-flex items-center gap-1 text-[9px] font-bold text-purple-700 dark:text-purple-300 bg-purple-500/15 border border-purple-500/20 px-1.5 py-0.2 rounded" title="On Official Deputation">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              <span>On Duty (OD)</span>
            </span>
          `;
        }
      }

      return `
        <div class="p-2.5 rounded-xl ${cardBg} border space-y-1 transition hover:shadow-xs">
          <div class="flex items-center gap-3">
            <div class="text-center min-w-[55px]">
              <span class="text-[10px] font-bold ${timeColor} block uppercase">${item.time}</span>
              <span class="text-xs font-bold text-slate-500">Period ${item.period}</span>
            </div>
            <div class="h-8 w-[2px] bg-slate-300 dark:bg-slate-700"></div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-1">
                <div class="flex items-center truncate">
                  <h4 class="text-xs font-bold text-on-surface dark:text-white truncate">${item.subject}</h4>
                  ${liveIndicator}
                </div>
                ${statusBadge}
              </div>
              <div class="flex items-center justify-between gap-2 mt-0.5">
                <p class="text-[11px] text-on-surface-variant dark:text-slate-400 truncate">${item.teacher} • <span class="font-medium">${item.room}</span></p>
                <div class="flex items-center gap-1 flex-shrink-0">
                  ${studentPeriodBadge}
                  ${teacherPresenceHtml}
                </div>
              </div>
            </div>
          </div>
          ${substituteBanner}
        </div>
      `;
    }

    function renderDaySchedule(day) {
      const list = timetableData[day] || [];
      const container = document.getElementById('day-schedule-container');
      if (!container) return;
      container.innerHTML = list.map(item => renderPeriodCard(item)).join('');
    }

    function renderDashboardTodaySchedule() {
      const container = document.getElementById('dashboard-schedule-container');
      if (!container) return;
      const todayList = timetableData['Tue'] || [];
      container.innerHTML = todayList.map(item => renderPeriodCard(item, true)).join('');
    }

    function switchTimetableTab(tab) {
      const sched = document.getElementById('subview-schedule');
      const att = document.getElementById('subview-attendance');
      const btnSched = document.getElementById('tab-btn-schedule');
      const btnAtt = document.getElementById('tab-btn-attendance');
      const headerTitle = document.getElementById('timetable-view-title');

      if (tab === 'schedule') {
        if (sched) sched.classList.remove('hidden');
        if (att) att.classList.add('hidden');
        if (headerTitle) headerTitle.innerText = "Timetable & Schedule";
        if (btnSched) btnSched.className = "flex-1 py-2 px-3 rounded-lg bg-white dark:bg-slate-900 text-primary dark:text-white font-bold text-xs card-depth-1 transition flex items-center justify-center gap-1.5 shadow-xs";
        if (btnAtt) btnAtt.className = "flex-1 py-2 px-3 rounded-lg text-on-surface-variant dark:text-slate-400 font-semibold text-xs hover:text-on-surface transition flex items-center justify-center gap-1.5";

        const navAtt = document.getElementById('nav-item-attendance');
        const navSched = document.getElementById('nav-item-timetable');
        if (navAtt && navSched) {
          navSched.className = "flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-150 bg-primary text-white cursor-pointer active:scale-95";
          const iconS = navSched.querySelector('.material-symbols-outlined');
          if (iconS) iconS.classList.add('material-symbols-fill');
          navAtt.className = "flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-150 text-on-surface-variant dark:text-slate-400 hover:text-primary cursor-pointer active:scale-95";
          const iconA = navAtt.querySelector('.material-symbols-outlined');
          if (iconA) iconA.classList.remove('material-symbols-fill');
        }
      } else {
        if (sched) sched.classList.add('hidden');
        if (att) att.classList.remove('hidden');
        if (headerTitle) headerTitle.innerText = "Subject Attendance & Analytics";
        if (btnAtt) btnAtt.className = "flex-1 py-2 px-3 rounded-lg bg-white dark:bg-slate-900 text-primary dark:text-white font-bold text-xs card-depth-1 transition flex items-center justify-center gap-1.5 shadow-xs";
        if (btnSched) btnSched.className = "flex-1 py-2 px-3 rounded-lg text-on-surface-variant dark:text-slate-400 font-semibold text-xs hover:text-on-surface transition flex items-center justify-center gap-1.5";

        const navAtt = document.getElementById('nav-item-attendance');
        const navSched = document.getElementById('nav-item-timetable');
        if (navAtt && navSched) {
          navAtt.className = "flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-150 bg-primary text-white cursor-pointer active:scale-95";
          const iconA = navAtt.querySelector('.material-symbols-outlined');
          if (iconA) iconA.classList.add('material-symbols-fill');
          navSched.className = "flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-150 text-on-surface-variant dark:text-slate-400 hover:text-primary cursor-pointer active:scale-95";
          const iconS = navSched.querySelector('.material-symbols-outlined');
          if (iconS) iconS.classList.remove('material-symbols-fill');
        }
      }
    }

    // Modal Handlers
    function openModal(modalId) {
      const m = document.getElementById(modalId);
      if (m) m.classList.remove('hidden');
    }

    function closeModal(modalId) {
      const m = document.getElementById(modalId);
      if (m) m.classList.add('hidden');
    }

    function openHallTicketModal() {
      openModal('modal-hall-ticket');
    }

    function openLeaveModal() {
      openModal('modal-leave');
    }

    function openFeeModal() {
      openModal('modal-fee');
    }

    function openNotifications() {
      openModal('modal-notifications');
    }

    // =========================================================================
    // FORGOT PASSWORD & SMS OTP ENGINE (Parent, Staff, Student)
    // =========================================================================
    let currentForgotOtp = '482910';
    let currentForgotAccount = null;
    let lastFoundForgotAccount = null;
    let forgotResendTimerInterval = null;
    let forgotResendSeconds = 30;
    let smsBannerDismissTimer = null;

    function findAccountForForgot(val) {
      if (!val) return null;
      const rawVal = val.trim();
      const clean = rawVal.toLowerCase().replace(/[\/\-\s\+]/g, '');
      const digits = rawVal.replace(/\D/g, '');
      const national10 = (digits.length === 12 && digits.startsWith('91')) ? digits.slice(2) : ((digits.length === 11 && digits.startsWith('0')) ? digits.slice(1) : (digits.length >= 10 ? digits.slice(-10) : digits));
      const last5 = digits.length >= 5 ? digits.slice(-5) : digits;

      // 1. Search in Parents (classXStudents)
      let foundParentStudent = null;
      if (typeof classXStudents !== 'undefined' && Array.isArray(classXStudents)) {
        foundParentStudent = classXStudents.find(st => {
          const stPhoneDigits = (st.phone || '').replace(/\D/g, '');
          const stPhone10 = stPhoneDigits.slice(-10);
          const stPhone5 = stPhoneDigits.slice(-5);
          const stRollDigits = (st.roll || '').replace(/\D/g, '');
          const stRollClean = (st.roll || '').toLowerCase().replace(/[\/\-\s]/g, '');
          const stParentName = (st.parentName || '').toLowerCase();
          const stName = (st.name || '').toLowerCase();

          return (stPhone10 && national10 && (stPhone10 === national10 || stPhone10.endsWith(national10) || national10.endsWith(stPhone10))) ||
            (stPhone5 && last5 && (stPhone5 === last5 || digits.endsWith(stPhone5) || stPhone5.endsWith(digits))) ||
            (stPhoneDigits && digits && (stPhoneDigits.includes(digits) || digits.includes(stPhoneDigits))) ||
            (stRollDigits && digits && stRollDigits === digits) ||
            (stRollClean && clean && (stRollClean === clean || stRollClean.includes(clean))) ||
            (clean.length >= 3 && stParentName.includes(clean)) ||
            (clean.length >= 3 && stName.includes(clean));
        });
      }

      // 2. Search in Staff (if not found in parent or if currently in staff role)
      let foundStaff = null;
      if (!foundParentStudent || currentRole === 'staff') {
        if (typeof staffMembersList !== 'undefined' && Array.isArray(staffMembersList)) {
          foundStaff = staffMembersList.find(st => {
            const stClean = (st.id || '').toLowerCase().replace(/[\/\-\s]/g, '');
            const stDigits = (st.id || '').replace(/\D/g, '');
            const stName = (st.name || '').toLowerCase();
            return (stClean && stClean === clean) ||
              (stDigits && digits && stDigits === digits) ||
              (st.id && st.id.toLowerCase() === rawVal.toLowerCase()) ||
              (clean.length >= 3 && stName.includes(clean));
          });
        }
      }

      // 3. Search in Students
      let foundStudent = null;
      if (!foundParentStudent && !foundStaff) {
        if (typeof classXStudents !== 'undefined' && Array.isArray(classXStudents)) {
          foundStudent = classXStudents.find(st => {
            const stRollClean = (st.roll || '').toLowerCase().replace(/[\/\-\s]/g, '');
            const stRollDigits = (st.roll || '').replace(/\D/g, '');
            return (stRollClean && stRollClean === clean) || (stRollDigits && digits && stRollDigits === digits);
          });
        }
      }

      if (foundParentStudent && currentRole !== 'staff') {
        const parentPwd = typeof getParentDefaultPassword === 'function' ? getParentDefaultPassword(foundParentStudent) : (foundParentStudent.parentPassword || 'mahesh@12345');
        return {
          type: 'parent',
          role: 'parent',
          data: foundParentStudent,
          name: foundParentStudent.parentName,
          phone: foundParentStudent.phone || '98450 12345',
          ward: `${foundParentStudent.name} (${foundParentStudent.roll})`,
          wardRoll: foundParentStudent.roll,
          identifier: foundParentStudent.phone || val,
          password: parentPwd
        };
      }
      if (foundStaff) {
        const staffPwd = foundStaff.password || (typeof getStaffDefaultPassword === 'function' ? getStaffDefaultPassword(foundStaff) : 'shalini@101');
        return {
          type: 'staff',
          role: 'staff',
          data: foundStaff,
          name: foundStaff.name,
          phone: foundStaff.phone || '98450 99101',
          ward: `${foundStaff.role} (${foundStaff.id})`,
          wardRoll: foundStaff.id,
          identifier: foundStaff.id,
          password: staffPwd
        };
      }
      if (foundStudent) {
        const studentPwd = foundStudent.password || (typeof getStudentDefaultPassword === 'function' ? getStudentDefaultPassword(foundStudent) : 'aarav@10042');
        return {
          type: 'student',
          role: 'student',
          data: foundStudent,
          name: foundStudent.name,
          phone: foundStudent.phone || '98450 12345',
          ward: `Class X-A • Roll ${foundStudent.roll}`,
          wardRoll: foundStudent.roll,
          identifier: foundStudent.roll,
          password: studentPwd
        };
      }
      return null;
    }

    function goToForgotStep(stepNum) {
      const panel1 = document.getElementById('forgot-panel-phone');
      const panel2 = document.getElementById('forgot-panel-otp');
      const panel3 = document.getElementById('forgot-panel-success');
      const subtitle = document.getElementById('forgot-modal-subtitle');
      const errorCont = document.getElementById('forgot-error-container');

      if (errorCont) errorCont.classList.add('hidden');

      if (panel1) panel1.classList.add('hidden');
      if (panel2) panel2.classList.add('hidden');
      if (panel3) panel3.classList.add('hidden');

      if (stepNum === 1) {
        if (panel1) panel1.classList.remove('hidden');
        if (subtitle) subtitle.innerText = 'Step 1 of 3: Mobile Phone Number Identification';
      } else if (stepNum === 2) {
        if (panel2) panel2.classList.remove('hidden');
        if (subtitle) subtitle.innerText = 'Step 2 of 3: Verify 6-Digit SMS OTP';
        const otpInput = document.getElementById('forgot-otp-input');
        if (otpInput) {
          otpInput.value = '';
          setTimeout(() => otpInput.focus(), 150);
        }
      } else if (stepNum === 3) {
        if (panel3) panel3.classList.remove('hidden');
        if (subtitle) subtitle.innerText = 'Step 3 of 3: Password Verified & Sign In';
      }
    }

    function showSmsNotificationBanner(phone, name, otp) {
      const banner = document.getElementById('sms-notification-banner');
      if (!banner) return;

      const recipientEl = document.getElementById('sms-banner-recipient');
      const otpEl = document.getElementById('sms-banner-otp');
      const timeEl = document.getElementById('sms-banner-time');

      if (recipientEl) {
        recipientEl.innerText = `+91 ${phone} (${name})`;
      }
      if (otpEl) {
        otpEl.innerText = otp;
      }
      if (timeEl) {
        timeEl.innerText = 'Just Now';
      }

      banner.classList.remove('translate-x-[120%]', 'opacity-0');
      banner.classList.add('translate-x-0', 'opacity-100');

      if (smsBannerDismissTimer) clearTimeout(smsBannerDismissTimer);
      smsBannerDismissTimer = setTimeout(() => {
        dismissSmsBanner();
      }, 15000);
    }

    function dismissSmsBanner() {
      const banner = document.getElementById('sms-notification-banner');
      if (!banner) return;
      banner.classList.remove('translate-x-0', 'opacity-100');
      banner.classList.add('translate-x-[120%]', 'opacity-0');
      if (smsBannerDismissTimer) {
        clearTimeout(smsBannerDismissTimer);
        smsBannerDismissTimer = null;
      }
    }

    function startForgotResendTimer() {
      if (forgotResendTimerInterval) clearInterval(forgotResendTimerInterval);
      forgotResendSeconds = 30;

      const timerText = document.getElementById('forgot-otp-timer-text');
      const resendBtn = document.getElementById('btn-forgot-resend');

      if (resendBtn) resendBtn.disabled = true;
      if (timerText) timerText.innerText = `Resend in ${forgotResendSeconds}s`;

      forgotResendTimerInterval = setInterval(() => {
        forgotResendSeconds--;
        if (forgotResendSeconds <= 0) {
          clearInterval(forgotResendTimerInterval);
          forgotResendTimerInterval = null;
          if (timerText) timerText.innerText = 'OTP expired / Ready to resend';
          if (resendBtn) resendBtn.disabled = false;
        } else {
          if (timerText) timerText.innerText = `Resend in ${forgotResendSeconds}s`;
        }
      }, 1000);
    }

    function handleSendForgotOtp() {
      const idInput = document.getElementById('forgot-id-input');
      const val = idInput ? idInput.value.trim() : '';
      const errorCont = document.getElementById('forgot-error-container');
      const errorText = document.getElementById('forgot-error-text');
      const sendBtn = document.getElementById('btn-forgot-send-otp');

      if (!val) {
        if (errorCont && errorText) {
          errorText.innerText = 'Please enter your registered mobile phone number or ID.';
          errorCont.classList.remove('hidden');
        }
        return;
      }

      let found = findAccountForForgot(val);
      if (!found) {
        // If user typed 10 digits or similar, default to parent Mahesh Patil for demo continuity
        const digits = val.replace(/\D/g, '');
        if (digits.length >= 5 && typeof classXStudents !== 'undefined' && classXStudents[0]) {
          found = findAccountForForgot(classXStudents[0].phone);
        }
      }

      if (!found) {
        if (errorCont && errorText) {
          errorText.innerText = `Number "${val}" not found in registered records. Please check or click a quick demo number below.`;
          errorCont.classList.remove('hidden');
        }
        showToast(`Number "${val}" not found`);
        return;
      }

      if (errorCont) errorCont.classList.add('hidden');

      if (sendBtn) {
        sendBtn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[16px]">progress_activity</span> Generating SMS OTP...`;
        sendBtn.disabled = true;
      }

      setTimeout(() => {
        if (sendBtn) {
          sendBtn.innerHTML = `<span class="material-symbols-outlined text-[16px]">sms</span><span>Send SMS OTP to Parent Mobile Number</span>`;
          sendBtn.disabled = false;
        }

        // Generate dynamic 6-digit OTP
        const otp = String(Math.floor(100000 + Math.random() * 900000));
        currentForgotOtp = otp;
        currentForgotAccount = found;
        lastFoundForgotAccount = found;

        // Populate step 2 info
        const sentPhoneEl = document.getElementById('forgot-otp-sent-phone');
        const sentNameEl = document.getElementById('forgot-otp-sent-name');
        const previewEl = document.getElementById('forgot-otp-preview');
        const otpInput = document.getElementById('forgot-otp-input');

        if (sentPhoneEl) sentPhoneEl.innerText = `+91 ${found.phone}`;
        if (sentNameEl) sentNameEl.innerText = found.name;
        if (previewEl) previewEl.innerText = otp;
        if (otpInput) otpInput.value = '';

        // Switch to Step 2
        goToForgotStep(2);

        // Show realistic SMS notification
        showSmsNotificationBanner(found.phone, found.name, otp);

        // Start 30s countdown timer
        startForgotResendTimer();

        showToast(`SMS OTP sent to +91 ${found.phone} (${otp})`);
      }, 300);
    }

    function autofillReceivedOtp() {
      const otpInput = document.getElementById('forgot-otp-input');
      if (otpInput && currentForgotOtp) {
        otpInput.value = currentForgotOtp;
        showToast(`Auto-filled OTP: ${currentForgotOtp}`);
        setTimeout(() => {
          handleVerifyForgotOtp();
        }, 200);
      }
    }

    function handleOtpBoxInput(val) {
      if (val && val.length === 6) {
        setTimeout(() => {
          handleVerifyForgotOtp();
        }, 150);
      }
    }

    function handleResendForgotOtp() {
      if (!currentForgotAccount) return;
      const otp = String(Math.floor(100000 + Math.random() * 900000));
      currentForgotOtp = otp;

      const previewEl = document.getElementById('forgot-otp-preview');
      if (previewEl) previewEl.innerText = otp;

      showSmsNotificationBanner(currentForgotAccount.phone, currentForgotAccount.name, otp);
      startForgotResendTimer();
      showToast(`New SMS OTP dispatched: ${otp}`);
    }

    function handleVerifyForgotOtp() {
      const otpInput = document.getElementById('forgot-otp-input');
      const val = otpInput ? otpInput.value.trim() : '';
      const errorCont = document.getElementById('forgot-error-container');
      const errorText = document.getElementById('forgot-error-text');

      if (!val) {
        if (errorCont && errorText) {
          errorText.innerText = 'Please enter the 6-digit SMS OTP code.';
          errorCont.classList.remove('hidden');
        }
        if (otpInput) otpInput.focus();
        return;
      }

      // Check against current OTP OR institutional emergency master PIN 'basava2024'
      const isOtpValid = (val === currentForgotOtp || val === 'basava2024' || val === '482910');

      if (!isOtpValid) {
        if (errorCont && errorText) {
          errorText.innerText = 'Invalid OTP code. Please enter the 6-digit code received via SMS, or master PIN "basava2024".';
          errorCont.classList.remove('hidden');
        }
        if (otpInput) {
          otpInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
          otpInput.focus();
        }
        showToast('Invalid OTP entered. Please try again.');
        return;
      }

      if (otpInput) {
        otpInput.classList.remove('border-red-500', 'ring-2', 'ring-red-400');
      }
      if (errorCont) errorCont.classList.add('hidden');

      const acc = currentForgotAccount || lastFoundForgotAccount;
      if (!acc) return;

      // Populate Step 3 details
      const resName = document.getElementById('forgot-res-name');
      const resWard = document.getElementById('forgot-res-ward');
      const resPhone = document.getElementById('forgot-res-phone');
      const resPwd = document.getElementById('forgot-res-pwd');
      const newPwdInput = document.getElementById('forgot-new-pwd-input');

      if (resName) resName.innerText = acc.name;
      if (resWard) resWard.innerText = acc.ward || (acc.wardRoll ? `Ward Roll: ${acc.wardRoll}` : '');
      if (resPhone) resPhone.innerText = `+91 ${acc.phone}`;
      if (resPwd) resPwd.innerText = acc.password;
      if (newPwdInput) newPwdInput.value = '';

      // Also set login field if on parent role
      const pwdField = document.getElementById('password-field');
      if (pwdField && currentRole === 'parent') {
        pwdField.value = acc.password;
      }

      goToForgotStep(3);
      dismissSmsBanner();
      showToast(`Identity verified successfully for ${acc.name}!`);
    }

    function copyPasswordToClipboard() {
      const pwd = currentForgotAccount ? currentForgotAccount.password : 'mahesh@12345';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pwd).then(() => {
          showToast(`Copied "${pwd}" to clipboard!`);
        }).catch(() => {
          showToast(`Password: ${pwd}`);
        });
      } else {
        showToast(`Password: ${pwd}`);
      }
    }

    function handleSetNewPassword() {
      const newPwdInput = document.getElementById('forgot-new-pwd-input');
      const val = newPwdInput ? newPwdInput.value.trim() : '';
      if (!val || val.length < 4) {
        showToast('Please enter a valid new password (at least 4 characters).');
        return;
      }

      if (currentForgotAccount) {
        currentForgotAccount.password = val;
        if (currentForgotAccount.data) {
          if (currentForgotAccount.type === 'parent') {
            currentForgotAccount.data.parentPassword = val;
          } else {
            currentForgotAccount.data.password = val;
          }
        }
      }

      const resPwd = document.getElementById('forgot-res-pwd');
      if (resPwd) resPwd.innerText = val;

      const pwdField = document.getElementById('password-field');
      if (pwdField) pwdField.value = val;

      showToast(`Password updated to "${val}"!`);
    }

    function applyForgotResultAndLogin() {
      const acc = currentForgotAccount || lastFoundForgotAccount;
      if (!acc) return;
      closeModal('modal-forgot');
      selectRole(acc.role);

      const idInput = document.getElementById('enrollment-id');
      const pwdInput = document.getElementById('password-field');

      if (idInput) idInput.value = acc.identifier;
      if (pwdInput) pwdInput.value = acc.password;

      handleLoginIdentifierInput(acc.identifier);

      showToast(`Credentials applied for ${acc.name}! Signing in...`);
      setTimeout(() => {
        handleLogin();
      }, 300);
    }

    function openForgotModal() {
      const modalTitle = document.getElementById('forgot-modal-title');
      const modalSubtitle = document.getElementById('forgot-modal-subtitle');
      const modalDesc = document.getElementById('forgot-modal-desc');
      const inputLabel = document.getElementById('forgot-input-label');
      const idInput = document.getElementById('forgot-id-input');
      const inputIcon = document.getElementById('forgot-input-icon');
      const quickChips = document.getElementById('forgot-quick-chips');
      const errorCont = document.getElementById('forgot-error-container');

      if (errorCont) errorCont.classList.add('hidden');
      goToForgotStep(1);

      // Current input from login screen
      const loginIdInput = document.getElementById('enrollment-id');
      const currentVal = loginIdInput ? loginIdInput.value.trim() : '';

      if (currentRole === 'parent') {
        if (modalTitle) modalTitle.innerText = 'Parent Password Recovery';
        if (modalSubtitle) modalSubtitle.innerText = 'Step 1 of 3: Mobile Phone Number Identification';
        if (modalDesc) modalDesc.innerText = 'Enter your registered parent mobile phone number to receive a secure 6-digit One Time Password (OTP) via SMS.';
        if (inputLabel) inputLabel.innerText = 'Registered Parent Mobile Phone Number';
        if (idInput) {
          idInput.setAttribute('placeholder', 'e.g., 98450 12345 (or 10042)');
          idInput.value = currentVal || '98450 12345';
        }
        if (inputIcon) inputIcon.innerText = 'phone_iphone';
        if (quickChips) {
          quickChips.innerHTML = `
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Quick Parent Numbers:</span>
            <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <button type="button" onclick="setForgotDemoInput('98450 12345')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Mr. M. Patil (98450 12345)</button>
              <button type="button" onclick="setForgotDemoInput('98450 12346')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Dr. R. Sharma (98450 12346)</button>
              <button type="button" onclick="setForgotDemoInput('98450 12347')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Mr. V. Deshmukh (98450 12347)</button>
              <button type="button" onclick="setForgotDemoInput('98450 12348')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Mrs. K. Malagi (98450 12348)</button>
              <button type="button" onclick="setForgotDemoInput('98450 12350')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Dr. S. Kulkarni (98450 12350)</button>
            </div>
          `;
        }
      } else if (currentRole === 'staff') {
        if (modalTitle) modalTitle.innerText = 'Faculty Password Recovery';
        if (modalSubtitle) modalSubtitle.innerText = 'Step 1 of 3: Faculty ID / Mobile Identification';
        if (modalDesc) modalDesc.innerText = 'Enter your Faculty Staff Employee ID (e.g., BSS-101) or registered phone to receive an SMS OTP.';
        if (inputLabel) inputLabel.innerText = 'Faculty Staff ID / Employee Code';
        if (idInput) {
          idInput.setAttribute('placeholder', 'e.g., BSS-101 (or 101)');
          idInput.value = currentVal || 'BSS-101';
        }
        if (inputIcon) inputIcon.innerText = 'badge';
        if (quickChips) {
          quickChips.innerHTML = `
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Quick Faculty IDs:</span>
            <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <button type="button" onclick="setForgotDemoInput('BSS-101')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Mrs. Shalini (BSS-101)</button>
              <button type="button" onclick="setForgotDemoInput('BSS-102')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Dr. Kulkarni (BSS-102)</button>
              <button type="button" onclick="setForgotDemoInput('BSS-103')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Dr. Patil (BSS-103)</button>
            </div>
          `;
        }
      } else {
        if (modalTitle) modalTitle.innerText = 'Student Password Recovery';
        if (modalSubtitle) modalSubtitle.innerText = 'Step 1 of 3: Student Roll Number Identification';
        if (modalDesc) modalDesc.innerText = 'Enter your Student Roll Number (e.g., BSS-10042) to send an SMS OTP to registered parent number.';
        if (inputLabel) inputLabel.innerText = 'Student Roll Number';
        if (idInput) {
          idInput.setAttribute('placeholder', 'e.g., BSS-10042 (or 10042)');
          idInput.value = currentVal || 'BSS-10042';
        }
        if (inputIcon) inputIcon.innerText = 'school';
        if (quickChips) {
          quickChips.innerHTML = `
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Quick Student Rolls:</span>
            <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <button type="button" onclick="setForgotDemoInput('BSS-10042')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Aarav (10042)</button>
              <button type="button" onclick="setForgotDemoInput('BSS-10043')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Ananya (10043)</button>
              <button type="button" onclick="setForgotDemoInput('BSS-10044')" class="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition shrink-0 cursor-pointer">Rohan (10044)</button>
            </div>
          `;
        }
      }

      openModal('modal-forgot');
    }

    function setForgotDemoInput(val) {
      const idInput = document.getElementById('forgot-id-input');
      if (idInput) {
        idInput.value = val;
        handleSendForgotOtp();
      }
    }

    function handleForgotLiveSearch(val) {
      // Step 1 doesn't auto-advance without SMS OTP dispatch
    }

    function handleForgotInputChange(val) {
      // Step 1 manual entry
    }

    function handleForgotPasswordSubmit(e, isImmediate = false) {
      if (e) e.preventDefault();
      setTimeout(() => {
        handleLogin();
      }, 300);
    }

    function submitLeave(e) {
      e.preventDefault();
      closeModal('modal-leave');
      showToast('Leave request submitted to Class Teacher (Mathematics Faculty)');
    }

    // Toast Utility
    let toastTimer = null;
    function showToast(msg) {
      const t = document.getElementById('toast');
      const m = document.getElementById('toast-message');
      m.innerText = msg;
      t.classList.remove('-translate-y-20', 'opacity-0');
      t.classList.add('translate-y-0', 'opacity-100');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        t.classList.add('-translate-y-20', 'opacity-0');
        t.classList.remove('translate-y-0', 'opacity-100');
      }, 3500);
    }

    // Theme & Frame Toggle
    function toggleDarkMode() {
      const html = document.documentElement;
      const themeIcon = document.getElementById('theme-icon');
      const themeText = document.getElementById('theme-text');
      const profileToggle = document.getElementById('profile-dark-toggle');

      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        themeIcon.innerText = 'dark_mode';
        themeText.innerText = 'Dark Mode';
        if (profileToggle) profileToggle.checked = false;
        showToast('Light Theme Enabled');
      } else {
        html.classList.add('dark');
        themeIcon.innerText = 'light_mode';
        themeText.innerText = 'Light Mode';
        if (profileToggle) profileToggle.checked = true;
        showToast('Academic Dark Theme Enabled');
      }
    }

    function toggleDeviceFrame() {
      const container = document.getElementById('main-container');
      const label = document.getElementById('frame-toggle-label');
      isDesktopExpanded = !isDesktopExpanded;

      if (isDesktopExpanded) {
        container.classList.remove('max-w-md', 'sm:rounded-3xl');
        container.classList.add('max-w-4xl', 'sm:rounded-2xl');
        label.innerText = "Fluid Tablet/Desktop";
        showToast('Switched to Expanded View');
      } else {
        container.classList.remove('max-w-4xl', 'sm:rounded-2xl');
        container.classList.add('max-w-md', 'sm:rounded-3xl');
        label.innerText = "Mobile Canvas View";
        showToast('Switched to Mobile Canvas');
      }
    }

    // PWA Service Worker & Install Event Management
    let deferredInstallPrompt = null;

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.getRegistrations().then(regs => {
          for (let reg of regs) { reg.unregister(); }
        });
      });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent automatic prompt banner
      e.preventDefault();
      deferredInstallPrompt = e;
      // Make install buttons prominent
      const installBtn = document.getElementById('pwa-install-btn');
      if (installBtn) installBtn.classList.remove('hidden');
      console.log('App install prompt captured and ready');
    });

    function triggerPwaInstall() {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            showToast('Basava Shree School Portal installed successfully!');
          } else {
            showToast('Installation cancelled');
          }
          deferredInstallPrompt = null;
        });
      } else {
        showToast('To install: click your browser menu (⋮ / Share) > "Install app" or "Add to Home Screen"');
      }
    }

    // Network Online / Offline Detection
    window.addEventListener('online', () => {
      const dot = document.getElementById('network-status-dot');
      const text = document.getElementById('network-status-text');
      if (dot && text) {
        dot.className = "w-2 h-2 rounded-full bg-emerald-400 animate-pulse";
        text.innerText = "Campus Server Online";
      }
      showToast('Internet connection restored • Live ERP sync active');
    });

    window.addEventListener('offline', () => {
      const dot = document.getElementById('network-status-dot');
      const text = document.getElementById('network-status-text');
      if (dot && text) {
        dot.className = "w-2 h-2 rounded-full bg-amber-400";
        text.innerText = "Offline Mode (Cached)";
      }
      showToast('Running in Offline Mode • Cached portal data available');
    });
    // =========================================================================
    // STUDENT ATTENDANCE HUB (CALCULATOR, CALENDAR & ATTESTATION ENGINE)
    // =========================================================================

    function openAttendanceCertModal() {
      openModal('modal-attendance-cert');
    }

    // Smart Attendance Margin & Safe Bunk Calculator
    function setAttendanceTarget(targetPct) {
      const currentAttended = 184;
      const currentTotal = 208;
      const currentPct = ((currentAttended / currentTotal) * 100).toFixed(1);

      [75, 80, 85, 90, 95].forEach(pct => {
        const btn = document.getElementById('att-target-btn-' + pct);
        if (btn) {
          if (pct === targetPct) {
            btn.className = "flex-1 py-1.5 rounded-lg bg-primary-container text-white text-xs font-bold transition shadow-xs ring-2 ring-primary-container/40";
          } else {
            btn.className = "flex-1 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition";
          }
        }
      });

      const resContainer = document.getElementById('att-calculator-result');
      if (!resContainer) return;

      const targetRatio = targetPct / 100;
      if (targetPct <= 88.5) {
        // Safe to bunk
        const safeMargin = Math.floor(currentAttended / targetRatio - currentTotal);
        resContainer.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1.5 transition-all">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
                <span class="material-symbols-outlined text-[18px]">check_circle</span>
                <span>Safe Bunk Margin: Up to ${safeMargin} Classes</span>
              </div>
              <span class="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">Safe Zone</span>
            </div>
            <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Your current attendance is <b>${currentPct}%</b> (184/208). You can safely miss up to <b>${safeMargin} more sessions</b> while staying above your selected <b>${targetPct}%</b> threshold.
            </p>
            <div class="pt-1 border-t border-emerald-500/20 flex items-center justify-between text-[10px] text-emerald-700 dark:text-emerald-400 font-medium">
              <span>CBSE Statutory Minimum: 75.0%</span>
              <span>Selected Goal: ${targetPct}%</span>
            </div>
          </div>
        `;
        showToast(`Target set to ${targetPct}%: Safe margin is ${safeMargin} classes`);
      } else {
        // Need to attend more
        const needed = Math.ceil(((targetRatio * currentTotal) - currentAttended) / (1 - targetRatio));
        resContainer.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1.5 transition-all">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold">
                <span class="material-symbols-outlined text-[18px]">warning</span>
                <span>Attend Next ${needed} Consecutive Classes</span>
              </div>
              <span class="px-2 py-0.5 rounded bg-amber-600 text-white font-bold text-[10px]">Focus Zone</span>
            </div>
            <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              To raise your current <b>${currentPct}%</b> to <b>${targetPct}%</b>, you must attend the next <b>${needed} classes consecutively</b> without missing any sessions.
            </p>
            <div class="pt-1 border-t border-amber-500/20 flex items-center justify-between text-[10px] text-amber-700 dark:text-amber-400 font-medium">
              <span>Goal: ${targetPct}% Target</span>
              <span>Zero-bunk streak needed</span>
            </div>
          </div>
        `;
        showToast(`Target set to ${targetPct}%: Attend next ${needed} classes consecutively`);
      }
    }

    // Interactive Monthly Attendance Calendar
    const octoberCalendarLogs = {
      1: { type: 'present', title: 'Tuesday, Oct 1 • Present', desc: 'Full day attendance (6/6 sessions) verified by Class Teacher.', badge: 'Present', badgeColor: 'bg-emerald-600' },
      2: { type: 'holiday', title: 'Wednesday, Oct 2 • Holiday', desc: 'Campus closed in observance of Gandhi Jayanti.', badge: 'Holiday', badgeColor: 'bg-slate-600' },
      3: { type: 'present', title: 'Thursday, Oct 3 • Present', desc: 'Full attendance verified. Completed Physics Optics Lab.', badge: 'Present', badgeColor: 'bg-emerald-600' },
      4: { type: 'present', title: 'Friday, Oct 4 • Present', desc: 'Full attendance verified. Participated in Kannada Vachana recitation.', badge: 'Present', badgeColor: 'bg-emerald-600' },
      5: { type: 'present', title: 'Saturday, Oct 5 • Present', desc: 'Weekly Quiz & Science Mentoring session attended.', badge: 'Present', badgeColor: 'bg-emerald-600' },
      6: { type: 'holiday', title: 'Sunday, Oct 6 • Weekend', desc: 'Sunday weekly campus holiday.', badge: 'Weekend', badgeColor: 'bg-slate-500' },
      7: { type: 'present', title: 'Monday, Oct 7 • Present', desc: 'Regular academic day (6 sessions). Mathematics AP revision completed.', badge: 'Present', badgeColor: 'bg-emerald-600' },
      8: { type: 'present', title: 'Tuesday, Oct 8 • Present', desc: 'Full attendance verified. Completed Chemistry practicals.', badge: 'Present', badgeColor: 'bg-emerald-600' },
      9: { type: 'present', title: 'Wednesday, Oct 9 • Present', desc: 'Full attendance verified. Completed Social Studies seminar.', badge: 'Present', badgeColor: 'bg-emerald-600' },
      10: { type: 'present', title: 'Thursday, Oct 10 • Present', desc: 'Resumed attendance. Completed Biology genetics practical assignment.', badge: 'Present', badgeColor: 'bg-emerald-600' },
      11: { type: 'absent', title: 'Friday, Oct 11 • Absent (Unexcused)', desc: 'Full day unexcused absence recorded. Parent notification confirmed via uniRP SMS.', badge: 'Absent', badgeColor: 'bg-rose-600' },
      12: { type: 'holiday', title: 'Saturday, Oct 12 • Festival Holiday', desc: 'Maha Navami / Ayudha Puja celebration break.', badge: 'Festival', badgeColor: 'bg-slate-600' },
      13: { type: 'holiday', title: 'Sunday, Oct 13 • Weekend', desc: 'Sunday weekly campus holiday.', badge: 'Weekend', badgeColor: 'bg-slate-500' },
      14: { type: 'present', title: 'Monday, Oct 14 • Present', desc: 'Full 6 periods attended. Mathematics quadratic formula mastery verified.', badge: 'Present', badgeColor: 'bg-emerald-600' },
      15: { type: 'today', title: 'Tuesday, Oct 15 (Today) • Present', desc: 'Campus arrival recorded at 08:14 AM. Period 1 & 2 completed, session active.', badge: 'Today • Active', badgeColor: 'bg-emerald-600' },
      16: { type: 'scheduled', title: 'Wednesday, Oct 16 • Scheduled', desc: 'Upcoming academic day. Chemistry practicals & Civics scheduled.', badge: 'Scheduled', badgeColor: 'bg-primary-container' },
      17: { type: 'scheduled', title: 'Thursday, Oct 17 • Scheduled', desc: 'Biology lab & Math coordinate geometry revision planned.', badge: 'Scheduled', badgeColor: 'bg-primary-container' },
      18: { type: 'scheduled', title: 'Friday, Oct 18 • Scheduled', desc: 'Pre-board mock test preparation sessions.', badge: 'Scheduled', badgeColor: 'bg-primary-container' },
      19: { type: 'scheduled', title: 'Saturday, Oct 19 • Scheduled', desc: 'Weekly evaluation & inter-house debate.', badge: 'Scheduled', badgeColor: 'bg-primary-container' },
      20: { type: 'holiday', title: 'Sunday, Oct 20 • Weekend', desc: 'Sunday weekly campus holiday.', badge: 'Weekend', badgeColor: 'bg-slate-500' },
      31: { type: 'holiday', title: 'Thursday, Oct 31 • Diwali Break', desc: 'Campus closed for Naraka Chaturdashi & Deepavali celebrations.', badge: 'Festival Holiday', badgeColor: 'bg-purple-600' }
    };

    function inspectCalendarDate(day) {
      const log = octoberCalendarLogs[day] || {
        type: (day % 7 === 6 || day % 7 === 0) ? 'holiday' : 'scheduled',
        title: `October ${day}, 2024 • Academic Schedule`,
        desc: (day % 7 === 6 || day % 7 === 0) ? 'Weekend holiday' : 'Scheduled regular academic curriculum classes.',
        badge: (day % 7 === 6 || day % 7 === 0) ? 'Weekend' : 'Scheduled',
        badgeColor: (day % 7 === 6 || day % 7 === 0) ? 'bg-slate-500' : 'bg-primary-container'
      };

      // Add visual active highlight ring to clicked day button
      const allDayBtns = document.querySelectorAll('#subview-attendance .grid-cols-7 button');
      allDayBtns.forEach(btn => {
        if (btn.innerText.trim() === String(day)) {
          btn.classList.add('ring-2', 'ring-primary-container', 'scale-105');
        } else {
          btn.classList.remove('ring-2', 'ring-primary-container', 'scale-105');
        }
      });

      const container = document.getElementById('calendar-day-inspection');
      if (container) {
        container.innerHTML = `
          <div class="p-3 rounded-xl bg-primary/5 dark:bg-slate-800/80 border border-primary/20 text-xs flex items-center justify-between transition-all">
            <div class="space-y-0.5">
              <span class="font-bold text-slate-900 dark:text-white block text-[11px]">${log.title}</span>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">${log.desc}</p>
            </div>
            <span class="font-bold text-[10px] uppercase px-2 py-0.5 ${log.badgeColor} text-white rounded shadow-xs flex-shrink-0 ml-2">
              ${log.badge}
            </span>
          </div>
        `;
      }
    }

    // Quick Unified Attendance Hub Switcher
    function openAttendanceHub(mode) {
      if (currentActiveView === 'faculty' || currentRole === 'staff' || mode === 'staff') {
        navigateTo('faculty');
        switchFacultyTab('attendance');
        showToast('Viewing Class Attendance Roll Call Console');
      } else {
        navigateTo('attendance');
        showToast('Viewing Student Attendance & Safe Bunk Analytics');
      }
    }

    // =========================================================================
    // FACULTY & STAFF ATTENDANCE MANAGEMENT SYSTEM (STATE & ENGINE)
    // =========================================================================


    let staffLeaveBalance = {
      cl: 8,
      clTotal: 12,
      ml: 10,
      mlTotal: 10,
      el: 15,
      elTotal: 15,
      od: 3
    };

    let currentFacultySubTab = 'staff-matrix';
    let currentStaffFilter = 'all';
    let staffSearchQuery = '';

    function getStaffDefaultPassword(staff) {
      if (staff && staff.password) return staff.password;
      if (!staff) return 'staff@101';
      const cleanNameParts = (staff.name || 'Staff').replace(/^(Mrs\.|Mr\.|Dr\.|Coach)\s*/i, '').trim().split(/\s+/);
      const namePart = (cleanNameParts[cleanNameParts.length - 1] || cleanNameParts[0] || 'staff').toLowerCase().replace(/[^a-z0-9]/g, '');
      const idDigits = (staff.id || '').replace(/\D/g, '') || '101';
      return `${namePart}@${idDigits}`;
    }


    const STAFF_DEPARTMENTS = ['Principal', 'English', 'Kannada', 'Science', 'Social Science', 'Hindi', 'Computer Science', 'Mathematics'];

    // Campus Staff & Teachers Directory Matrix - 1 Staff = 1 ID & 1 Staff = 1 Password
    const DEFAULT_STAFF_MEMBERS_LIST = [
      {
        id: "BSS-100",
        name: "Principal (Dr. S. Patil)",
        role: "Principal & Head of Institution",
        dept: "Principal",
        type: "admin",
        password: "principal@100",
        status: "Present",
        inTime: "07:45 AM",
        outTime: "--",
        substitute: null,
        avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=150",
        periods: "Institutional Governance & Supervision",
        location: "Principal Office"
      },
      {
        id: "BSS-101",
        name: "English Faculty",
        role: "Senior Faculty • English",
        dept: "English",
        type: "teaching",
        password: "english@101",
        status: "Present",
        inTime: "08:15 AM",
        outTime: "--",
        substitute: null,
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
        periods: "4 Classes Today",
        location: "Room 201"
      },
      {
        id: "BSS-102",
        name: "Kannada Faculty",
        role: "Senior Faculty • Kannada",
        dept: "Kannada",
        type: "teaching",
        password: "kannada@102",
        status: "Present",
        inTime: "08:20 AM",
        outTime: "--",
        substitute: null,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
        periods: "4 Classes Today",
        location: "Room 202"
      },
      {
        id: "BSS-103",
        name: "Science Faculty",
        role: "Head of Department • Science",
        dept: "Science",
        type: "teaching",
        password: "science@103",
        status: "Present",
        inTime: "08:05 AM",
        outTime: "--",
        substitute: null,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        periods: "3 Labs Today",
        location: "Science Lab 1"
      },
      {
        id: "BSS-104",
        name: "Social Science Faculty",
        role: "Faculty • Social Science",
        dept: "Social Science",
        type: "teaching",
        password: "social@104",
        status: "Present",
        inTime: "08:25 AM",
        outTime: "--",
        substitute: null,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
        periods: "4 Classes Today",
        location: "Room 203"
      },
      {
        id: "BSS-105",
        name: "Hindi Faculty",
        role: "Faculty • Hindi",
        dept: "Hindi",
        type: "teaching",
        password: "hindi@105",
        status: "Present",
        inTime: "08:30 AM",
        outTime: "--",
        substitute: null,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
        periods: "4 Classes Today",
        location: "Room 204"
      },
      {
        id: "BSS-106",
        name: "Computer Science Faculty",
        role: "Faculty • Computer Science",
        dept: "Computer Science",
        type: "teaching",
        password: "cs@106",
        status: "Present",
        inTime: "08:10 AM",
        outTime: "--",
        substitute: null,
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150",
        periods: "3 Labs Today",
        location: "Computer Lab 1"
      },
      {
        id: "BSS-107",
        name: "Mathematics Faculty",
        role: "Class Teacher (Class 10-A) • Mathematics",
        dept: "Mathematics",
        type: "teaching",
        password: "math@107",
        status: "Present",
        inTime: "08:12 AM",
        outTime: "--",
        substitute: null,
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150",
        periods: "4 Classes Today",
        location: "Room 205"
      }
    ];

    let staffMembersList = JSON.parse(JSON.stringify(DEFAULT_STAFF_MEMBERS_LIST));
    window.staffMembersList = staffMembersList;

    function initStaffMembersList() {
      try {
        localStorage.removeItem('bss_hide_faculty_cards');
        const saved = localStorage.getItem('bss_staff_members_list');
        if (saved) {
          let parsed = JSON.parse(saved);
          const hasOldStaff = Array.isArray(parsed) && parsed.some(st => 
            (st.name && (st.name.includes('Shalini') || st.name.includes('Kulkarni') || st.name.includes('Alva') || st.name.includes('Ramesh') || st.name.includes('VIJAYLAKSHMI') || st.name.includes('Vijaylakshmi') || st.name.includes('Deshpande') || st.name.includes('Hiremath') || st.name.includes('Pushpa') || st.name.includes('Joshi') || st.name.includes('Suresh') || st.name === 'Dr. B. Patil')) ||
            (st.dept && !STAFF_DEPARTMENTS.includes(st.dept))
          );
          const hasPrincipal = Array.isArray(parsed) && parsed.some(st => (st.dept || '').toLowerCase() === 'principal' || (st.id || '').toUpperCase() === 'BSS-100');
          if (hasOldStaff || !hasPrincipal || !Array.isArray(parsed) || parsed.length === 0) {
            staffMembersList = JSON.parse(JSON.stringify(DEFAULT_STAFF_MEMBERS_LIST));
            window.staffMembersList = staffMembersList;
            try {
              localStorage.setItem('bss_staff_members_list', JSON.stringify(staffMembersList));
            } catch (e) { }
            updateStaffMatrixKpis();
            return;
          }
          staffMembersList = parsed;
          window.staffMembersList = staffMembersList;
          updateStaffMatrixKpis();
          return;
        }
      } catch (err) {
        console.warn('Could not load staffMembersList from localStorage:', err);
      }
      staffMembersList = JSON.parse(JSON.stringify(DEFAULT_STAFF_MEMBERS_LIST));
      window.staffMembersList = staffMembersList;
      try {
        localStorage.setItem('bss_staff_members_list', JSON.stringify(staffMembersList));
      } catch (e) { }
      updateStaffMatrixKpis();
    }

    function saveStaffMembersList() {
      try {
        localStorage.setItem('bss_staff_members_list', JSON.stringify(staffMembersList));
      } catch (err) {
        console.warn('Could not save staffMembersList to localStorage:', err);
      }
      window.staffMembersList = staffMembersList;
      updateStaffMatrixKpis();
    }

    // Dynamic Faculty & Staff KPI Metrics Engine
    function updateStaffMatrixKpis() {
      if (typeof staffMembersList === 'undefined' || !Array.isArray(staffMembersList)) return;
      const total = staffMembersList.length;
      const present = staffMembersList.filter(s => s.status === 'Present').length;
      const pct = total > 0 ? ((present / total) * 100).toFixed(1) : '0.0';

      const kpiPresentEl = document.getElementById('faculty-kpi-staff-present');
      if (kpiPresentEl) {
        kpiPresentEl.innerText = `${present} / ${total}`;
        const pctSpan = kpiPresentEl.nextElementSibling;
        if (pctSpan) pctSpan.innerText = `${pct}% Present`;
      }

      const matrixSummaryPill = document.getElementById('staff-matrix-summary-pill');
      if (matrixSummaryPill) {
        matrixSummaryPill.innerText = `${present} / ${total} Present`;
      }

      const btnAll = document.getElementById('staff-filter-all');
      if (btnAll) btnAll.innerText = `All Staff (${total})`;

      STAFF_DEPARTMENTS.forEach(dept => {
        const btn = document.getElementById('staff-filter-' + dept);
        if (btn) {
          const count = staffMembersList.filter(s => (s.dept || '').toLowerCase() === dept.toLowerCase()).length;
          btn.innerText = `${dept} (${count})`;
        }
      });
    }

    // Faculty Preset Avatars for Add Faculty Modal
    const FACULTY_PRESET_AVATARS = [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=150"
    ];
    let selectedFacultyAvatar = FACULTY_PRESET_AVATARS[0];

    function selectFacultyAvatar(url) {
      selectedFacultyAvatar = url;
      renderAddFacultyAvatarPicker();
    }

    function renderAddFacultyAvatarPicker() {
      const picker = document.getElementById('new-faculty-avatar-picker');
      if (!picker) return;
      picker.innerHTML = FACULTY_PRESET_AVATARS.map((url, idx) => {
        const isSelected = url === selectedFacultyAvatar;
        const ringCls = isSelected ? 'ring-2 ring-primary scale-110 shadow-md' : 'opacity-65 hover:opacity-100';
        return `
          <div onclick="selectFacultyAvatar('${url}')" class="relative cursor-pointer transition shrink-0">
            <img src="${url}" class="w-10 h-10 rounded-xl object-cover border border-slate-300 dark:border-slate-700 ${ringCls}" alt="Photo ${idx + 1}" />
            ${isSelected ? '<span class="material-symbols-outlined text-[13px] text-white bg-primary rounded-full absolute -top-1 -right-1 p-0.5">check</span>' : ''}
          </div>
        `;
      }).join('');
    }

    // Open Add Faculty Modal
    function openAddFacultyModal() {
      const modal = document.getElementById('modal-add-faculty');
      if (!modal) return;

      // Suggest next employee ID
      const existingNums = staffMembersList
        .map(s => {
          const m = (s.id || '').match(/BSS-(\d+)/i);
          return m ? parseInt(m[1], 10) : 0;
        })
        .filter(n => n > 0);
      const nextNum = existingNums.length > 0 ? Math.max(...existingNums) + 1 : 101;
      const suggestedId = `BSS-${nextNum}`;

      const idInput = document.getElementById('new-faculty-id');
      if (idInput) {
        idInput.value = suggestedId;
        idInput.classList.remove('border-rose-500', 'ring-2', 'ring-rose-400');
      }

      const nameInput = document.getElementById('new-faculty-name');
      if (nameInput) {
        nameInput.value = '';
        setTimeout(() => nameInput.focus(), 150);
      }

      const roleInput = document.getElementById('new-faculty-role');
      if (roleInput) roleInput.value = '';

      const locInput = document.getElementById('new-faculty-location');
      if (locInput) locInput.value = 'Room 208';

      const periodsInput = document.getElementById('new-faculty-periods');
      if (periodsInput) periodsInput.value = '4 Classes Today';

      const pwdInput = document.getElementById('new-faculty-password');
      if (pwdInput) pwdInput.value = `staff@${nextNum}`;

      const statusInput = document.getElementById('new-faculty-status');
      if (statusInput) statusInput.value = 'Present';

      const inTimeInput = document.getElementById('new-faculty-intime');
      if (inTimeInput) inTimeInput.value = '08:15 AM';

      renderAddFacultyAvatarPicker();
      modal.classList.remove('hidden');
    }

    function closeAddFacultyModal() {
      const modal = document.getElementById('modal-add-faculty');
      if (modal) modal.classList.add('hidden');
    }

    // Handle Add New Faculty Form Submit
    function handleAddNewFaculty(e) {
      if (e) e.preventDefault();
      const name = (document.getElementById('new-faculty-name')?.value || '').trim();
      let id = (document.getElementById('new-faculty-id')?.value || '').trim().toUpperCase();
      const dept = (document.getElementById('new-faculty-dept')?.value || 'Mathematics').trim();
      const role = (document.getElementById('new-faculty-role')?.value || 'Faculty Member').trim();
      const type = document.getElementById('new-faculty-type')?.value || 'teaching';
      const location = (document.getElementById('new-faculty-location')?.value || 'Main Campus').trim();
      const periods = (document.getElementById('new-faculty-periods')?.value || '4 Classes Today').trim();
      const password = (document.getElementById('new-faculty-password')?.value || '').trim() || `${name.toLowerCase().replace(/[^a-z]/g, '')}@123`;
      const status = document.getElementById('new-faculty-status')?.value || 'Present';
      const inTime = (document.getElementById('new-faculty-intime')?.value || (status === 'Present' ? '08:15 AM' : '--')).trim();

      if (!name) {
        showToast('Please enter faculty full name');
        return;
      }
      if (!id) {
        showToast('Please enter employee ID');
        return;
      }
      if (!id.startsWith('BSS-')) {
        id = `BSS-${id.replace(/^BSS/i, '').replace(/\D/g, '') || id}`;
      }

      // Check unique ID
      const existing = staffMembersList.find(s => (s.id || '').toUpperCase() === id.toUpperCase());
      if (existing) {
        showToast(`Staff ID "${id}" is already assigned to ${existing.name}!`);
        const idInput = document.getElementById('new-faculty-id');
        if (idInput) {
          idInput.focus();
          idInput.classList.add('border-rose-500', 'ring-2', 'ring-rose-400');
        }
        return;
      }

      const newFaculty = {
        id: id,
        name: name,
        role: role,
        dept: dept,
        type: type,
        password: password,
        status: status,
        inTime: status === 'Present' ? inTime : '--',
        outTime: '--',
        substitute: null,
        avatar: selectedFacultyAvatar || FACULTY_PRESET_AVATARS[0],
        periods: periods,
        location: location,
        isCustom: true
      };

      staffMembersList.push(newFaculty);
      saveStaffMembersList();
      renderStaffRegister();
      renderFacultyHeroProfile(newFaculty);
      closeAddFacultyModal();
      showToast(`Faculty ${name} (${id}) added successfully!`);
    }

    // Switch Active Hero Card to Selected Staff
    function selectStaffProfile(staffId) {
      const st = staffMembersList.find(s => (s.id || '').toLowerCase() === (staffId || '').toLowerCase());
      if (st) {
        renderFacultyHeroProfile(st);
        try {
          localStorage.setItem('bss_logged_in_staff_id', st.id);
        } catch (e) { }
        showToast(`Selected ${st.name} (${st.id})`);
        const heroEl = document.getElementById('staff-hero-name');
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }

    // Delete Custom Registered Faculty
    function deleteCustomFaculty(staffId, e) {
      if (e) e.stopPropagation();
      const st = staffMembersList.find(s => s.id === staffId);
      if (!st) return;
      if (!confirm(`Remove faculty record for ${st.name} (${st.id})?`)) return;

      staffMembersList = staffMembersList.filter(s => s.id !== staffId);
      saveStaffMembersList();
      renderStaffRegister();
      if (currentLoggedInStaff && currentLoggedInStaff.id === staffId) {
        renderFacultyHeroProfile(staffMembersList[0]);
      }
      showToast(`Faculty ${st.name} removed successfully.`);
    }

    let currentLoggedInStaff = staffMembersList[0]; // Default: Class Teacher

    function renderFacultyHeroProfile(staff) {
      const st = staff || currentLoggedInStaff || staffMembersList[0];
      if (!st) {
        const nameEl = document.getElementById('staff-hero-name');
        if (nameEl) nameEl.innerText = "Basava Shree Faculty";
        const roleEl = document.getElementById('staff-hero-role');
        if (roleEl) roleEl.innerText = "Faculty Console â€¢ Teaching Staff";
        const subtagEl = document.getElementById('staff-hero-subtag');
        if (subtagEl) subtagEl.innerText = "Academic Departments";
        const idEl = document.getElementById('staff-hero-id');
        if (idEl) idEl.innerText = "ID: BSS-FACULTY";
        return;
      }
      currentLoggedInStaff = st;

      const avatarEl = document.getElementById('staff-hero-avatar');
      const nameEl = document.getElementById('staff-hero-name');
      const roleEl = document.getElementById('staff-hero-role');
      const subtagEl = document.getElementById('staff-hero-subtag');
      const idEl = document.getElementById('staff-hero-id');
      const applicantInfoEl = document.getElementById('staff-leave-applicant-info');

      if (avatarEl) {
        avatarEl.src = st.avatar || 'assets/basavanna.png';
        avatarEl.alt = st.name;
      }
      if (nameEl) nameEl.innerText = st.name;
      if (roleEl) roleEl.innerText = `${st.role} • ${st.dept}`;
      if (subtagEl) {
        if (st.id === 'BSS-101') {
          subtagEl.innerText = 'Class Teacher: Class 10 - Section A';
          subtagEl.classList.remove('hidden');
        } else if (st.type === 'teaching') {
          subtagEl.innerText = `Department of ${st.dept}`;
          subtagEl.classList.remove('hidden');
        } else {
          subtagEl.innerText = `Administration • ${st.dept}`;
          subtagEl.classList.remove('hidden');
        }
      }
      if (idEl) idEl.innerText = `ID: ${st.id}`;
      if (applicantInfoEl) applicantInfoEl.innerText = `Applicant: ${st.name} (${st.id})`;
    }

    function getStudentDefaultPassword(st) {
      if (st && st.password) return st.password;
      if (!st) return 'student@123';
      const rawFirst = (st.name || st.fullName || 'student').trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g, '') || 'student';
      const rollDigits = (st.roll || '').replace(/\D/g, '') || '10042';
      return `${rawFirst}@${rollDigits}`;
    }

    function getParentDefaultPassword(st) {
      if (st && st.parentPassword) return st.parentPassword;
      if (!st) return 'mahesh@12345';
      const cleanPhone = (st.phone || '').replace(/\D/g, '');
      const last5 = cleanPhone.slice(-5) || (st.roll ? st.roll.replace(/\D/g, '') : '12345');
      const rawFirst = (st.parentName || 'Parent').replace(/^(Mrs\.|Mr\.|Dr\.)\s*/i, '').trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g, '') || 'parent';
      return `${rawFirst}@${last5}`;
    }

    // Student Roll Call Data
    const DEFAULT_CLASS_X_STUDENTS = [
      { roll: "BSS-10001", name: "Aarav M. Patil", fullName: "Aarav Mallikarjun Patil", studentClass: "10th Std", password: "aarav@10042", parentPassword: "mahesh@12345", status: "P", theory: 74, internal: 19, dob: "14 August 2008", blood: "O +ve", parentName: "Mr. Mahesh Patil", phone: "+91 98450 12345" },
      { roll: "BSS-10002", name: "Ananya Sharma", fullName: "Ananya Ramesh Sharma", studentClass: "10th Std", password: "ananya@10043", parentPassword: "ramesh@12346", status: "P", theory: 78, internal: 20, dob: "22 May 2008", blood: "B +ve", parentName: "Dr. Ramesh Sharma", phone: "+91 98450 12346" },
      { roll: "BSS-10003", name: "Rohan Deshmukh", fullName: "Rohan Vijay Deshmukh", studentClass: "10th Std", password: "rohan@10044", parentPassword: "vijay@12347", status: "A", theory: 56, internal: 16, dob: "09 January 2008", blood: "A +ve", parentName: "Mr. Vijay Deshmukh", phone: "+91 98450 12347" },
      { roll: "BSS-10004", name: "Priyadarshini M.", fullName: "Priyadarshini Krishna Malagi", studentClass: "10th Std", password: "priya@10045", parentPassword: "kasturi@12348", status: "P", theory: 71, internal: 18, dob: "18 November 2008", blood: "O -ve", parentName: "Mrs. Kasturi Malagi", phone: "+91 98450 12348" },
      { roll: "BSS-10005", name: "Vignesh Gowda", fullName: "Vignesh Hemant Gowda", studentClass: "10th Std", password: "vignesh@10046", parentPassword: "hemant@12349", status: "P", theory: 62, internal: 17, dob: "05 July 2008", blood: "AB +ve", parentName: "Mr. Hemant Gowda", phone: "+91 98450 12349" },
      { roll: "BSS-10006", name: "Tanvi Kulkarni", fullName: "Tanvi Suresh Kulkarni", studentClass: "10th Std", password: "tanvi@10047", parentPassword: "suresh@12350", status: "P", theory: 75, internal: 19, dob: "30 March 2008", blood: "B +ve", parentName: "Dr. Suresh Kulkarni", phone: "+91 98450 12350" },
      { roll: "BSS-10007", name: "Mohammed Zeeshan", fullName: "Mohammed Farhan Zeeshan", studentClass: "10th Std", password: "zeeshan@10048", parentPassword: "farhan@12351", status: "P", theory: 68, internal: 18, dob: "12 September 2008", blood: "A -ve", parentName: "Mr. Farhan Zeeshan", phone: "+91 98450 12351" },
      { roll: "BSS-10008", name: "Bhavana Hegde", fullName: "Bhavana Somesh Hegde", studentClass: "10th Std", password: "bhavana@10049", parentPassword: "shalini@12352", status: "P", theory: 76, internal: 20, dob: "16 October 2008", blood: "O +ve", parentName: "Class Teacher", phone: "+91 98450 12352" }
    ];

    let classXStudents = JSON.parse(JSON.stringify(DEFAULT_CLASS_X_STUDENTS));
    window.classXStudents = classXStudents;

    function initClassXStudents() {
      try {
        const saved = localStorage.getItem('bss_class_x_students');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            parsed.forEach(st => {
              const matchedDefault = DEFAULT_CLASS_X_STUDENTS.find(d => (d.roll || '').toLowerCase() === (st.roll || '').toLowerCase());
              if (!st.studentClass) {
                st.studentClass = (matchedDefault && matchedDefault.studentClass) ? matchedDefault.studentClass : '10th Std';
              }
              if (!st.password) {
                st.password = (matchedDefault && matchedDefault.password) ? matchedDefault.password : getStudentDefaultPassword(st);
              }
              if (!st.parentPassword) {
                st.parentPassword = (matchedDefault && matchedDefault.parentPassword) ? matchedDefault.parentPassword : getParentDefaultPassword(st);
              }
            });
            classXStudents = parsed;
            window.classXStudents = classXStudents;
          }
        }
      } catch (err) {
        console.warn('Could not load classXStudents from localStorage:', err);
      }
    }

    function saveClassXStudents() {
      try {
        localStorage.setItem('bss_class_x_students', JSON.stringify(classXStudents));
      } catch (err) {
        console.warn('Could not save classXStudents to localStorage:', err);
      }
      window.classXStudents = classXStudents;
    }


    // Switch Tabs inside Faculty Console
    function switchFacultyTab(tabKey) {
      if (!tabKey || tabKey === 'self-att') tabKey = 'staff-matrix';
      currentFacultySubTab = tabKey;
      const subviews = {
        'staff-matrix': 'faculty-subview-staff-matrix',
        'attendance': 'faculty-subview-attendance',
        'marks': 'faculty-subview-marks',
        'broadcast': 'faculty-subview-broadcast'
      };

      const btnIds = {
        'staff-matrix': 'faculty-tab-btn-matrix',
        'attendance': 'faculty-tab-btn-att',
        'marks': 'faculty-tab-btn-marks',
        'broadcast': 'faculty-tab-btn-broadcast'
      };

      Object.keys(subviews).forEach(k => {
        const sv = document.getElementById(subviews[k]);
        const btn = document.getElementById(btnIds[k]);

        if (k === tabKey) {
          if (sv) sv.classList.remove('hidden');
          if (btn) {
            btn.className = "flex-1 min-w-[85px] py-2 px-2 rounded-lg bg-white dark:bg-slate-900 text-primary dark:text-white font-bold text-xs card-depth-1 transition flex items-center justify-center gap-1 shadow-xs";
          }
        } else {
          if (sv) sv.classList.add('hidden');
          if (btn) {
            btn.className = "flex-1 min-w-[85px] py-2 px-2 rounded-lg text-on-surface-variant dark:text-slate-400 font-semibold text-xs hover:text-on-surface transition flex items-center justify-center gap-1";
          }
        }
      });

      if (tabKey === 'staff-matrix') renderStaffRegister(currentStaffFilter, staffSearchQuery);
      else if (tabKey === 'attendance') renderFacultyAttendanceRoster();
      else if (tabKey === 'marks') renderFacultyMarksTable();
    }

    // Filter Staff Register
    function filterStaffRegister(filterKey) {
      currentStaffFilter = filterKey;
      const allFilterKeys = ['all', ...STAFF_DEPARTMENTS];
      allFilterKeys.forEach(f => {
        const btn = document.getElementById('staff-filter-' + f);
        if (btn) {
          if (f === filterKey) {
            btn.className = "staff-filter-pill px-2.5 py-1 rounded-lg bg-primary-container text-white text-xs font-bold transition shadow-xs whitespace-nowrap";
          } else {
            btn.className = "staff-filter-pill px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition whitespace-nowrap";
          }
        }
      });
      renderStaffRegister(filterKey, staffSearchQuery);
    }

    function searchStaffRegister(val) {
      staffSearchQuery = (val || '').trim().toLowerCase();
      renderStaffRegister(currentStaffFilter, staffSearchQuery);
    }

    // Render Campus-Wide Staff Register Matrix
    function renderStaffRegister(filter, query) {
      if (typeof updateStaffMatrixKpis === 'function') updateStaffMatrixKpis();
      const container = document.getElementById('staff-matrix-container');
      if (!container) return;

      const f = filter || currentStaffFilter || 'all';
      const q = (query !== undefined ? query : staffSearchQuery) || '';

      const filtered = staffMembersList.filter(s => {
        let matchesFilter = true;
        if (f !== 'all') {
          matchesFilter = (s.dept || '').toLowerCase() === f.toLowerCase();
        }

        let matchesSearch = true;
        if (q) {
          matchesSearch = (s.name || '').toLowerCase().includes(q) ||
            (s.dept || '').toLowerCase().includes(q) ||
            (s.id || '').toLowerCase().includes(q) ||
            (s.role || '').toLowerCase().includes(q);
        }

        return matchesFilter && matchesSearch;
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="p-6 text-center text-slate-400 space-y-2 bg-slate-50 dark:bg-slate-800/20 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <span class="material-symbols-outlined text-[36px] text-slate-300">person_off</span>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">No faculty records found</p>
            <p class="text-[11px] text-slate-400">Add faculty members using the "Add Faculty" button above for English, Kannada, Science, Social Science, Hindi, Computer Science, or Mathematics.</p>
            <button type="button" onclick="openAddFacultyModal()" class="mt-2 px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-bold inline-flex items-center gap-1 shadow-sm hover:bg-primary-container transition cursor-pointer">
              <span class="material-symbols-outlined text-[15px]">person_add</span>
              <span>Add Faculty Now</span>
            </button>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(s => {
        let statusBadge = '';
        let cardBg = 'bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800';

        if (s.status === 'Present') {
          statusBadge = `
            <span class="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-[10px] font-bold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>In: ${s.inTime}</span>
            </span>
          `;
        } else if (s.status === 'On Leave') {
          statusBadge = `
            <span class="px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/20 text-[10px] font-bold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              <span>On Leave</span>
            </span>
          `;
          cardBg = 'bg-rose-500/5 dark:bg-rose-500/10 border-rose-500/20';
        } else if (s.status === 'On Duty') {
          statusBadge = `
            <span class="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/20 text-[10px] font-bold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              <span>On Duty (OD)</span>
            </span>
          `;
        }

        return `
          <div onclick="selectStaffProfile('${s.id}')" title="Click to view faculty details in hero profile"
            class="p-3 rounded-xl ${cardBg} border transition-all hover:shadow-md hover:border-primary-container cursor-pointer space-y-1 group">
            <div class="flex items-start justify-between gap-2">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-9 h-9 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 dark:border-slate-700 flex-shrink-0">
                  <img src="${s.avatar}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-200" />
                </div>
                <div class="min-w-0">
                  <div class="flex items-center gap-1.5">
                    <h4 class="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-primary dark:group-hover:text-primary-fixed transition">${s.name}</h4>
                  </div>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">${s.role} â€¢ <span class="font-medium text-primary dark:text-primary-fixed">${s.dept}</span></p>
                </div>
              </div>
              <div class="flex-shrink-0">
                ${statusBadge}
              </div>
            </div>

            <div class="flex items-center justify-between text-[10px] text-slate-400 pt-1">
              <span>Code: <b class="font-mono text-slate-600 dark:text-slate-300">${s.id}</b></span>
              <span>Room: <b class="text-slate-600 dark:text-slate-300">${s.location}</b></span>
              <span>${s.periods}</span>
            </div>

            <div class="mt-1.5 pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px]">
              <span class="px-1.5 py-0.2 rounded bg-primary/10 text-primary dark:text-primary-fixed font-bold border border-primary/20">${s.dept}</span>
              <button type="button" onclick="deleteCustomFaculty('${s.id}', event)" title="Remove faculty card"
                class="text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-0.5 font-semibold cursor-pointer">
                <span class="material-symbols-outlined text-[13px]">delete</span>
                <span>Remove</span>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    // =========================================================================
    // MULTI-GRADE ATTENDANCE ENGINE (ALL CLASSES: LKG, UKG, GRADE 1 TO 10)
    // =========================================================================
    let currentAttendanceDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    let currentAttendanceGrade = '10'; // Default to Class 10
    let dailyAttendanceRecords = {}; // Key: YYYY-MM-DD, Value: { date, records: { [roll]: 'P'|'A' }, submitted, submittedAt, submittedBy, ... }

    // Multi-Grade Student Rosters (LKG through Grade 9)
    const MULTI_GRADE_STUDENTS = {
      'lkg': [
        { roll: "BSS-LKG01", name: "Aadhya Kulkarni", studentClass: "Class LKG - Lotus", status: "P" },
        { roll: "BSS-LKG02", name: "Vihaan Sharma", studentClass: "Class LKG - Lotus", status: "P" },
        { roll: "BSS-LKG03", name: "Ananya Patil", studentClass: "Class LKG - Lotus", status: "P" },
        { roll: "BSS-LKG04", name: "Reyansh Reddy", studentClass: "Class LKG - Lotus", status: "P" },
        { roll: "BSS-LKG05", name: "Ishani Hegde", studentClass: "Class LKG - Lotus", status: "A" },
        { roll: "BSS-LKG06", name: "Advik Gowda", studentClass: "Class LKG - Lotus", status: "P" },
        { roll: "BSS-LKG07", name: "Saanvi Joshi", studentClass: "Class LKG - Lotus", status: "P" },
        { roll: "BSS-LKG08", name: "Kabir Hiremath", studentClass: "Class LKG - Lotus", status: "P" }
      ],
      'ukg': [
        { roll: "BSS-UKG01", name: "Dhruv Rao", studentClass: "Class UKG - Jasmine", status: "P" },
        { roll: "BSS-UKG02", name: "Diya Bhat", studentClass: "Class UKG - Jasmine", status: "P" },
        { roll: "BSS-UKG03", name: "Atharv K.", studentClass: "Class UKG - Jasmine", status: "P" },
        { roll: "BSS-UKG04", name: "Myra Deshmukh", studentClass: "Class UKG - Jasmine", status: "P" },
        { roll: "BSS-UKG05", name: "Samarth Pujar", studentClass: "Class UKG - Jasmine", status: "A" },
        { roll: "BSS-UKG06", name: "Ira Kulkarni", studentClass: "Class UKG - Jasmine", status: "P" },
        { roll: "BSS-UKG07", name: "Rudra Nayak", studentClass: "Class UKG - Jasmine", status: "P" },
        { roll: "BSS-UKG08", name: "Anvi Patil", studentClass: "Class UKG - Jasmine", status: "P" }
      ],
      '1': [
        { roll: "BSS-101", name: "Tanmay Angadi", studentClass: "Class 1-A", status: "P" },
        { roll: "BSS-102", name: "Avani Sharan", studentClass: "Class 1-A", status: "P" },
        { roll: "BSS-103", name: "Pranav Biradar", studentClass: "Class 1-A", status: "P" },
        { roll: "BSS-104", name: "Prisha Shettar", studentClass: "Class 1-A", status: "A" },
        { roll: "BSS-105", name: "Manish Desai", studentClass: "Class 1-A", status: "P" },
        { roll: "BSS-106", name: "Tanvi Hubballi", studentClass: "Class 1-A", status: "P" },
        { roll: "BSS-107", name: "Yashasvi V.", studentClass: "Class 1-A", status: "P" },
        { roll: "BSS-108", name: "Kushagra Jain", studentClass: "Class 1-A", status: "P" }
      ],
      '2': [
        { roll: "BSS-201", name: "Chirag Meti", studentClass: "Class 2-A", status: "P" },
        { roll: "BSS-202", name: "Bhoomi Kallur", studentClass: "Class 2-A", status: "P" },
        { roll: "BSS-203", name: "Siddharth Bellad", studentClass: "Class 2-A", status: "P" },
        { roll: "BSS-204", name: "Riddhi Kankanwadi", studentClass: "Class 2-A", status: "P" },
        { roll: "BSS-205", name: "Aditya Badiger", studentClass: "Class 2-A", status: "A" },
        { roll: "BSS-206", name: "Nandini Mathad", studentClass: "Class 2-A", status: "P" },
        { roll: "BSS-207", name: "Darshan Bagalkot", studentClass: "Class 2-A", status: "P" },
        { roll: "BSS-208", name: "Sneha Goudar", studentClass: "Class 2-A", status: "P" }
      ],
      '3': [
        { roll: "BSS-301", name: "Akash Kammar", studentClass: "Class 3-A", status: "P" },
        { roll: "BSS-302", name: "Keerthana Hallur", studentClass: "Class 3-A", status: "P" },
        { roll: "BSS-303", name: "Nikhil Horatti", studentClass: "Class 3-A", status: "P" },
        { roll: "BSS-304", name: "Spoorthi Ronad", studentClass: "Class 3-A", status: "P" },
        { roll: "BSS-305", name: "Varun Kazi", studentClass: "Class 3-A", status: "A" },
        { roll: "BSS-306", name: "Pooja Navalagund", studentClass: "Class 3-A", status: "P" },
        { roll: "BSS-307", name: "Shashank Kundgol", studentClass: "Class 3-A", status: "P" },
        { roll: "BSS-308", name: "Divya Byadagi", studentClass: "Class 3-A", status: "P" }
      ],
      '4': [
        { roll: "BSS-401", name: "Chetan Mudhol", studentClass: "Class 4-A", status: "P" },
        { roll: "BSS-402", name: "Deepika Alnavar", studentClass: "Class 4-A", status: "P" },
        { roll: "BSS-403", name: "Prajwal Hiregoudar", studentClass: "Class 4-A", status: "A" },
        { roll: "BSS-404", name: "Kavya Shiggaon", studentClass: "Class 4-A", status: "P" },
        { roll: "BSS-405", name: "Raghavendra Savanur", studentClass: "Class 4-A", status: "P" },
        { roll: "BSS-406", name: "Megha Hangal", studentClass: "Class 4-A", status: "P" },
        { roll: "BSS-407", name: "Guruprasad Ranebennur", studentClass: "Class 4-A", status: "P" },
        { roll: "BSS-408", name: "Anusha Haveri", studentClass: "Class 4-A", status: "P" }
      ],
      '5': [
        { roll: "BSS-501", name: "Basavaraj Bankapur", studentClass: "Class 5-A", status: "P" },
        { roll: "BSS-502", name: "Soumya Kalghatgi", studentClass: "Class 5-A", status: "P" },
        { roll: "BSS-503", name: "Shreedhar Dandeli", studentClass: "Class 5-A", status: "P" },
        { roll: "BSS-504", name: "Jyothi Haliyal", studentClass: "Class 5-A", status: "P" },
        { roll: "BSS-505", name: "Girish Yellapur", studentClass: "Class 5-A", status: "A" },
        { roll: "BSS-506", name: "Pallavi Sirsi", studentClass: "Class 5-A", status: "P" },
        { roll: "BSS-507", name: "Vinayak Karwar", studentClass: "Class 5-A", status: "P" },
        { roll: "BSS-508", name: "Aishwarya Kumta", studentClass: "Class 5-A", status: "P" }
      ],
      '6': [
        { roll: "BSS-601", name: "Santosh Bhatkal", studentClass: "Class 6-A", status: "P" },
        { roll: "BSS-602", name: "Radhika Honnavar", studentClass: "Class 6-A", status: "P" },
        { roll: "BSS-603", name: "Naveen Ankola", studentClass: "Class 6-A", status: "A" },
        { roll: "BSS-604", name: "Archana Gokarna", studentClass: "Class 6-A", status: "P" },
        { roll: "BSS-605", name: "Mahesh Siddapur", studentClass: "Class 6-A", status: "P" },
        { roll: "BSS-606", name: "Geetha Mundgod", studentClass: "Class 6-A", status: "P" },
        { roll: "BSS-607", name: "Sunil Joida", studentClass: "Class 6-A", status: "P" },
        { roll: "BSS-608", name: "Laxmi Supa", studentClass: "Class 6-A", status: "P" }
      ],
      '7': [
        { roll: "BSS-701", name: "Suresh Khanapur", studentClass: "Class 7-A", status: "P" },
        { roll: "BSS-702", name: "Vandana Kittur", studentClass: "Class 7-A", status: "P" },
        { roll: "BSS-703", name: "Kiran Bailhongal", studentClass: "Class 7-A", status: "P" },
        { roll: "BSS-704", name: "Shweta Saundatti", studentClass: "Class 7-A", status: "P" },
        { roll: "BSS-705", name: "Ravi Ramdurg", studentClass: "Class 7-A", status: "A" },
        { roll: "BSS-706", name: "Renuka Gokak", studentClass: "Class 7-A", status: "P" },
        { roll: "BSS-707", name: "Anand Mudalgi", studentClass: "Class 7-A", status: "P" },
        { roll: "BSS-708", name: "Sangeetha Hukkeri", studentClass: "Class 7-A", status: "P" }
      ],
      '8': [
        { roll: "BSS-801", name: "Prashant Chikkodi", studentClass: "Class 8-A", status: "P" },
        { roll: "BSS-802", name: "Vidya Nippani", studentClass: "Class 8-A", status: "P" },
        { roll: "BSS-803", name: "Manoj Raybag", studentClass: "Class 8-A", status: "A" },
        { roll: "BSS-804", name: "Savita Athani", studentClass: "Class 8-A", status: "P" },
        { roll: "BSS-805", name: "Umesh Kagwad", studentClass: "Class 8-A", status: "P" },
        { roll: "BSS-806", name: "Netra Kudachi", studentClass: "Class 8-A", status: "P" },
        { roll: "BSS-807", name: "Pawan Gokak", studentClass: "Class 8-A", status: "P" },
        { roll: "BSS-808", name: "Suma Sankeshwar", studentClass: "Class 8-A", status: "P" }
      ],
      '9': [
        { roll: "BSS-901", name: "Veeresh Jamkhandi", studentClass: "Class 9-A", status: "P" },
        { roll: "BSS-902", name: "Roopa Mudhol", studentClass: "Class 9-A", status: "P" },
        { roll: "BSS-903", name: "Sachin Bilagi", studentClass: "Class 9-A", status: "P" },
        { roll: "BSS-904", name: "Anita Bagalkot", studentClass: "Class 9-A", status: "A" },
        { roll: "BSS-905", name: "Mallikarjun Badami", studentClass: "Class 9-A", status: "P" },
        { roll: "BSS-906", name: "Kasturi Guledgudd", studentClass: "Class 9-A", status: "P" },
        { roll: "BSS-907", name: "Shashidhar Ilkal", studentClass: "Class 9-A", status: "P" },
        { roll: "BSS-908", name: "Tejaswini Hungund", studentClass: "Class 9-A", status: "P" }
      ]
    };

    function getActiveAttendanceStudents() {
      if (currentAttendanceGrade === '10') {
        return (typeof classXStudents !== 'undefined' && Array.isArray(classXStudents)) ? classXStudents : [];
      }
      return MULTI_GRADE_STUDENTS[currentAttendanceGrade] || (typeof classXStudents !== 'undefined' ? classXStudents : []);
    }

    function getGradeLabel(gradeKey) {
      const map = {
        'lkg': 'Class Class LKG - Lotus Wing (Pre-Primary)',
        'ukg': 'Class Class UKG - Jasmine Wing (Pre-Primary)',
        '1': 'Class 1 - Primary Wing',
        '2': 'Class 2 - Primary Wing',
        '3': 'Class 3 - Primary Wing',
        '4': 'Class 4 - Primary Wing',
        '5': 'Class 5 - Primary Wing',
        '6': 'Class 6 - Middle Wing',
        '7': 'Class 7 - Middle Wing',
        '8': 'Class 8 - Middle Wing',
        '9': 'Class 9 - Secondary Wing',
        '10': 'Class 10 - Section A (Board Exam)'
      };
      return map[gradeKey] || `Class ${gradeKey}`;
    }

    function isGradeSubmitted(dateStr, gradeKey) {
      const dayRec = dailyAttendanceRecords[dateStr];
      if (!dayRec) return false;
      if (gradeKey === '10') return !!dayRec.submitted;
      return !!dayRec['submitted_' + gradeKey];
    }

    function switchFacultyAttendanceGrade(gradeKey) {
      currentAttendanceGrade = gradeKey || '10';
      const sel = document.getElementById('faculty-attendance-class-select');
      if (sel && sel.value !== currentAttendanceGrade) {
        sel.value = currentAttendanceGrade;
      }
      const histLabel = document.getElementById('faculty-history-class-label');
      if (histLabel) {
        histLabel.innerText = getGradeLabel(currentAttendanceGrade);
      }

      // Synchronize students with current date records
      const dayRec = dailyAttendanceRecords[currentAttendanceDate];
      const activeStudents = getActiveAttendanceStudents();
      if (dayRec && dayRec.records) {
        activeStudents.forEach(st => {
          if (dayRec.records[st.roll]) {
            st.status = dayRec.records[st.roll];
          }
        });
      }

      updateAttendanceSubmissionState();
      renderFacultyAttendanceRoster();
      renderDailyAttendanceHistory();

      showToast(`Switched roll call view to ${getGradeLabel(currentAttendanceGrade)}`);
    }

    function updateAttendanceSubmissionState() {
      const dayRec = dailyAttendanceRecords[currentAttendanceDate] || {};
      const isSub = isGradeSubmitted(currentAttendanceDate, currentAttendanceGrade);
      const banner = document.getElementById('attendance-submitted-banner');
      const bannerTime = document.getElementById('attendance-submitted-time');
      const statusPill = document.getElementById('faculty-attendance-status-pill');
      const statusText = document.getElementById('faculty-attendance-status-text');
      const syncBtn = document.getElementById('btn-sync-attendance');
      const isToday = (currentAttendanceDate === new Date().toISOString().split('T')[0]);
      const gradeLabel = getGradeLabel(currentAttendanceGrade);

      if (isSub) {
        const subTime = (currentAttendanceGrade === '10' ? dayRec.submittedAt : dayRec['submittedAt_' + currentAttendanceGrade]) || `${currentAttendanceDate} 08:45 AM`;
        const subBy = (currentAttendanceGrade === '10' ? dayRec.submittedBy : dayRec['submittedBy_' + currentAttendanceGrade]) || 'Class Teacher';
        if (banner) banner.classList.remove('hidden');
        if (bannerTime) bannerTime.innerText = `Synchronized ${gradeLabel} with uniRP Central ERP Server (${subTime}) by ${subBy}`;
        if (statusPill) statusPill.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 inline-flex items-center gap-1";
        if (statusText) statusText.innerText = "Submitted & Synced";
        if (syncBtn) {
          syncBtn.innerHTML = `<span class="material-symbols-outlined text-[16px]">verified</span><span>${gradeLabel} Attendance Submitted & Locked (Re-sync)</span>`;
          syncBtn.className = "w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition active:scale-98 cursor-pointer";
        }
      } else {
        if (banner) banner.classList.add('hidden');
        if (statusPill) statusPill.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 inline-flex items-center gap-1";
        if (statusText) statusText.innerText = "Daily Update Pending";
        if (syncBtn) {
          syncBtn.innerHTML = `<span class="material-symbols-outlined text-[16px]">cloud_sync</span><span>Submit & Sync ${isToday ? "Today's" : ""} ${gradeLabel} Attendance to ERP</span>`;
          syncBtn.className = "w-full py-2.5 bg-primary-container hover:bg-primary text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition active:scale-98 cursor-pointer";
        }
      }
    }

    function initDailyAttendance() {
      try {
        const saved = localStorage.getItem('bss_daily_attendance_records');
        if (saved) {
          dailyAttendanceRecords = JSON.parse(saved);
        }
      } catch (e) {
        console.warn('Could not load daily attendance from localStorage:', e);
      }

      seedDefaultDailyAttendance();
    }

    function seedDefaultDailyAttendance() {
      const today = new Date();
      const pad = (n) => String(n).padStart(2, '0');

      // Seed last 10 school days if missing
      for (let i = 0; i <= 10; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const dayOfWeek = d.getDay();
        if (dayOfWeek === 0) continue; // Skip Sundays

        const key = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
        if (!dailyAttendanceRecords[key]) {
          const records = {};
          if (typeof classXStudents !== 'undefined') {
            classXStudents.forEach(st => {
              if (i === 0) {
                records[st.roll] = st.status || 'P';
              } else if (i === 1) {
                records[st.roll] = 'P';
              } else if (i === 2) {
                records[st.roll] = (st.roll === 'BSS-10044') ? 'A' : 'P';
              } else if (i === 4) {
                records[st.roll] = (st.roll === 'BSS-10048') ? 'A' : 'P';
              } else {
                records[st.roll] = 'P';
              }
            });
          }

          // Seed multi-grade student statuses
          Object.keys(MULTI_GRADE_STUDENTS).forEach(g => {
            MULTI_GRADE_STUDENTS[g].forEach((st, idx) => {
              records[st.roll] = (i % 3 === 2 && idx === 1) ? 'A' : (st.status || 'P');
            });
          });

          const timeStr = (i === 0) ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '08:45 AM';
          dailyAttendanceRecords[key] = {
            date: key,
            records: records,
            submitted: (i > 0),
            submittedAt: `${key} ${timeStr}`,
            submittedBy: "Class Teacher"
          };

          // Mark other grades as submitted on past days
          if (i > 0) {
            ['lkg', 'ukg', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(g => {
              dailyAttendanceRecords[key]['submitted_' + g] = true;
              dailyAttendanceRecords[key]['submittedAt_' + g] = `${key} ${timeStr}`;
              dailyAttendanceRecords[key]['submittedBy_' + g] = "Class Teacher";
            });
          }
        }
      }

      saveDailyAttendanceRecords();
    }

    function saveDailyAttendanceRecords() {
      try {
        localStorage.setItem('bss_daily_attendance_records', JSON.stringify(dailyAttendanceRecords));
      } catch (e) {
        console.warn('Could not save daily attendance to localStorage:', e);
      }
    }

    function setAttendanceDate(dateStr) {
      if (!dateStr) return;
      currentAttendanceDate = dateStr;

      const datePicker = document.getElementById('faculty-attendance-date-picker');
      if (datePicker && datePicker.value !== dateStr) {
        datePicker.value = dateStr;
      }

      // Format date display
      const dObj = new Date(dateStr + 'T00:00:00');
      const daysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const todayStr = new Date().toISOString().split('T')[0];
      const isToday = (dateStr === todayStr);

      const label = document.getElementById('faculty-attendance-date-label');
      if (label) {
        const prefix = isToday ? 'Today â€¢ ' : '';
        label.innerText = `${prefix}${daysFull[dObj.getDay()]}, ${dObj.getDate()} ${monthsFull[dObj.getMonth()]} ${dObj.getFullYear()}`;
      }

      // If no record exists for this date yet, initialize
      if (!dailyAttendanceRecords[dateStr]) {
        const recs = {};
        if (typeof classXStudents !== 'undefined') {
          classXStudents.forEach(st => {
            recs[st.roll] = 'P';
          });
        }
        Object.keys(MULTI_GRADE_STUDENTS).forEach(g => {
          MULTI_GRADE_STUDENTS[g].forEach(st => {
            recs[st.roll] = 'P';
          });
        });
        dailyAttendanceRecords[dateStr] = {
          date: dateStr,
          records: recs,
          submitted: false,
          submittedAt: null,
          submittedBy: null
        };
        saveDailyAttendanceRecords();
      }

      // Synchronize active students with this date's records
      const dayRec = dailyAttendanceRecords[dateStr];
      const activeStudents = getActiveAttendanceStudents();
      if (dayRec && dayRec.records) {
        activeStudents.forEach(st => {
          st.status = dayRec.records[st.roll] || st.status || 'P';
        });
      }

      updateAttendanceSubmissionState();
      renderFacultyAttendanceRoster();
      renderDailyAttendanceHistory();

      // If this is today and Class 10 is active, update student live status
      if (isToday && currentAttendanceGrade === '10') {
        const activeRoll = (typeof studentProfile !== 'undefined' && studentProfile.roll) ? studentProfile.roll : "BSS-10042";
        const stStatus = (dayRec.records && dayRec.records[activeRoll]) ? dayRec.records[activeRoll] : 'P';
        updateStudentTodayAttendance(stStatus);
      }
    }

    function changeAttendanceDate(offsetDays) {
      const current = new Date(currentAttendanceDate + 'T00:00:00');
      current.setDate(current.getDate() + offsetDays);
      const pad = (n) => String(n).padStart(2, '0');
      const nextDateStr = `${current.getFullYear()}-${pad(current.getMonth() + 1)}-${pad(current.getDate())}`;
      setAttendanceDate(nextDateStr);
    }

    function setAttendanceDateToday() {
      const todayStr = new Date().toISOString().split('T')[0];
      setAttendanceDate(todayStr);
    }

    function toggleDailyAttendanceHistory() {
      const panel = document.getElementById('faculty-daily-history-panel');
      if (panel) {
        panel.classList.toggle('hidden');
        if (!panel.classList.contains('hidden')) {
          renderDailyAttendanceHistory();
        }
      }
    }

    function renderDailyAttendanceHistory() {
      const container = document.getElementById('faculty-daily-history-list');
      if (!container) return;

      const dates = Object.keys(dailyAttendanceRecords).sort().reverse();
      if (dates.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-400 py-2 text-center">No daily records recorded yet.</p>`;
        return;
      }

      const activeList = getActiveAttendanceStudents();
      const total = activeList.length;

      container.innerHTML = dates.map(dateKey => {
        const entry = dailyAttendanceRecords[dateKey];
        const recs = entry.records || {};
        let pCount = 0;
        activeList.forEach(st => {
          const s = recs[st.roll] || st.status || 'P';
          if (s === 'P') pCount++;
        });
        const aCount = Math.max(0, total - pCount);
        const pct = total > 0 ? Math.round((pCount / total) * 100) : 0;
        const isSelected = (dateKey === currentAttendanceDate);
        const isSub = isGradeSubmitted(dateKey, currentAttendanceGrade);

        return `
          <div onclick="setAttendanceDate('${dateKey}')" class="p-2 rounded-xl flex items-center justify-between text-xs border transition cursor-pointer ${isSelected ? 'bg-primary/10 border-primary dark:bg-primary/20 ring-1 ring-primary' : 'bg-surface-container-lowest dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full ${isSub ? 'bg-emerald-500' : 'bg-amber-500'}"></span>
              <div>
                <span class="font-bold text-slate-900 dark:text-white font-mono">${dateKey}</span>
                <span class="text-[10px] text-slate-400 block">${isSub ? 'Submitted' : 'Draft / Pending'}</span>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-[11px] font-mono font-bold ${pct >= 85 ? 'text-emerald-600' : 'text-amber-600'}">${pct}%</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">${pCount} P</span>
              ${aCount > 0 ? `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-700 dark:text-rose-300">${aCount} A</span>` : ''}
              <span class="material-symbols-outlined text-[16px] text-slate-400">arrow_forward</span>
            </div>
          </div>
        `;
      }).join('');
    }

    // Render Student Attendance Roster (Active Selected Class)
    function renderFacultyAttendanceRoster() {
      const container = document.getElementById('faculty-attendance-list');
      if (!container) return;

      const activeList = getActiveAttendanceStudents();
      let countP = 0;
      let countA = 0;

      container.innerHTML = activeList.map((st, idx) => {
        if (st.status === 'P') countP++;
        else if (st.status === 'A') countA++;

        let statusText = "Present";
        let statusBadgeClass = "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30";
        if (st.status === 'A') {
          statusText = "Absent";
          statusBadgeClass = "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30";
        }

        return `
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <div class="flex items-center gap-2.5 cursor-pointer flex-1" onclick="toggleStudentAttendance(${idx})" title="Click row to toggle Present/Absent">
              <span class="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-[10px]">
                ${idx + 1}
              </span>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white leading-tight">${st.name}</h4>
                <div class="flex items-center gap-2 text-[10px] text-slate-400">
                  <span class="font-mono">${st.roll}</span>
                  <span>â€¢</span>
                  <span class="font-semibold text-primary dark:text-primary-fixed">${st.studentClass || getGradeLabel(currentAttendanceGrade)}</span>
                  <span>â€¢</span>
                  <span class="px-1.5 py-0.2 rounded border ${statusBadgeClass} font-bold">${statusText}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-1.5">
              <button onclick="setStudentAttendance(${idx}, 'P')"
                class="w-8 h-8 rounded-lg font-bold text-xs transition-transform active:scale-90 flex items-center justify-center cursor-pointer ${st.status === 'P' ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400/40' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600'}"
                title="Mark Present">
                P
              </button>
              <button onclick="setStudentAttendance(${idx}, 'A')"
                class="w-8 h-8 rounded-lg font-bold text-xs transition-transform active:scale-90 flex items-center justify-center cursor-pointer ${st.status === 'A' ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-400/40' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600'}"
                title="Mark Absent">
                A
              </button>
              <button onclick="deleteStudent(${idx})"
                class="w-7 h-7 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 transition flex items-center justify-center cursor-pointer"
                title="Remove student from roster">
                <span class="material-symbols-outlined text-[15px]">delete</span>
              </button>
            </div>
          </div>
        `;
      }).join('');

      // Update counters
      const elP = document.getElementById('student-count-p');
      const elA = document.getElementById('student-count-a');
      const kpiPresent = document.getElementById('faculty-kpi-present');
      const kpiPct = document.getElementById('faculty-kpi-pct');

      if (elP) elP.innerText = countP;
      if (elA) elA.innerText = countA;

      const total = activeList.length;
      const pct = total > 0 ? Math.round((countP / total) * 100) : 0;

      if (kpiPresent) kpiPresent.innerText = `${countP} / ${total}`;
      if (kpiPct) kpiPct.innerText = `${pct}% Present`;
    }

    function setStudentAttendance(idx, status) {
      const activeList = getActiveAttendanceStudents();
      if (activeList[idx]) {
        const student = activeList[idx];
        student.status = status;

        if (!dailyAttendanceRecords[currentAttendanceDate]) {
          dailyAttendanceRecords[currentAttendanceDate] = {
            date: currentAttendanceDate,
            records: {},
            submitted: false,
            submittedAt: null,
            submittedBy: null
          };
        }
        dailyAttendanceRecords[currentAttendanceDate].records[student.roll] = status;
        saveDailyAttendanceRecords();
        if (currentAttendanceGrade === '10') {
          saveClassXStudents();
        }

        renderFacultyAttendanceRoster();
        renderDailyAttendanceHistory();

        const todayStr = new Date().toISOString().split('T')[0];
        const isToday = (currentAttendanceDate === todayStr);

        const curRoll = (typeof studentProfile !== 'undefined' && studentProfile.roll) ? studentProfile.roll : "BSS-10042";
        const curName = (typeof studentProfile !== 'undefined' && studentProfile.callingName) ? studentProfile.callingName : "Aarav";

        if (isToday && (student.roll === curRoll || (student.name && student.name.includes(curName)))) {
          updateStudentTodayAttendance(status);
        }

        renderStudentDailyAttendanceTimeline();

        if (status === 'A') {
          showToast(`Marked ${student.name} as Absent on ${currentAttendanceDate} (SMS notification queued)`);
        } else {
          showToast(`Marked ${student.name} as Present on ${currentAttendanceDate}`);
        }
      }
    }

    function toggleStudentAttendance(idx) {
      const activeList = getActiveAttendanceStudents();
      if (activeList[idx]) {
        const nextStatus = activeList[idx].status === 'P' ? 'A' : 'P';
        setStudentAttendance(idx, nextStatus);
      }
    }

    function markAllPresent() {
      const activeList = getActiveAttendanceStudents();
      activeList.forEach(st => st.status = 'P');
      if (dailyAttendanceRecords[currentAttendanceDate]) {
        activeList.forEach(st => {
          dailyAttendanceRecords[currentAttendanceDate].records[st.roll] = 'P';
        });
        saveDailyAttendanceRecords();
      }
      if (currentAttendanceGrade === '10') {
        saveClassXStudents();
      }
      renderFacultyAttendanceRoster();
      renderDailyAttendanceHistory();

      const todayStr = new Date().toISOString().split('T')[0];
      if (currentAttendanceDate === todayStr && currentAttendanceGrade === '10') {
        updateStudentTodayAttendance('P');
      }
      renderStudentDailyAttendanceTimeline();
      showToast(`Marked all students in ${getGradeLabel(currentAttendanceGrade)} as Present on ${currentAttendanceDate}`);
    }

    function markAllAbsent() {
      const activeList = getActiveAttendanceStudents();
      activeList.forEach(st => st.status = 'A');
      if (dailyAttendanceRecords[currentAttendanceDate]) {
        activeList.forEach(st => {
          dailyAttendanceRecords[currentAttendanceDate].records[st.roll] = 'A';
        });
        saveDailyAttendanceRecords();
      }
      if (currentAttendanceGrade === '10') {
        saveClassXStudents();
      }
      renderFacultyAttendanceRoster();
      renderDailyAttendanceHistory();

      const todayStr = new Date().toISOString().split('T')[0];
      if (currentAttendanceDate === todayStr && currentAttendanceGrade === '10') {
        updateStudentTodayAttendance('A');
      }
      renderStudentDailyAttendanceTimeline();
      showToast(`Marked all students in ${getGradeLabel(currentAttendanceGrade)} as Absent on ${currentAttendanceDate}`);
    }

    function saveAttendanceToERP() {
      const activeStudents = getActiveAttendanceStudents();
      const gradeLabel = getGradeLabel(currentAttendanceGrade);
      const btn = document.getElementById('btn-sync-attendance');
      if (btn) {
        btn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[16px]">progress_activity</span><span>Syncing ${gradeLabel} to uniRP Database...</span>`;
        btn.disabled = true;
      }

      setTimeout(() => {
        if (!dailyAttendanceRecords[currentAttendanceDate]) {
          dailyAttendanceRecords[currentAttendanceDate] = {
            date: currentAttendanceDate,
            records: {},
            submitted: false,
            submittedAt: null,
            submittedBy: null
          };
        }

        activeStudents.forEach(st => {
          dailyAttendanceRecords[currentAttendanceDate].records[st.roll] = st.status;
        });

        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        if (currentAttendanceGrade === '10') {
          dailyAttendanceRecords[currentAttendanceDate].submitted = true;
          dailyAttendanceRecords[currentAttendanceDate].submittedAt = `${currentAttendanceDate} ${timeStr}`;
          dailyAttendanceRecords[currentAttendanceDate].submittedBy = "Class Teacher";
        }
        dailyAttendanceRecords[currentAttendanceDate]['submitted_' + currentAttendanceGrade] = true;
        dailyAttendanceRecords[currentAttendanceDate]['submittedAt_' + currentAttendanceGrade] = `${currentAttendanceDate} ${timeStr}`;
        dailyAttendanceRecords[currentAttendanceDate]['submittedBy_' + currentAttendanceGrade] = "Class Teacher";

        saveDailyAttendanceRecords();
        if (currentAttendanceGrade === '10') {
          saveClassXStudents();
        }

        if (btn) {
          btn.innerHTML = `<span class="material-symbols-outlined text-[16px]">verified</span><span>${gradeLabel} Attendance Submitted & Locked â€¢ Synced</span>`;
          btn.className = "w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition active:scale-98 cursor-pointer";
          btn.disabled = false;
        }

        // Show in-place submission banner above the list
        const banner = document.getElementById('attendance-submitted-banner');
        if (banner) {
          banner.classList.remove('hidden');
          const bannerTime = document.getElementById('attendance-submitted-time');
          if (bannerTime) bannerTime.innerText = `Synchronized ${gradeLabel} with uniRP ERP Server for ${currentAttendanceDate} at ${timeStr} by Class Teacher`;
        }

        const statusPill = document.getElementById('faculty-attendance-status-pill');
        const statusText = document.getElementById('faculty-attendance-status-text');
        if (statusPill) statusPill.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 inline-flex items-center gap-1";
        if (statusText) statusText.innerText = "Submitted & Synced";

        renderDailyAttendanceHistory();
        renderStudentDailyAttendanceTimeline();

        // Populate submission modal details
        const total = activeStudents.length;
        const presentCount = activeStudents.filter(s => s.status === 'P').length;
        const absentStudents = activeStudents.filter(s => s.status === 'A').map(s => s.name);

        const headline = document.getElementById('modal-att-summary-headline');
        if (headline) {
          headline.innerText = `${presentCount} of ${total} Students Present (${Math.round((presentCount / total) * 100)}%) on ${currentAttendanceDate} (${gradeLabel})`;
        }

        const timeElem = document.getElementById('modal-att-timestamp');
        if (timeElem) {
          timeElem.innerText = `${currentAttendanceDate} â€¢ ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
        }

        const txElem = document.getElementById('modal-att-tx-id');
        if (txElem) {
          txElem.innerText = `BSS-ATT-${currentAttendanceDate.replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;
        }

        const absentSection = document.getElementById('modal-att-absent-section');
        const smsStatus = document.getElementById('modal-att-sms-status');
        if (absentStudents.length > 0) {
          if (absentSection) {
            absentSection.classList.remove('hidden');
            absentSection.innerHTML = `<b>${absentStudents.length} Absent:</b> ${absentStudents.join(', ')}<br/><span class="text-[10px] text-rose-600 dark:text-rose-400">Automated SMS absence alerts dispatched to guardians.</span>`;
          }
          if (smsStatus) smsStatus.innerText = `${absentStudents.length} SMS Alerts Dispatched`;
        } else {
          if (absentSection) absentSection.classList.add('hidden');
          if (smsStatus) smsStatus.innerText = "All Present â€¢ No SMS Alerts Needed";
        }

        openModal('modal-attendance-submit-success');

        let toastMsg = `${gradeLabel} attendance for ${currentAttendanceDate} synchronized successfully with uniRP ERP (All present)`;
        if (absentStudents.length > 0) {
          toastMsg = `${gradeLabel} attendance (${currentAttendanceDate}) synchronized with ERP (${absentStudents.length} absent: ${absentStudents.join(', ')}). SMS alerts dispatched.`;
        }
        showToast(toastMsg);
      }, 400);
    }

    function unlockAttendanceEdit() {
      const banner = document.getElementById('attendance-submitted-banner');
      if (banner) banner.classList.add('hidden');
      const gradeLabel = getGradeLabel(currentAttendanceGrade);
      const btn = document.getElementById('btn-sync-attendance');
      if (btn) {
        btn.innerHTML = `<span class="material-symbols-outlined text-[16px]">cloud_sync</span><span>Submit & Sync ${gradeLabel} Attendance to ERP</span>`;
        btn.className = "w-full py-2.5 bg-primary-container hover:bg-primary text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition active:scale-98 cursor-pointer";
      }
      if (dailyAttendanceRecords[currentAttendanceDate]) {
        if (currentAttendanceGrade === '10') {
          dailyAttendanceRecords[currentAttendanceDate].submitted = false;
        }
        dailyAttendanceRecords[currentAttendanceDate]['submitted_' + currentAttendanceGrade] = false;
        saveDailyAttendanceRecords();
      }
      const statusPill = document.getElementById('faculty-attendance-status-pill');
      const statusText = document.getElementById('faculty-attendance-status-text');
      if (statusPill) statusPill.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 inline-flex items-center gap-1";
      if (statusText) statusText.innerText = "Re-editing In Progress";

      renderDailyAttendanceHistory();
      showToast(`Attendance for ${gradeLabel} on ${currentAttendanceDate} unlocked for re-editing.`);
    }

    // Render Faculty Marks Entry Table
    function renderFacultyMarksTable() {
      const tbody = document.getElementById('faculty-marks-table-body');
      if (!tbody) return;

      tbody.innerHTML = classXStudents.map((st, idx) => {
        const total = (Number(st.theory) || 0) + (Number(st.internal) || 0);
        let grade = "A1";
        let gradeBadge = "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";

        if (total >= 91) { grade = "A1"; gradeBadge = "bg-emerald-500/10 text-emerald-700"; }
        else if (total >= 81) { grade = "A2"; gradeBadge = "bg-emerald-500/10 text-emerald-600"; }
        else if (total >= 71) { grade = "B1"; gradeBadge = "bg-blue-500/10 text-blue-700"; }
        else if (total >= 61) { grade = "B2"; gradeBadge = "bg-blue-500/10 text-blue-600"; }
        else if (total >= 51) { grade = "C1"; gradeBadge = "bg-amber-500/10 text-amber-700"; }
        else if (total >= 41) { grade = "C2"; gradeBadge = "bg-amber-500/10 text-amber-600"; }
        else if (total >= 33) { grade = "D"; gradeBadge = "bg-rose-500/10 text-rose-700"; }
        else { grade = "E"; gradeBadge = "bg-red-500/10 text-red-700"; }

        return `
          <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 text-xs">
            <td class="p-2 font-medium text-slate-800 dark:text-slate-200">
              <span class="font-bold block text-[11px]">${st.name}</span>
              <span class="font-mono text-[9px] text-slate-400">${st.roll} • ${st.studentClass || '10th Std'}</span>
            </td>
            <td class="p-2 text-center">
              <input type="number" min="0" max="80" value="${st.theory}"
                oninput="updateStudentMarks(${idx}, 'theory', this.value)"
                class="w-12 py-1 px-1 text-center font-bold font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs" />
            </td>
            <td class="p-2 text-center">
              <input type="number" min="0" max="20" value="${st.internal}"
                oninput="updateStudentMarks(${idx}, 'internal', this.value)"
                class="w-12 py-1 px-1 text-center font-bold font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs" />
            </td>
            <td class="p-2 text-center font-mono font-bold text-slate-900 dark:text-white" id="mark-total-${idx}">
              ${total}
            </td>
            <td class="p-2 text-center">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${gradeBadge}" id="mark-grade-${idx}">
                ${grade}
              </span>
            </td>
          </tr>
        `;
      }).join('');
    }

    function updateStudentMarks(idx, field, val) {
      const num = Math.max(0, Number(val) || 0);
      if (field === 'theory') classXStudents[idx].theory = Math.min(80, num);
      if (field === 'internal') classXStudents[idx].internal = Math.min(20, num);

      const total = classXStudents[idx].theory + classXStudents[idx].internal;
      let grade = "A1";
      if (total >= 91) grade = "A1";
      else if (total >= 81) grade = "A2";
      else if (total >= 71) grade = "B1";
      else if (total >= 61) grade = "B2";
      else if (total >= 51) grade = "C1";
      else if (total >= 41) grade = "C2";
      else if (total >= 33) grade = "D";
      else grade = "E";

      const totalEl = document.getElementById(`mark-total-${idx}`);
      const gradeEl = document.getElementById(`mark-grade-${idx}`);
      if (totalEl) totalEl.innerText = total;
      if (gradeEl) gradeEl.innerText = grade;
    }

    function saveClassMarks() {
      showToast('Pre-Board Mathematics Marks finalized & saved to examination database');
    }

    function broadcastTeacherNotice(e) {
      if (e) e.preventDefault();
      const title = document.getElementById('broadcast-title').value;
      showToast(`Notice "${title}" broadcasted to Class X-A portals & parents`);
    }

    // Staff Leave Application Handlers
    function openStaffLeaveModal() {
      openModal('modal-staff-leave');
    }

    function submitStaffLeave(e) {
      if (e) e.preventDefault();
      const leaveType = document.getElementById('staff-leave-type').value;
      const sub = document.getElementById('staff-leave-substitute').value;
      const fromDate = document.getElementById('staff-leave-from').value;

      if (leaveType.includes('Casual') && staffLeaveBalance.cl > 0) {
        staffLeaveBalance.cl--;
      } else if (leaveType.includes('Medical') && staffLeaveBalance.ml > 0) {
        staffLeaveBalance.ml--;
      } else if (leaveType.includes('Earned') && staffLeaveBalance.el > 0) {
        staffLeaveBalance.el--;
      }

      closeModal('modal-staff-leave');
      showToast(`Staff leave application (${leaveType}) routed to Principal for approval`);
    }

    // Add Student Handlers
    // Add Student Handlers (Multi-Grade aware)
    function openAddStudentModal() {
      const activeGradeLabel = getGradeLabel(currentAttendanceGrade);
      const activeList = getActiveAttendanceStudents();
      let nextNum = 10050;
      if (currentAttendanceGrade !== '10') {
        nextNum = (activeList.length + 1);
      } else {
        if (typeof classXStudents !== 'undefined' && classXStudents.length > 0) {
          classXStudents.forEach(s => {
            if (s.roll && s.roll.startsWith('BSS-')) {
              const numPart = parseInt(s.roll.replace('BSS-', ''), 10);
              if (!isNaN(numPart) && numPart >= nextNum) {
                nextNum = numPart + 1;
              }
            }
          });
        }
      }
      const rollInput = document.getElementById('new-student-roll');
      if (rollInput) {
        if (currentAttendanceGrade === 'lkg') rollInput.value = 'BSS-LKG' + String(nextNum).padStart(2, '0');
        else if (currentAttendanceGrade === 'ukg') rollInput.value = 'BSS-UKG' + String(nextNum).padStart(2, '0');
        else if (currentAttendanceGrade !== '10') rollInput.value = 'BSS-' + currentAttendanceGrade + String(nextNum).padStart(2, '0');
        else rollInput.value = 'BSS-' + nextNum;
      }

      const nameInput = document.getElementById('new-student-name');
      if (nameInput) nameInput.value = '';

      const classInputEl = document.getElementById('new-student-class');
      if (classInputEl) classInputEl.value = activeGradeLabel;

      const theoryInput = document.getElementById('new-student-theory');
      if (theoryInput) theoryInput.value = '70';

      const internalInput = document.getElementById('new-student-internal');
      if (internalInput) internalInput.value = '18';

      const parentInput = document.getElementById('new-student-parent');
      if (parentInput) parentInput.value = '';

      const phoneInput = document.getElementById('new-student-phone');
      if (phoneInput) phoneInput.value = '';

      openModal('modal-add-student');
    }

    function submitAddStudent(e) {
      if (e) e.preventDefault();
      const nameInput = document.getElementById('new-student-name');
      const rollInput = document.getElementById('new-student-roll');
      const classInput = document.getElementById('new-student-class');
      const statusInput = document.getElementById('new-student-status');
      const theoryInput = document.getElementById('new-student-theory');
      const internalInput = document.getElementById('new-student-internal');
      const parentInput = document.getElementById('new-student-parent');
      const phoneInput = document.getElementById('new-student-phone');

      const name = nameInput ? nameInput.value.trim() : '';
      const roll = rollInput ? rollInput.value.trim() : '';
      const studentClass = classInput ? classInput.value : getGradeLabel(currentAttendanceGrade);
      const status = statusInput ? statusInput.value : 'P';
      const theory = theoryInput ? Math.min(80, Math.max(0, Number(theoryInput.value) || 0)) : 72;
      const internal = internalInput ? Math.min(20, Math.max(0, Number(internalInput.value) || 0)) : 18;
      const parentName = parentInput ? parentInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';

      if (!name) {
        showToast('Please enter the student\'s full name');
        return;
      }
      if (!roll) {
        showToast('Please enter roll number');
        return;
      }

      const activeList = getActiveAttendanceStudents();
      const exists = activeList.some(s => (s.roll || '').toLowerCase() === roll.toLowerCase());
      if (exists) {
        showToast(`Roll number "${roll}" already exists in ${studentClass}!`);
        return;
      }

      const newStudent = {
        roll: roll,
        name: name,
        fullName: name,
        studentClass: studentClass,
        status: status,
        theory: theory,
        internal: internal,
        parentName: parentName || 'Father',
        phone: phone || '+91 98450 00000',
        dob: "14 August 2008",
        blood: "O +ve",
        password: (typeof getStudentDefaultPassword === 'function') ? getStudentDefaultPassword({ name, roll }) : 'student@123'
      };

      if (currentAttendanceGrade === '10') {
        classXStudents.push(newStudent);
        saveClassXStudents();
        renderFacultyMarksTable();
        populateAllStudentSwitchers();
        switchActiveStudent(newStudent.roll);
      } else {
        if (!MULTI_GRADE_STUDENTS[currentAttendanceGrade]) {
          MULTI_GRADE_STUDENTS[currentAttendanceGrade] = [];
        }
        MULTI_GRADE_STUDENTS[currentAttendanceGrade].push(newStudent);
      }

      renderFacultyAttendanceRoster();
      renderDailyAttendanceHistory();

      closeModal('modal-add-student');
      showToast(`Student "${name}" (${roll}) enrolled in ${studentClass}!`);
    }

    function deleteStudent(idx) {
      const activeList = getActiveAttendanceStudents();
      if (!activeList || idx < 0 || idx >= activeList.length) return;
      const student = activeList[idx];
      if (confirm(`Remove student "${student.name}" (${student.roll}) from roster?`)) {
        const deletedRoll = student.roll;
        activeList.splice(idx, 1);
        if (currentAttendanceGrade === '10') {
          saveClassXStudents();
          renderFacultyMarksTable();
          populateAllStudentSwitchers();
          if (studentProfile && studentProfile.roll === deletedRoll && classXStudents.length > 0) {
            switchActiveStudent(classXStudents[0].roll);
          }
        }
        renderFacultyAttendanceRoster();
        renderDailyAttendanceHistory();
        showToast(`Student "${student.name}" removed from roster.`);
      }
    }

    // =========================================================================
    // STUDENT PROFILE MANAGEMENT & LIVE SYNCHRONIZATION
    // =========================================================================
    const DEFAULT_STUDENT_PROFILE = {
      fullName: "Aarav Mallikarjun Patil",
      callingName: "Aarav M. Patil",
      roll: "BSS-10042",
      studentClass: "10th Std",
      admn: "BSS/2021/408",
      dob: "14 August 2008",
      blood: "O +ve",
      parentName: "Mr. Mahesh Patil",
      parentPhone: "+91 98450 12345"
    };

    let studentProfile = Object.assign({}, DEFAULT_STUDENT_PROFILE);
    window.studentProfile = studentProfile;

    function initStudentProfile() {
      try {
        const saved = localStorage.getItem('bss_student_profile');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed === 'object') {
            studentProfile = Object.assign({}, DEFAULT_STUDENT_PROFILE, parsed);
          }
        }
      } catch (e) {
        console.warn('Could not read student profile from localStorage:', e);
      }
      window.studentProfile = studentProfile;
      applyStudentProfileUI();
    }

    function populateAllStudentSwitchers() {
      // 1 Parent is strictly locked to their own ward (no student selector in parent part)
      const switcherIds = [];

      const curRoll = (typeof studentProfile !== 'undefined' && studentProfile.roll) ? studentProfile.roll : 'BSS-10042';

      switcherIds.forEach(id => {
        const sel = document.getElementById(id);
        if (sel && typeof classXStudents !== 'undefined') {
          sel.innerHTML = classXStudents.map(st => {
            const isSel = st.roll === curRoll ? 'selected' : '';
            return `<option value="${st.roll}" ${isSel}>${st.name} (${st.roll})</option>`;
          }).join('');
        }
      });

      // Update login demo student pill text
      const loginPillName = document.getElementById('login-demo-student-name');
      if (loginPillName && typeof studentProfile !== 'undefined') {
        loginPillName.innerText = studentProfile.callingName || 'Student';
      }
    }

    function switchActiveStudent(roll) {
      if (!roll || typeof classXStudents === 'undefined') return;
      const target = classXStudents.find(s => s.roll === roll);
      if (!target) return;

      studentProfile.callingName = target.name;
      studentProfile.fullName = target.fullName || target.name;
      studentProfile.roll = target.roll;
      studentProfile.studentClass = target.studentClass || '10th Std';
      const rollNum = target.roll.replace('BSS-', '');
      studentProfile.admn = target.admn || `BSS/2021/${rollNum}`;
      studentProfile.dob = target.dob || "14 August 2008";
      studentProfile.blood = target.blood || "O +ve";
      studentProfile.parentName = target.parentName || `Mr. ${target.name.split(' ').pop()}`;
      studentProfile.parentPhone = target.phone || "+91 98450 12345";
      studentProfile.parentContact = `${studentProfile.parentPhone} (${studentProfile.parentName})`;

      window.studentProfile = studentProfile;

      try {
        localStorage.setItem('bss_student_profile', JSON.stringify(studentProfile));
      } catch (err) {
        console.warn('Could not persist student profile to localStorage:', err);
      }

      applyStudentProfileUI();
      populateAllStudentSwitchers();
      showToast(`Active Student set to "${target.name}" (${target.roll})`);
    }

    function applyStudentProfileUI() {
      const curClass = studentProfile.studentClass || '10th Std';

      // 1. Dashboard
      const dashName = document.getElementById('dashboard-student-name');
      if (dashName) dashName.innerText = studentProfile.callingName;
      const dashRoll = document.getElementById('dashboard-student-roll');
      if (dashRoll) dashRoll.innerText = `Roll: ${studentProfile.roll}`;
      const dashClass = document.getElementById('dashboard-student-class');
      if (dashClass) dashClass.innerText = curClass;

      // 2. Timetable
      const ttName = document.getElementById('timetable-student-name');
      if (ttName) ttName.innerText = studentProfile.callingName;
      const ttRoll = document.getElementById('timetable-student-roll');
      if (ttRoll) ttRoll.innerText = studentProfile.roll;

      // 3. Student Profile View
      const profName = document.getElementById('profile-display-name');
      if (profName) profName.innerText = studentProfile.fullName;
      const profRoll = document.getElementById('profile-display-roll');
      if (profRoll) profRoll.innerText = studentProfile.roll;
      const profClass = document.getElementById('profile-display-class');
      if (profClass) profClass.innerText = curClass;
      const profDossierClass = document.getElementById('profile-dossier-class');
      if (profDossierClass) profDossierClass.innerText = curClass;
      const profAdmn = document.getElementById('profile-display-admn');
      if (profAdmn) profAdmn.innerText = `Admission ID: ${studentProfile.admn}`;
      const profDob = document.getElementById('profile-dossier-dob');
      if (profDob) profDob.innerText = studentProfile.dob;
      const profBlood = document.getElementById('profile-dossier-blood');
      if (profBlood) profBlood.innerText = studentProfile.blood;
      const profParent = document.getElementById('profile-dossier-parent');
      if (profParent) profParent.innerText = `${studentProfile.parentPhone} (${studentProfile.parentName})`;

      // 4. Parent Portal
      const pParentName = document.getElementById('parent-guardian-name');
      if (pParentName) pParentName.innerText = studentProfile.parentName;
      const pWardName = document.getElementById('parent-ward-name');
      if (pWardName) pWardName.innerText = studentProfile.callingName;
      const pWardRollLabel = document.getElementById('parent-ward-roll-label');
      if (pWardRollLabel) pWardRollLabel.innerText = `${curClass} • Roll ${studentProfile.roll}`;
      const pBannerName = document.getElementById('parent-ward-banner-name');
      if (pBannerName) pBannerName.innerText = studentProfile.callingName;
      const pBannerRoll = document.getElementById('parent-ward-banner-roll');
      if (pBannerRoll) pBannerRoll.innerText = studentProfile.roll;
      const pBannerId = document.getElementById('parent-ward-banner-id');
      if (pBannerId) pBannerId.innerText = studentProfile.admn;
      const pFeesName = document.getElementById('parent-fees-student-name');
      if (pFeesName) pFeesName.innerText = studentProfile.callingName;

      // 5. Hall Ticket Modal
      const htName = document.getElementById('hallticket-student-name');
      if (htName) htName.innerText = studentProfile.callingName;
      const htRoll = document.getElementById('hallticket-student-roll');
      if (htRoll) htRoll.innerText = studentProfile.roll;

      // 6. Attendance Compliance Certificate Modal
      const certName = document.getElementById('attcert-student-name');
      if (certName) certName.innerText = studentProfile.callingName;
      const certRoll = document.getElementById('attcert-student-roll');
      if (certRoll) certRoll.innerText = studentProfile.admn;

      // 7. Payment Modal
      const payName = document.getElementById('paymodal-student-name');
      if (payName) payName.innerText = `${studentProfile.callingName} (${curClass})`;

      // 8. Synchronize with Faculty Class X Register
      if (typeof classXStudents !== 'undefined' && classXStudents.length > 0) {
        let targetIdx = classXStudents.findIndex(s => s.roll === studentProfile.roll);
        if (targetIdx !== -1) {
          classXStudents[targetIdx].name = studentProfile.callingName;
          classXStudents[targetIdx].fullName = studentProfile.fullName;
          classXStudents[targetIdx].roll = studentProfile.roll;
          classXStudents[targetIdx].parentName = studentProfile.parentName;
          classXStudents[targetIdx].phone = studentProfile.parentPhone;
          classXStudents[targetIdx].blood = studentProfile.blood;
          classXStudents[targetIdx].dob = studentProfile.dob;
        }

        if (typeof renderFacultyAttendanceRoster === 'function') renderFacultyAttendanceRoster();
        if (typeof renderFacultyMarksTable === 'function') renderFacultyMarksTable();
      }
      if (typeof renderStudentDailyAttendanceTimeline === 'function') renderStudentDailyAttendanceTimeline();
    }

    function openEditStudentProfileModal() {
      const fullInput = document.getElementById('edit-student-fullname');
      const callInput = document.getElementById('edit-student-callingname');
      const rollInput = document.getElementById('edit-student-roll');
      const classInput = document.getElementById('edit-student-class');
      const admnInput = document.getElementById('edit-student-admn');
      const dobInput = document.getElementById('edit-student-dob');
      const bloodInput = document.getElementById('edit-student-blood');
      const parentInput = document.getElementById('edit-student-parent');
      const phoneInput = document.getElementById('edit-student-phone');

      if (fullInput) fullInput.value = studentProfile.fullName || '';
      if (callInput) callInput.value = studentProfile.callingName || '';
      if (rollInput) rollInput.value = studentProfile.roll || '';
      if (classInput) {
        const curCls = studentProfile.studentClass || '10th Std';
        if (Array.from(classInput.options).some(o => o.value === curCls)) {
          classInput.value = curCls;
        } else if (curCls.includes('10') || curCls.includes('X')) {
          classInput.value = '10th Std';
        } else {
          classInput.value = curCls;
        }
      }
      if (admnInput) admnInput.value = studentProfile.admn || '';
      if (dobInput) dobInput.value = studentProfile.dob || '';
      if (bloodInput) bloodInput.value = studentProfile.blood || 'O +ve';
      if (parentInput) parentInput.value = studentProfile.parentName || '';
      if (phoneInput) phoneInput.value = studentProfile.parentPhone || '';

      openModal('modal-edit-profile');
    }

    function saveStudentProfile(e) {
      if (e) e.preventDefault();
      const fullInput = document.getElementById('edit-student-fullname');
      const callInput = document.getElementById('edit-student-callingname');
      const rollInput = document.getElementById('edit-student-roll');
      const classInput = document.getElementById('edit-student-class');
      const admnInput = document.getElementById('edit-student-admn');
      const dobInput = document.getElementById('edit-student-dob');
      const bloodInput = document.getElementById('edit-student-blood');
      const parentInput = document.getElementById('edit-student-parent');
      const phoneInput = document.getElementById('edit-student-phone');

      const fullName = fullInput ? fullInput.value.trim() : '';
      const callingName = callInput ? callInput.value.trim() : '';
      const roll = rollInput ? rollInput.value.trim() : '';
      const studentClass = classInput ? classInput.value : (studentProfile.studentClass || '10th Std');
      const admn = admnInput ? admnInput.value.trim() : '';
      const dob = dobInput ? dobInput.value.trim() : '';
      const blood = bloodInput ? bloodInput.value : 'O +ve';
      const parentName = parentInput ? parentInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';

      if (!fullName) {
        showToast('Please enter the full legal name');
        return;
      }
      if (!callingName) {
        showToast('Please enter display / calling name');
        return;
      }
      if (!roll) {
        showToast('Please enter roll number');
        return;
      }

      studentProfile.fullName = fullName;
      studentProfile.callingName = callingName;
      studentProfile.roll = roll;
      studentProfile.studentClass = studentClass;
      studentProfile.admn = admn || studentProfile.admn;
      studentProfile.dob = dob || studentProfile.dob;
      studentProfile.blood = blood;
      studentProfile.parentName = parentName || studentProfile.parentName;
      studentProfile.parentPhone = phone || studentProfile.parentPhone;
      studentProfile.parentContact = `${studentProfile.parentPhone} (${studentProfile.parentName})`;

      window.studentProfile = studentProfile;

      // Update matching student in classXStudents as well
      if (typeof classXStudents !== 'undefined') {
        const stIndex = classXStudents.findIndex(s => s.roll === roll);
        if (stIndex !== -1) {
          classXStudents[stIndex].name = callingName;
          classXStudents[stIndex].fullName = fullName;
          classXStudents[stIndex].studentClass = studentClass;
          classXStudents[stIndex].parentName = parentName;
          classXStudents[stIndex].phone = phone;
          classXStudents[stIndex].blood = blood;
          classXStudents[stIndex].dob = dob;
        } else if (classXStudents.length > 0) {
          classXStudents[0].name = callingName;
          classXStudents[0].fullName = fullName;
          classXStudents[0].studentClass = studentClass;
          classXStudents[0].roll = roll;
          classXStudents[0].parentName = parentName;
          classXStudents[0].phone = phone;
          classXStudents[0].blood = blood;
          classXStudents[0].dob = dob;
        }
        saveClassXStudents();
        renderFacultyAttendanceRoster();
        renderFacultyMarksTable();
      }

      try {
        localStorage.setItem('bss_student_profile', JSON.stringify(studentProfile));
      } catch (err) {
        console.warn('Unable to persist to localStorage:', err);
      }

      applyStudentProfileUI();
      populateAllStudentSwitchers();
      closeModal('modal-edit-profile');
      showToast(`Student profile updated to "${callingName}"!`);
    }

    function resetStudentProfile() {
      if (confirm('Reset student name and profile back to original default (Aarav Mallikarjun Patil)?')) {
        studentProfile = Object.assign({}, DEFAULT_STUDENT_PROFILE);
        classXStudents = JSON.parse(JSON.stringify(DEFAULT_CLASS_X_STUDENTS));
        window.studentProfile = studentProfile;
        window.classXStudents = classXStudents;

        try {
          localStorage.removeItem('bss_student_profile');
          localStorage.removeItem('bss_class_x_students');
        } catch (err) { }

        applyStudentProfileUI();
        populateAllStudentSwitchers();
        renderFacultyAttendanceRoster();
        renderFacultyMarksTable();
        closeModal('modal-edit-profile');
        showToast('Student profile reset to default records.');
      }
    }

    // Live Real-Time Date & Clock Engine
    function startLiveClockAndDates() {
      const daysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      function updateClock() {
        const now = new Date();
        const dayIdx = now.getDay();
        const dateNum = now.getDate();
        const monthIdx = now.getMonth();
        const year = now.getFullYear();

        const dayName = daysFull[dayIdx];
        const dayShort = daysShort[dayIdx];
        const monthName = monthsShort[monthIdx];
        const monthLong = monthsFull[monthIdx];

        let hours = now.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const pad = (n) => String(n).padStart(2, '0');
        const timeStr = `${pad(hours)}:${pad(now.getMinutes())}:${pad(now.getSeconds())} ${ampm}`;
        const dateStr = `${dayShort}, ${dateNum} ${monthName} ${year}`;
        const fullDateStr = `${dayName}, ${dateNum} ${monthLong} ${year}`;

        // Desktop top bar clock
        const desktopClock = document.getElementById('desktop-live-clock');
        if (desktopClock) {
          desktopClock.innerText = `${dateStr} • ${timeStr}`;
        }

        // Login screen clock badge
        const loginClock = document.getElementById('login-live-clock');
        if (loginClock) {
          loginClock.innerText = `Live: ${dateStr} • ${timeStr}`;
        }

        // Student Dashboard Header
        const studentClock = document.getElementById('student-header-live-time');
        if (studentClock) {
          studentClock.innerText = `${dayShort}, ${dateNum} ${monthName} • ${timeStr}`;
        }

        // Today's Attendance Status date
        const attDate = document.getElementById('live-attendance-today-date');
        if (attDate) {
          attDate.innerText = `${dayName}, ${dateNum} ${monthName} • Class X-A`;
        }

        // Today's Schedule date
        const schedDate = document.getElementById('live-schedule-today-date');
        if (schedDate) {
          schedDate.innerText = `${dayName}, ${dateNum} ${monthName} • 6 Periods scheduled`;
        }

        // Attendance Hub date
        const attHubDate = document.getElementById('live-att-hub-today-date');
        if (attHubDate) {
          attHubDate.innerText = `${dayName}, ${dateNum} ${monthName} • Class X-A`;
        }

        // Parent Portal dates
        const parentDate = document.getElementById('live-parent-today-date');
        if (parentDate) {
          parentDate.innerText = `Today • ${fullDateStr} • ${timeStr}`;
        }
        const parentProg = document.getElementById('live-parent-progress-day');
        if (parentProg) {
          parentProg.innerText = `Today's Academic Progress (${dayName})`;
        }
      }

      // Synchronize Timetable Week Day Numbers with current week
      function syncCurrentWeekDays() {
        const now = new Date();
        const currentDayIdx = now.getDay();
        const currentMon = new Date(now);
        const distToMon = (currentDayIdx === 0 ? -6 : 1 - currentDayIdx);
        currentMon.setDate(now.getDate() + distToMon);

        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        days.forEach((d, idx) => {
          const btn = document.getElementById('day-btn-' + d);
          if (btn) {
            const dateObj = new Date(currentMon);
            dateObj.setDate(currentMon.getDate() + idx);
            const dNum = dateObj.getDate();
            const spanNum = btn.querySelector('.text-sm');
            if (spanNum) {
              const isToday = (idx + 1 === currentDayIdx);
              spanNum.innerText = (isToday ? `${d} ${dNum}` : `${dNum}`);
            }
          }
        });
      }

      const now = new Date();
      const currentDayIdx = now.getDay();
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const todayCode = days[currentDayIdx];
      const validDay = (typeof timetableData !== 'undefined' && timetableData[todayCode]) ? todayCode : 'Mon';

      activeTimetableDay = validDay;
      syncCurrentWeekDays();
      selectDay(validDay);

      updateClock();
      setInterval(updateClock, 1000);
    }

    // Initialization
    window.addEventListener('DOMContentLoaded', () => {
      initClassXStudents();
      if (typeof initStaffMembersList === 'function') initStaffMembersList();
      if (typeof initDailyAttendance === 'function') initDailyAttendance();
      startLiveClockAndDates();
      renderDashboardTodaySchedule();
      renderStaffRegister('all');
      if (typeof setAttendanceDateToday === 'function') setAttendanceDateToday();
      renderFacultyAttendanceRoster();
      renderFacultyMarksTable();
      initStudentProfile();
      populateAllStudentSwitchers();
      if (typeof renderStudentDailyAttendanceTimeline === 'function') renderStudentDailyAttendanceTimeline();

      // Restore active faculty profile if logged in previously
      try {
        const savedStaffId = localStorage.getItem('bss_logged_in_staff_id');
        if (savedStaffId && typeof staffMembersList !== 'undefined') {
          const found = staffMembersList.find(s => (s.id || '').toLowerCase() === savedStaffId.toLowerCase());
          if (found && typeof renderFacultyHeroProfile === 'function') {
            renderFacultyHeroProfile(found);
          }
        }
      } catch (e) { }

      // Restore saved credentials if remember me was enabled
      try {
        const savedId = localStorage.getItem('bss_remember_id');
        const savedRole = localStorage.getItem('bss_remember_role');
        if (savedRole && typeof selectRole === 'function') {
          selectRole(savedRole);
        } else if (typeof selectRole === 'function') {
          selectRole('student');
        }
        if (savedId) {
          const idInput = document.getElementById('enrollment-id');
          if (idInput) idInput.value = savedId;
        }
        // Initialize dynamic PIN badge for default or restored ID/roll number
        const curRollInput = document.getElementById('enrollment-id');
        if (curRollInput && typeof handleLoginIdentifierInput === 'function') {
          handleLoginIdentifierInput(curRollInput.value);
        }
      } catch (e) { }
    });
