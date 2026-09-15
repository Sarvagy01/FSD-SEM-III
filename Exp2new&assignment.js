// //15-09-2026
// const fs=require('fs');
// //creat /write
// fs.writeFileSync('student.txt','B.Tech Node.js Lab');

// //Read
// const data=fs.readFileSync('student.txt','utf-8')

// console.log(data);

// //write
// fs.writeFileSync('student.txt','Name: Sarvagy Parashar\nSubjects:Full Stack Develpopmwnt');

// console.log('File created successfully');

// //updated

// fs.appendFileSync('student.txt','\nExperiment2 completed');
// console.log('File updated');

// console.log(data);

//Assignment
const fs = require('fs');

fs.writeFileSync(
    'student.txt',
    'Name: Sarvagy Parashar\n' +
    'Roll Number: 25\n' +
    'Branch: CSE\n' +
    'Semester: III'
);

const data = fs.readFileSync('student.txt', 'utf-8');

console.log(data);

fs.appendFileSync(
    'student.txt',
    '\nSubject: Full Stack Development\n' +
    'Marks: 85%\n' +
    'Attendance: 92%'
);

const data2 = fs.readFileSync('student.txt', 'utf-8');

console.log(data2);
