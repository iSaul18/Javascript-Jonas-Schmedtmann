// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I Can Drive :D ');

// const inferface = 'Audio';
// const private = 351;

//  ***************************************

// function  logger() {
//     console.log('My name is Jonas');
// }

// // Calling / Runing / Invoking function
// logger();
// logger();
// logger();

// function fruitProccesor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juiece with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const fruta = 10;

// const frutaJuice = fruitProccesor(5, 0);
// console.log(frutaJuice);

// const appleOrangeJuice = fruitProccesor(2, 5);
// console.log(appleOrangeJuice);

// *******************************

// function calAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calAge1(1991);
// console.log(age1);

// const calAge2 = function (birthyear) {
//     return 2037 - birthyear - sopa;
// }

// const age2 = calAge2(1991);

// console.log(age1, age2);

// ***********************************

// 'user strict'

// const calAge2 = function (birthyear) {
//     return 2037 - birthyear - sopa;
// }

// const calAge3 = (birthYear) => 2037 - birthYear;
// age3 = calAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} se retirará en ${retirement} years`;
// }

// let retiro = yearsUntilRetirement(1991, 'saul');
// console.log(retiro);

// retiro = yearsUntilRetirement(1980, 'bob');
// console.log(retiro);

// *******************************************************

// 'user strict'

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProccesor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     console.log(applePieces, orangesPieces);

//     const juice = `Juiece with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;

//     return juice;
// }

// const procesoFruit = fruitProccesor(2,3);
// console.log(fruitProccesor(2,3));

// *****************************************

// 'user strict'

// const calAge = function (years) {
//     return 2037 - years;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calAge(birthYear);
//     let retirement = 65 - age;

//     if (retirement > 1) {
//         retirement = `Faltan ${retirement} años para que ${firstName} pueda retirarse`;
//     } else if (retirement === 1 ){
//         retirement = `Falta 1 año para que ${firstName} se retire`;
//     } else if (retirement === 0) {
//         retirement = `${firstName} ya se retiró este año`
//     } else if (retirement < 0) {
//         retirement = retirement - (retirement * 2);

//         retirement = `${firstName} ya se retiro hace ${retirement} años`
//     }
//     return retirement;

// //     return `${firstName} se retirará en ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1970, 'mike'));

// **********************************

// 'user strict';

// // Test 1

// const calAverage = (a, b, c) => (a + b + c) / 3;

// let promTeamDolphins = calAverage(65, 54, 49);
// let promTeamKoalas = calAverage(44, 23 ,71);

// const checkWinner = function(avgDolphins, avgKoalas) {

//     if (avgDolphins >= avgKoalas *2) {
//         return `Team Dolphins Ganó (${avgDolphins} vs ${avgKoalas})`;

//     } else if (avgKoalas >= avgDolphins *2) {
//         return `Tema Koalas Ganó (${avgKoalas} vs ${avgDolphins} )`;

//     } else {
//         return `Ningún equipo ganó, Team Dolphins (${avgDolphins}) vs Team Koalas (${avgKoalas})`;
//     }
// }

// console.log(checkWinner(promTeamDolphins, promTeamKoalas));

// // Test 2

// promTeamDolphins = calAverage(23, 34, 27);
// promTeamKoalas = calAverage(85, 54 ,41);

// console.log(checkWinner(promTeamDolphins, promTeamKoalas));

// **************************************************************

// 'user strict';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = 'Jay';
// console.log(friends);

// // Pop (Eliminar el Ultimo array)
// // Pusp (Insertar un array al final)

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// console.log(jonas.length);
// console.log(jonas[4][0]);

// // Exercise
// const calAge = (birthYear) => 2037 - birthYear;

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length -1]);

// console.log(age1, age2, age3);

// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length -1])];
// console.log(ages);

// *************************************************

// 'user strict';

// const friends = ['Michael', 'Steven', 'Peter'];

// console.log('Metodos para agregar valores a un Array: (push / unshift)');
// // Metodos para Agregar valores a un Array

// // Pusp Agrega elementos al final
// const newLength = friends.push('Saul');

// console.log(friends);
// console.log(`El metodo push AGREGA UN ELEMENTO AL FINAL DEL ARRAY retorna el Length del Array : (${newLength})`);

// // unshift Agrega elementos al inicio
//  const newLength2 = friends.unshift('Jhon');

// console.log(friends);
// console.log(`El metodo unshift AGREGA UN ELEMENTO AL INICIO DEL ARRAY retorna el length del Array : (${newLength2}) `);

// console.log('-----------------------------------------------------------');
// console.log('Metodos para Eliminar Valores en un Array: (pop / shift )');
// // Metodos para eliminar valores a un Array

// // Pop Elimina el ultimo elemento
// const elimnar1 = friends.pop();
// console.log(friends);
// console.log(`El Metodo pop ELIMINA EL ULTIMO ELEMENTO DEL ARRAY y retorna el elemento que eliminó (${elimnar1}) `);

// const eliminar2 = friends.shift();
// console.log(friends);
// console.log(`El Metodo shift ELIMINA EL PRIMER ELEMENTO DEL ARRAY retorna el elemento que eliminó (${eliminar2})`);

// // Visualizar al elemento que deseemos
// console.log('Dentro del Array Friends el orden de Michael es:',friends.indexOf('Michael'));
// console.log('Dentro de Array Friends el orden de Peter es:',friends.indexOf('Peter'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));

// if (friends.includes('Peter')) {
//     console.log('Tienes un amigo llamado Peter');
// }

// // ****************************************

// Coding Challenge 2

// 'user strict';

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const Total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(Total);

// *****************************************
// 'user strict';

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// const jonasObject = {
//     nombre: 'Jonas',
//     apellido: 'Schmedtmann',
//     edad: 2037 - 1991,
//     trabajo:'teacher',
//     amigos: ['Michael', 'Peter', 'Steven']
// }

// ****************************

// "user strict";

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   edad: 2037 - 1991,
//   trabajo: "teacher",
//   amigos: ["Michael", "Peter", "Steven"],
// };

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const inte = prompt('What do you to know about jonas?');
// // if (jonas[inte]) {
// //     console.log(jonas[inte]);
// // } else {
// //     console.log('usted escribió un valor no valido');
// // }

// jonas.location = 'Portuguese';
// console.log(jonas);
// jonas['twitter'] = 'http://twitter.com/';
// console.log(jonas);

// ******************
// Challenge

// 'use strict';

// console.log(`${jonas.firstName} has ${jonas.amigos.length} friends, and his best friend is called ${jonas.amigos[0]}`);

// ************************************

// 'use strict';

// const jonas = {
//     firstName: "Jonas",
//     lastName: "",
//     birthYear: 2037 - 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriveLicense: true,

//     // calAge: function (birthYear) {
//     //   return 2037 - birthYear;
//     // }

//     calAge: function () {
//       return 2037 - this.birthYear;
//     }
//   };

// console.log(jonas.calAge());
// console.log(jonas['calAge']());

// // =======
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I Can Drive :D ');

// const inferface = 'Audio';
// const private = 351;

//  ***************************************

// function  logger() {
//     console.log('My name is Jonas');
// }

// // Calling / Runing / Invoking function
// logger();
// logger();
// logger();

// function fruitProccesor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juiece with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const fruta = 10;

// const frutaJuice = fruitProccesor(5, 0);
// console.log(frutaJuice);

// const appleOrangeJuice = fruitProccesor(2, 5);
// console.log(appleOrangeJuice);

// *******************************

// function calAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calAge1(1991);
// console.log(age1);

// const calAge2 = function (birthyear) {
//     return 2037 - birthyear - sopa;
// }

// const age2 = calAge2(1991);

// console.log(age1, age2);

// ***********************************

// 'user strict'

// const calAge2 = function (birthyear) {
//     return 2037 - birthyear - sopa;
// }

// const calAge3 = (birthYear) => 2037 - birthYear;
// age3 = calAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} se retirará en ${retirement} years`;
// }

// let retiro = yearsUntilRetirement(1991, 'saul');
// console.log(retiro);

// retiro = yearsUntilRetirement(1980, 'bob');
// console.log(retiro);

// *******************************************************

// 'user strict'

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProccesor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     console.log(applePieces, orangesPieces);

//     const juice = `Juiece with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;

//     return juice;
// }

// const procesoFruit = fruitProccesor(2,3);
// console.log(fruitProccesor(2,3));

// *****************************************

// 'user strict'

// const calAge = function (years) {
//     return 2037 - years;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calAge(birthYear);
//     let retirement = 65 - age;

//     if (retirement > 1) {
//         retirement = `Faltan ${retirement} años para que ${firstName} pueda retirarse`;
//     } else if (retirement === 1 ){
//         retirement = `Falta 1 año para que ${firstName} se retire`;
//     } else if (retirement === 0) {
//         retirement = `${firstName} ya se retiró este año`
//     } else if (retirement < 0) {
//         retirement = retirement - (retirement * 2);

//         retirement = `${firstName} ya se retiro hace ${retirement} años`
//     }
//     return retirement;

// //     return `${firstName} se retirará en ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1970, 'mike'));

// **********************************

// 'user strict';

// // Test 1

// const calAverage = (a, b, c) => (a + b + c) / 3;

// let promTeamDolphins = calAverage(65, 54, 49);
// let promTeamKoalas = calAverage(44, 23 ,71);

// const checkWinner = function(avgDolphins, avgKoalas) {

//     if (avgDolphins >= avgKoalas *2) {
//         return `Team Dolphins Ganó (${avgDolphins} vs ${avgKoalas})`;

//     } else if (avgKoalas >= avgDolphins *2) {
//         return `Tema Koalas Ganó (${avgKoalas} vs ${avgDolphins} )`;

//     } else {
//         return `Ningún equipo ganó, Team Dolphins (${avgDolphins}) vs Team Koalas (${avgKoalas})`;
//     }
// }

// console.log(checkWinner(promTeamDolphins, promTeamKoalas));

// // Test 2

// promTeamDolphins = calAverage(23, 34, 27);
// promTeamKoalas = calAverage(85, 54 ,41);

// console.log(checkWinner(promTeamDolphins, promTeamKoalas));

// **************************************************************

// 'user strict';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = 'Jay';
// console.log(friends);

// // Pop (Eliminar el Ultimo array)
// // Pusp (Insertar un array al final)

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// console.log(jonas.length);
// console.log(jonas[4][0]);

// // Exercise
// const calAge = (birthYear) => 2037 - birthYear;

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length -1]);

// console.log(age1, age2, age3);

// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length -1])];
// console.log(ages);

// *************************************************

// 'user strict';

// const friends = ['Michael', 'Steven', 'Peter'];

// console.log('Metodos para agregar valores a un Array: (push / unshift)');
// // Metodos para Agregar valores a un Array

// // Pusp Agrega elementos al final
// const newLength = friends.push('Saul');

// console.log(friends);
// console.log(`El metodo push AGREGA UN ELEMENTO AL FINAL DEL ARRAY retorna el Length del Array : (${newLength})`);

// // unshift Agrega elementos al inicio
//  const newLength2 = friends.unshift('Jhon');

// console.log(friends);
// console.log(`El metodo unshift AGREGA UN ELEMENTO AL INICIO DEL ARRAY retorna el length del Array : (${newLength2}) `);

// console.log('-----------------------------------------------------------');
// console.log('Metodos para Eliminar Valores en un Array: (pop / shift )');
// // Metodos para eliminar valores a un Array

// // Pop Elimina el ultimo elemento
// const elimnar1 = friends.pop();
// console.log(friends);
// console.log(`El Metodo pop ELIMINA EL ULTIMO ELEMENTO DEL ARRAY y retorna el elemento que eliminó (${elimnar1}) `);

// const eliminar2 = friends.shift();
// console.log(friends);
// console.log(`El Metodo shift ELIMINA EL PRIMER ELEMENTO DEL ARRAY retorna el elemento que eliminó (${eliminar2})`);

// // Visualizar al elemento que deseemos
// console.log('Dentro del Array Friends el orden de Michael es:',friends.indexOf('Michael'));
// console.log('Dentro de Array Friends el orden de Peter es:',friends.indexOf('Peter'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));

// if (friends.includes('Peter')) {
//     console.log('Tienes un amigo llamado Peter');
// }

// // ****************************************

// Coding Challenge 2

// 'user strict';

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const Total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(Total);

// *****************************************
// 'user strict';

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// const jonasObject = {
//     nombre: 'Jonas',
//     apellido: 'Schmedtmann',
//     edad: 2037 - 1991,
//     trabajo:'teacher',
//     amigos: ['Michael', 'Peter', 'Steven']
// }

// ****************************

// "user strict";

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   edad: 2037 - 1991,
//   trabajo: "teacher",
//   amigos: ["Michael", "Peter", "Steven"],
// };

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const inte = prompt('What do you to know about jonas?');
// // if (jonas[inte]) {
// //     console.log(jonas[inte]);
// // } else {
// //     console.log('usted escribió un valor no valido');
// // }

// jonas.location = 'Portuguese';
// console.log(jonas);
// jonas['twitter'] = 'http://twitter.com/';
// console.log(jonas);

// ******************
// Challenge

// 'use strict';

// console.log(`${jonas.firstName} has ${jonas.amigos.length} friends, and his best friend is called ${jonas.amigos[0]}`);

// ************************************

// 'use strict';

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriveLicense: true,
//     // calAge: function (birthYear) {
//     //   return 2037 - birthYear;
//     // }

//     calAge: function () {
//       this.age = 2037 - this.birthYear;
//       return this.age;
//     },

//     getSummary: function () {
//       this.cadena = `${this.firstName} ${this.lastName} es mi ${this.job} de javascript, el tiene ${this.calAge()} años. Tambien tiene un mejor amigo llamado ${this.friends[0]}, y ${this.hasDriveLicense? 'si tiene': 'no tiene'} licencia de conducir.`;

//       return this.cadena;
//     }
//   };

// // Callenge Prueba
// console.log(jonas.getSummary());

// ***************************

// Coding Challenge

// 'user strict'

// const mark = {
//   fullname: 'Mark Miller',
//   mass: 78,
//   tall: 1.69,

//   calBMI: function() {
//     this.BMI = this.mass / this.tall **2;

//     return this.BMI;
//   }
// };

// const jhon = {
//   fullname: 'Jhon Smith',
//   mass: 92,
//   tall: 1.95,
//   calBMI: function() {
//     this.BMI = this.mass / this.tall **2;

//     return this.BMI;
//   }
// };

// console.log(` Mark(${mark.calBMI()}) vs Jhon(${jhon.calBMI()})`);

// if (mark.BMI > jhon.BMI) {
//   console.log(`${mark.fullname} tiene más BMI que ${jhon.fullname}`);
// } else if (mark.BMI < jhon.BMI) {
//   console.log(`${jhon.fullname} tiene más BMI que ${mark.fullname}`);
// } else {
//   console.log(`${jhon.fullname} y ${mark.fullname} tienen el mismo BMI`);
// }

// **********************************************

// console.log('Levantar pesas, repeticion 1');
// console.log('levantar pesas, repeticion 2');
// console.log('levantar pesas, repeticion 3');
// console.log('levantar pesas, repeticion 4');
// console.log('levantar pesas, repeticion 5');
// console.log('levantar pesas, repeticion 6');
// console.log('levantar pesas, repeticion 7');
// console.log('levantar pesas, repeticion 8');
// console.log('levantar pesas, repeticion 9');
// console.log('levantar pesas, repeticion 10');

// for(let rep = 1; rep <= 10 ;rep ++) {
//   console.log(`Levantar pesas, repeticion ${rep}`);

// }

// *****************************************
// 'user strict';

// const jonasArray = [
//       'Jonas',
//       'Schmedtmann',
//       2037 - 1991,
//       'teacher',
//       ['Michael', 'Peter', 'Steven'],
//       true
//   ];

// const types = [];
// const types2 = [];
// // const objetoPrueba = {

// // };

// for(let i = 0; i < jonasArray.length ; i++) {

//   types.push(typeof jonasArray[i])

//   types2[i] = typeof jonasArray[i];

//   // objetoPrueba[i] = typeof jonasArray[i];
// }

// console.log(types);
// console.log(types2);
// // console.log(objetoPrueba);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(a = 0; a < years.length ; a++) {

//   ages.push(2037 - years[a]);
// }

// console.log(ages);

// Break and Continue

// console.log('--------------------------------');

// for(let i = 0; i < jonasArray.length ; i++) {

//   console.log(types);

//   if (typeof jonasArray[i] !== 'string' ) break;

//   console.log(jonasArray[i],typeof jonasArray[i]);

// }

// const saulArray = [16, 20, 'hola', 21, 'jose' ];

// for (let b = 0; b < saulArray.length; b++) {
//   if(typeof saulArray[b] !== 'number') continue;

//   console.log(saulArray[b], typeof saulArray[b]);
// }

// const edadesHermanos = ['erick', 13, 'lucia', 20, 'saul', 18]

// for(let repetir = 0; repetir < edadesHermanos.length; repetir++) {
//   if (typeof edadesHermanos[repetir] !== 'number') continue;

//   console.log(edadesHermanos[repetir], typeof edadesHermanos[repetir]);
// }

// const saulArray = [16, 20, 'hola', 21, 'jose'];

// for (let i = 0; i < saulArray.length; i++) {
//  if (typeof saulArray[i] !== 'number') break;

//  console.log(saulArray[i], typeof saulArray[i]);
// }

// ***************************

// const jonas = [
//       'Jonas',
//       'Schmedtmann',
//       2037 - 1991,
//       'teacher',
//       ['Michael', 'Peter', 'Steven'],
//       true
//   ];

// for(let repetida = jonas.length-1;  repetida >= 0 ; repetida--) {
//   console.log(repetida ,jonas[repetida]);
// }

// for(let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`Starting exercise ${exercise}`);

//     for(let exercise1 = 1; exercise1 <= 5 ; exercise1++){
//       console.log(`Ejercicio ${exercise}: veces repetidas ${exercise1}`);
//   }
// }

// for(let exercise = 1; exercise <= 3; exercise++) {

//   console.log(`Starting exercise ${exercise}`);

//     for(let exercise1 = 1; exercise === 1 && exercise1 <= 5 ; exercise1++){
//       console.log(`Ejercicio ${exercise}, veces repetidas ${exercise1}]`);
//     }

//     for(let exercise2 = 1; exercise === 2 &&  exercise2 <= 5; exercise2++){
//       console.log(`Ejercicio ${exercise}, veces repetidas ${exercise2}]`)
//     }

//       for(let exercise3 = 1; exercise === 3 &&  exercise3 <= 5; exercise3++){
//         console.log(`Ejercicio ${exercise}, veces repetidas ${exercise3}]`);
//     }
// }

// *********************************

// Ciclo While vs Ciclo For

// for (let exercise = 1; exercise <= 10; exercise++) {
//   console.log(`exercise ${exercise}`);
// }

// console.log("--------------------------");

// let rep = 1;
// while (rep <= 10) {
//   console.log(`exercise ${rep}`);

//   rep++;
// }

// const arrayss = [];

// while (arrayss[arrayss.length - 1] != 6) {
//   let valorDado = Math.trunc(Math.random() * 6) + 1;

//   if (arrayss[arrayss.length - 1] != 6) {
//     arrayss.push(valorDado);
//   } else if (arrayss[arrayss.length - 1] === 6) {
//     break;
//   } else {
//     break;
//   }
// }

// console.log(arrayss);

// let valorDado = Math.trunc(Math.random() * 6) + 1;

// while (valorDado != 6) {
//   console.log("el dado salió:", valorDado);
//   valorDado = Math.trunc(Math.random() * 6) + 1;
//   if (valorDado === 6) {
//     console.log("EL DADO SALIÖ 6 QUE MARAVILLA");
//   }
// }

// const arraysss = [valorDado];

// while (valorDado != 6) {
//   valorDado = Math.trunc(Math.random() * 6) + 1;
//   arraysss.push(valorDado);
// }

// console.log(arraysss);

// *********************************

// Coding Callenge

// Definir
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// // Determinar la Propina
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// // Añadir la Propina y el Total
// for (let rep = 0; rep < bills.length; rep++) {
//   let inserTips = calcTip(bills[rep]);
//   tips.push(inserTips);

//   let insertTotals = inserTips + bills[rep];
//   totals.push(insertTotals);
// }

// // Determinar Promedio de Bills, tips, totals
// const calAverage = function (arr) {
//   let valor = 0;

//   for (let rep = 0; rep < arr.length; rep++) {
//     valor = valor + arr[rep];
//   }

//   valor = valor / arr.length;

//   return valor;
// };

// // Mostrar
// console.log(`Bills: [${bills}]`);
// console.log(`Tips: [${tips}]`);
// console.log(`Totals [${totals}]`);

// console.log(`Promedio de Bills: ${calAverage(bills)}`);
// console.log(`Promedio de Tips: ${calAverage(tips)}`);
// console.log(`Promedio de Totals: ${calAverage(totals)}`);
