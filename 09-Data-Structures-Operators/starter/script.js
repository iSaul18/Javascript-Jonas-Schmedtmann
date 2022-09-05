'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [z, x, y] = arr;

console.log(z, x, y);

console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// Switching variables

let g = 10;
let j = 5;

[main, secondary] = [secondary, main];
[secondary, main] = [main, secondary];
[g, j] = [20, 10];

console.log(g, j);
console.log(g);
console.log(j);
console.log(main, secondary);

// REceive 2 return values from a function
const [starter, mainMenu] = restaurant.order(2, 0);

console.log(starter, main);

// Nested destucturing
const nested = [2, 4, [5, 6]];

const [, , minArray] = nested;
const [valorUno, , [miniUno, miniDos]] = nested;
console.log(valorUno, miniUno, miniDos);
const [valorChiquitoUNo, valorChiquitoDos] = minArray;
console.log(valorChiquitoUNo);

// Default values
// Cuando no busca un dato no existente da undefined, pero se puede agregar un valor de inicio, en este caso es el 1;
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);

// --------------------------------------------------
// Destructuring objets

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function({time, addrres, mainIndex, starter}) {
    console.log(time, starter);
  }
};

console.log(restaurant2.orderDelivery({
  time: '22.30',
  address: 'via del soles,21',
  mainIndex: 2,
  starter: 2,
}));

// const { name: nombre, openingHours: horas, categories } = restaurant2;
// console.log(nombre);

// const { menu = [], starterMenu: startera = [] } = restaurant2;
// console.log(menu, startera);

// // Mutating variables
// let aa = 111;
// let bb = 999;
// const obj = { aa: 23, bb: 7, cc: 14 };
// ({ aa, bb } = obj);
// console.log(aa, bb);

const {fri: {open:abierto, close:cerrado}} = restaurant2.openingHours
console.log(` El día viernes
Abré a las ${abierto}, y cierra a las ${cerrado}`);
