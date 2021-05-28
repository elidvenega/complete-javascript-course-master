'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   const firstName = "Mike";

//   function printAge() {
//     const output = `${firstName}, you are ${age}, 
//         born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       let str = `Oh, and you're a millenial, 
//           ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //add(2, 3);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// //console.log(age);
// // printAge()

// console.log(hello);

// morning();

// var hello = "Have a good day";

// console.log(hello);
// console.log(hello);

// function morning() {
//   console.log("Hello good morning");
// }


// Hoisting
// console.log(me);
// console.log(job);
// console.log(year);



var me = 'Jonas';
var job = 'teacher';
const year = 1991;

// functions 
console.log(addDecl(2,3));
//console.log(addExpr(2,3));
console.log(addArrow);
//console.log(addArrow(2,3));

function addDecl(a,b) {
  return a + b;
}

const addExpr = function(a,b) {
  return a + b;
}

var addArrow = (a,b) => a +b;

// Example
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);








































