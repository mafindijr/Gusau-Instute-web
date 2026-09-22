
// // Funtion is a reusable piece of code that do something

// function  performAction(action) {

//    return console.log(`${action} successfull`);


// }


// performAction('payment');
// performAction('Withdrawal');
// performAction('name updated');


// function add(a , b) {

//     return a + b;
// }

// // console.log(calculate(3 , 4));

// const result = add(3, 4);

// console.log(result);

// const addition = (a, b) => {

// };

// const greet = function() {

// };

// const add = (a,b) => a + b;

// add()

//Array - is a data structure thats store multiple values 

// const fruits = ['apple', 'banana', 'mango'];

// console.log(fruits[0]);
// console.log(fruits[2]);

// to determine the length of an is by using .length method

// console.log(`The lenght of this array is ${fruits.length}`);

// fruits.push('watermelon');

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// forEach - is an array method the loops through yout items in an array

// fruits.forEach((fruit) => {
//     console.log(fruit);
// });

// map() - creates new array by transforming each item

// const numbers = [1, 2, 3];

// const double = numbers.map((number) => {
//     return number * 2;
// });

// console.log(double);


// fileter() - it creates a new array containig only items that satisfy a conditon

const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter((number) => {
    return number >= 20;
});

console.log(result);