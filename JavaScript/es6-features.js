//ES6+ (ECMAScript) features

//Array destructuring

// const students = ['abdul', 'ahmad', 'al-amin'];

// // const firstStudent = students[0];
// // const secStudent = students[1];
// // const thirdStudent = students[2];

// // console.log(firstStudent);
// // console.log(secStudent);
// // console.log(thirdStudent);

// const [firstStudent,secStudent, thirdStudent] = students;


// console.log(firstStudent);
// console.log(secStudent);
// console.log(thirdStudent);

// const colors = ['red', 'blue', 'yello'];

// const [firstColor, ,thirdColor] = colors;

// console.log(firstColor);
// console.log(thirdColor);


// Object destructuring

// const students = {
//     name: 'musa',
//     age: 20,
//     course: "computer science"
// };


// // console.log(students.name);
// // console.log(students.age);
// // console.log(students.course);

// const {name, age,course} = students;

// console.log(name);
// console.log(age);
// console.log(course);

// const person = {
//     name: 'aisha',
//     age: 24
// }

// const {name: studentName, age: studentAge} = person;

// console.log(studentName);

// Funtions destructuring

// const user = {
//     name: 'musa',
//     role: 'Webdeveloper'
// }

// function introduceUser ({name, role}) {
//     console.log(`my name is ${name}`);
//     console.log(`my role is ${role}`);
// }

// introduceUser(user);

//Spread Operator

// const frontend = ['HTMl', 'CSS', 'Javascript']

// const backend = ['Node.js', 'PosgreSql'];

// // const allSkills = [frontend, backend];

// const allSkills = [...frontend, ...backend];

// console.log(allSkills);

// const fruits = ['mango', 'banana', 'orange'];

// const updateFruit = [...fruits, 'apple', 'watermelon'];

// console.log(updateFruit);

// const originalNumbers = [10, 30, 40, 50];

// const copiedNumbers = [...originalNumbers];

// console.log(copiedNumbers);

// const original = [1,2,3];

// // const copied = origanal;
// const copied = [...original];

// copied.push(4);


// console.log(original);
// console.log(copied);

const student = {
    name: 'abdul',
    age: 24
};



