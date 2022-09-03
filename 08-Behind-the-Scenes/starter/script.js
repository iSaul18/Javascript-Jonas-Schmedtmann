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
console.log(addDecla(2,3));
// console.log(addExpre(2,3));
// console.log(addArrow(2,3));

function addDecla(a, b) {
    return a + b
}

const addExpre = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// EXAMPLE
console.log(undefined);
if (!numProducts) deleteShopping();
var numProducts = 10;

function deleteShopping() {
    console.log('All produts deleted');
}

// -------------------------------------------------------
var x = 1;
let y = 2;
const z = 3;