// ---------------------------------------------------
// SCOPE
// ---------------------------------------------

// 'use strict';

// function calAge(birthyear) {
//     const age = 2037 * birthyear
    
//     function printAge() {
//         let output = `${firstName}, You are ${age}, born in ${birthyear} `
//         console.log(output);

//         if (birthyear >= 1981 && birthyear <= 1996) {
//             var millenual = true;
//             // Create new variable with same name as oute scope's variable
//             const str = `Oh, and youre a millenual, ${firstName}`
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }

//             // Reasssigning outer scope's variable
//             output = 'new rawtta'
//             console.log(output);
//         }
//         // console.log(millenual);
//         // add(2, 3)
//          console.log(output);
//     }
//     printAge();
//     return age;
// }

// const firstName = 'jonas';
// calAge(1991);

// printAge();

// ---------------------------------------------------
// TDZ = TEMPORAL DEAD ZONE ---------------------------------------------

// console.log(me);

// var me = 'jonas';
// let job = 'teacher';
// const year = 1991;
// console.log(addDecla(2,3));
// console.log(addExpre(2,3));
// console.log(addArrow(2,3));

// function addDecla(a, b) {
//     return a + b
// }

// const addExpre = function (a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// // EXAMPLE
// console.log(undefined);
// if (!numProducts) deleteShopping();
// var numProducts = 10;

// function deleteShopping() {
//     console.log('All produts deleted');
// }

// // -------------------------------------------------------
// var x = 1;
// let y = 2;
// const z = 3;


// const addExpre = function (a, b) {
//   return a + b;
// };

// ----------------------------------------------
// THIS KEY WORD
// 'use strict'

// // console.log(this);

// const calAge = function (birth) {
//     console.log(2037 - birth);
//     // console.log(this);
// };

// calAge(1991);
// // --------------
// const calAgeArrow = birth => {
//   console.log(2037 - birth);
// //   console.log(this);
// };

// calAgeArrow(1991);
// // ------------------------

// const jonas = {
//     year: 1991,
//     calAge: function () {
//         // console.log(this);  
//         console.log(2037 - this.year);
//     },
// }

// jonas.calAge();
// // ----------------------------

// const matilda = {
//     year: 2017,

// }

// matilda.calAge = jonas.calAge;
// matilda.calAge();

// ------------------------------
// 'use strict';

// const jonas = {
//     firstName: 'jonas',
//     year: 1991,
//     calAge: function () {
//         // console.log(this);  
//         console.log(2037 - this.year);

//         // Solution 1 (This en dos niveles de funciones)
//         // const self = this;
//         // const isMillenial = function () {
//         //     console.log('Es millenial?',self.year >= 1981 && self.year <= 1996);
//         // }

//         // Solution 2
//         const isMillenial = () => {
//           console.log('Es millenial?', this.year >= 1981 && this.year <= 1996);
//         };


//         isMillenial();
//     },

//     greet: function () {
//         console.log(`Hey ${this.firstName}`);
//     },
// }
// jonas.calAge();
// jonas.greet()
// console.log(jonas);

// // Arguments keyword
// const addExpre = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

// addExpre(2, 5)

// var addARoow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };

// addARoow(2,5,8)

// ------------------------------
// Primitives vs Literals
// ----------------
'use strict';

let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'jonas',
    age: 30,
}

const friend = me;

friend.age = 18;

console.log(me);
console.log(friend);


// Primitives types
let lastName = 'willians';
let oldlastName = lastName;
lastName = 'david';
console.log(lastName, oldlastName);

// Reference types
const jessica = {
    name: 'jessica',
    lastName: 'Willians',
    age: 27,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'
console.log(`antes : ${jessica.lastName}`);
console.log(`despues : ${marriedJessica.lastName}`);


// Copy objetcs
const jessica2 = {
  name: 'jessica',
  lastName: 'Willians',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis'

console.log(`antes : ${jessica2.lastName}`);
console.log(`despues : ${jessicaCopy.lastName}`);