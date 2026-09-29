
// // objects - store things about a thing with its key value pair 

// const student = {
//     name: 'Abdul',
//     age: 14,
//     course: 'Computer science'
// };

// console.log(student.name);
// const property = 'name'
// console.log(student[property]);

// // to change a property value 
//  student.age = 20;

//  console.log(student);

//  student.city = 'Jalingo';

//  console.log(student);


const person = {
    name: 'Musa',
    greet: function() {
        console.log(`Hello, how are you doing ${this.name}`)
    }
}

person.greet();