// // let js = 'amazing';
// // if (js === 'amazing') alert('hola')

// 40+8+23-10;
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');

// let firstName = 'Matilda';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = 'JM';
// let $funtion = 27;

// let Person = 'jonas';
// const PI = 3.1415;

// let myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';

// let job = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);

// // Datos primitivos

// // Number 23
// // String 'jonas'
// // Boolean 'true
// // undefined Let ValorUno;
// // null
// // Symbol Valor que no cambia , PI
// // BigInt  Numeros largos


// ******************************************

// let JavascriptIsFun = true;
// console.log(JavascriptIsFun);

// console.log(typeof JavascriptIsFun);
// // console.log(typeof true);
// // console.log(typeof 23);
// // console.log(typeof 'true');

// JavascriptIsFun = 'YES!'
// console.log(typeof JavascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);


// **********************************


// let age = 30;
// age = 31;


// // Las constantes no pueden variar su valor
// const brith = 1991;
// // brith = 1990;

// var job = 'programmer';


// // No hacer esto:
// lastname = 'Schmedtan';
// console.log(lastname);


// ********************************


// // Math operadores
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSara = now - 2018;

// console.log(ageJonas, ageSara);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 = 2 * 2 * 2;

// const firstName = 'jonas';
// const lastName = 'Schmedman';
// console.log(firstName + ' ' + lastName);

// // Asignacion de operacdores
// let x = 10 + 5;  //15
// x += 10; //x = x + 10 // 25
// x *= 4; // x * 4 // 100
// x ++; // x + x + 1 // 101
// x --; // x + x - 1 // 100
// x --; // x + x -1 //99
// console.log(x);

// // Comparation operadores
// console.log(ageJonas > ageSara); // < , > , >= , <=
// console.log(ageSara >= 18);

// const isFullAge = ageSara >= 18;

// console.log(now - 1991 > now - 2018);


// ***********************************************


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSara = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 -5; // x = y = 10

// console.log(x, y);

// const promEdad = (ageJonas + ageSara) / 2;
// console.log(promEdad);


// *************************************************************+

// Coding Challenge

// Version 1
// const mark = {
//     peso: 78,
//     altura: 1.69, 
// };
// const jhon = {
//     peso: 92,
//     altura: 1.95,
// };

// // BMI = Peso / Altura ** 2
// // BMI 2 = Peso / (Altura * Altura)

// const BMIMark = mark.peso / mark.altura **2; 
// const BMIJhon = jhon.peso / jhon.altura **2; 

// console.log({BMIJhon});
// console.log({BMIMark});

// const markHigherBMI = BMIMark > BMIJhon;
// console.log(`Mark Tiene más IMC que Jhon: ${markHigherBMI} `);
// // Version 2 **********************

// const mark2 = {
//     peso: 95,
//     altura: 1.95, 
// };
// const jhon2 = {
//     peso: 85,
//     altura: 1.76,
// };

// const BMIMark2 = mark2.peso / mark2.altura **2; 
// const BMIJhon2 = jhon2.peso / jhon2.altura **2; 

// console.log({BMIJhon2});
// console.log({BMIMark2});

// const markHigherBMI2 = BMIMark2 > BMIJhon2;
// console.log(`Mark Tiene más IMC que Jhon: ${markHigherBMI2} `);


// console.log('***************************');
// Facil

// let heightMark = 1.69 ;
// let massMark = 78;
// let heightJhon = 1.95;
// let massJhon = 92; 

// let imcMark = massMark / heightMark ** 2;
// let imcJhon = massJhon / heightJhon ** 2;

// let masIMC = imcMark > imcJhon;

// console.log({imcMark});
// console.log({imcJhon});

// console.log(`Mark Tiene mas IMC que jhon: ${masIMC}`);
// // Version 2

// heightMark = 1.88 ;
// massMark = 95;
// heightJhon = 1.76;
// massJhon = 85; 

// imcMark = massMark / heightMark ** 2;
// imcJhon = massJhon / heightJhon ** 2;

// masIMC = imcMark > imcJhon;

// console.log({imcMark});
// console.log({imcJhon});
// console.log(`Mark Tiene mas IMC que jhon: ${masIMC}`);


// **************************************************

// const firstName = 'jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// console.log(`Hello , I ${firstName},My job is ${job} and have ${2022-birthYear} Years Old`);

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'Years Old' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year Old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);


// // PLantillas
// console.log(`
// String whith \n\
// string2 \n\
// string3 \n\
// string4
// `);

// console.log(`
// string
// string2

// `);


// *************************************


// const age = 19;

// if(age >= 18) {
//     console.log('Sarah puede comenzar a conducir con licencia ');
// } else {
//     const yearLeft = 18 - age;
//     console.log(`Sarah es demasiado joven, le faltan ${yearLeft} años para conducir`);
// }


// const brithDay = 20152;
// let century;

// if(brithDay <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// };
// console.log(century);

// *****************************************
// Coding Challenge 2

// let heightMark = 1.69 ;
// let massMark = 78;
// let heightJhon = 1.95;
// let massJhon = 92; 

// let imcMark = massMark / heightMark ** 2;
// let imcJhon = massJhon / heightJhon ** 2;

// let masIMC = imcMark > imcJhon;

// if(masIMC) {
//     console.log(`Mark (${imcMark}) tiene mas IMC que Jhon (${imcJhon})`);
// } else {
//     console.log(`Jhon(${imcJhon}) tiene mas IMC que Mark(${imcMark})`);
// }

// heightMark = 1.88 ;
// massMark = 95;
// heightJhon = 1.76;
// massJhon = 85; 

// imcMark = massMark / heightMark ** 2;
// imcJhon = massJhon / heightJhon ** 2;

// masIMC = imcMark > imcJhon;

// // console.log({imcMark});
// // console.log({imcJhon});

// if(masIMC) {
//     console.log(`Mark (${imcMark}) tiene mas IMC que Jhon (${imcJhon})`);
// } else {
//     console.log(`Jhon(${imcJhon}) tiene mas IMC que Mark(${imcMark})`);
// }


// *************************************************


// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23 );

// // Type Coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('23' - '10');
// console.log('2'* '3');
// console.log('10' / '2');


// let n = '1' + 1;
// n = n - 1;
// console.log(n);


// ***********************************

// Valores Falsos = 0 , '', undefined, null , NaN, False

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//     console.log('Si tiene dinero');
// } else {
//     console.log('No tiene dinero');
// };

// let height = 0;
// if (height) {
//     console.log('La altura esta definida');
// } else if (height == 0) {
//     console.log('LA altura es 0');
// } else {
//     console.log('La altura no está definida');
// };


// *********************************


// const age = '18';

// if (age === 18) console.log('Tu acabas de convertirte en adulto (Strict)');
// if (age == 18) console.log('Tu acabas de convertirte en adulto (Loose)');

// const Favourite = Number(prompt('Cual es tu numero Favorito'));

// console.log(Favourite);
// console.log(typeof Favourite);

// if (Favourite === 23) {
//     console.log('Cool, 23 es an amazing number');
// } else if (Favourite === 7) {
//     console.log('7 is also a cool number');
// } else if (Favourite ===9) {
//     console.log('9 is also a cool number');
// }
// else {
//     console.log('Number is not 23 or 7 or 9');
// }

// if (Favourite !== 23) console.log('why not 23?');


// *****************************************************

// const hasDrive = true;
// const goodVision = true;

// console.log(hasDrive && goodVision);
// console.log(hasDrive || goodVision);
// console.log(!hasDrive);
// console.log(!goodVision);

// const shoulDrive =(hasDrive && goodVision);

// // if (hasDrive && goodVision) {
// //     console.log('Sara es capaz de conducir');
// // } else {
// //     console.log('Necesita a otro para conducir');
// // }

// const isTired = false; //C
// console.log(hasDrive && goodVision && isTired);

// if (hasDrive && goodVision && !isTired) {
//     console.log('Sara es capaz de conducir');
// } else {
//     console.log('Necesita a otro para conducir');
// }


// **************************************************

// Coding Challenge 3
// Normal
// console.log('Ejercicio 1:');

// const teamDolphins = ((96 + 108 + 89) / 3);
// const teamKoalas = ((88 + 91 + 110) / 3);

// console.log(`Team Dolphins : ${teamDolphins}
// Team Koalas: ${teamKoalas}
// `);

// if (teamDolphins > teamKoalas) {
//     console.log(`Team Dolphins ganó a team Koalas`);
// } else {
//     console.log(`Team Koalas ganó a team Dolphins `);
// };

// // Bonus 1
// console.log('-------------------------------------');
// console.log('Ejercicio 2:');

// const teamDolphins1 = ((97 + 112 + 101) / 3);
// const teamKoalas1 = ((109 + 95 + 123) / 3);

// console.log(`Team Dolphins : ${teamDolphins1}
// Team Koalas : ${teamKoalas1}
// `);

// if ((teamKoalas1 > teamDolphins1) && (teamKoalas1 >= 100) ) {
//     console.log(`Tema koalas ganó a Team Dolphins`);
// } else if ( (teamDolphins1 > teamKoalas1) && (teamDolphins1 >= 100)) {
//     console.log(`Team Dolphins ganó a Team Koalas`);
// } else if ((teamDolphins1 === teamKoalas1) && ((teamDolphins1 >=100) && (teamKoalas1 >=100))) {
//     console.log(`Team Dolphins y Team Koala Están en empate`);
// } else {
//     console.log(`El puntaje minimo es 100, y ninguno de los dos equipos cumple ese requerimiento`);
// };


// ******************************************************************

// const day = 'friday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course Structure');
//         console.log('Go to Coding meetup');
//         break;
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code exampls');
//         break;
//     case 'friday':
//         console.log('Record Videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// };

// console.log('---------------------');

// if (day === 'monday') {
//     console.log('Plan course Structure');
//     console.log('Go to Coding meetup');

// } else if (day === 'tuesday') {
//     console.log('prepare theory videos');

// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code exampls');

// } else if (day === 'friday') {
//     console.log('Record Videos');

// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');

// } else {
//     console.log('Not a valid day');
// };

// **********************************************************


// const valor = 19;

// const valor2 = valor > 18? 'Valor es mayor que 18': valor < 18? 'Valor es menor que 18' : 'Valor Es igual que 18';

// console.log(valor2);


// const valor3 = `${valor > 18? 'valor es mayor que 18' : 'Valor es menor que 18'}`;

// console.log(valor3);

// console.log(``);



// -*****************************************************
// Coding Challenge 4


// const servicio = 430;

// const propina = servicio >= 50 && servicio <= 300? (servicio * 0.15) : (servicio * 0.2);


// console.log(`El gasto de consumo es: ${servicio}
// El gasto de la propina es: ${propina}
// EL gasto total es: ${servicio + propina}`);

