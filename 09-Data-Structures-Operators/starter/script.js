// 'use strict';

// Data needed for a later exercise

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [z, x, y] = arr;

// console.log(z, x, y);

// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// Switching variables

// let g = 10;
// let j = 5;

// [main, secondary] = [secondary, main];
// [secondary, main] = [main, secondary];
// [g, j] = [20, 10];

// console.log(g, j);
// console.log(g);
// console.log(j);
// console.log(main, secondary);

// REceive 2 return values from a function
// const [starter, mainMenu] = restaurant.order(2, 0);

// console.log(starter, main);

// Nested destucturing
// const nested = [2, 4, [5, 6]];

// const [, , minArray] = nested;
// const [valorUno, , [miniUno, miniDos]] = nested;
// console.log(valorUno, miniUno, miniDos);
// const [valorChiquitoUNo, valorChiquitoDos] = minArray;
// console.log(valorChiquitoUNo);

// Default values
// Cuando no busca un dato no existente da undefined, pero se puede agregar un valor de inicio, en este caso es el 1;
// const [p, q, r = 1] = [8, 9];
// console.log(p, q, r);

// --------------------------------------------------
// Destructuring objets

// const restaurant2 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderDelivery: function({time, addrres, mainIndex, starter}) {
//     console.log(time, starter);
//   }
// };

// console.log(restaurant2.orderDelivery({
//   time: '22.30',
//   address: 'via del soles,21',
//   mainIndex: 2,
//   starter: 2,
// }));

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

// const {fri: {open:abierto, close:cerrado}} = restaurant2.openingHours
// console.log(` El día viernes
// Abré a las ${abierto}, y cierra a las ${cerrado}`);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is delicious pasta with ${ing1
//       }, ${ing2} and ${ing3}`);
//   },
// };
// Spred operator Arrays

// let ingredients = [
//   prompt("Let's make pasta!, Ingredient 1 ?"),
//   prompt('Ingredient 2 ?'),
//   prompt('Ingredient 3 ?'),
// ];

// restaurant.orderPasta(...ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta('faf' ,'asfsa' ,'as')

// Spred operator Objets--------------------------------

// const NewRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(NewRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorainte Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// ---------------------------------------------------------
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log([1, 2, 3, ...arr]);
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join + 2 Array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: Arrays, strings, maps, set. Not Objects
// const carro = {
//   marca: 'moto',
//   km: '70 km/h'
// }

// const carro2 = { ...carro };
// console.log(carro);
// console.log(carro2);

// const str = 'Jonas';
// const letters = [...str, ' ', 'S'];
// console.log(letters);

// --------------------------------------------------------
// Parameter Rest

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function(mainIngre, ...otherIngre) {
//     console.log(`${mainIngre}`);
//     console.log(`${otherIngre}`);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // SPREAD, because on RIGTH side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =

// const [a, b, ...other] = [1, 2, 3, 4, 5];

// console.log(a, b, other);

// const [pizza,, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

// console.log(pizza, risotto, otherFood);
// // REST PARAMETERS IN Objets
// const { sat, ...others } = restaurant.openingHours;
// console.log(sat, others);

// // -------REST PARAMETER IN FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }

// add(2,3);
// add(5, 3,7);
// add(5, 3, 7, 2, 1);
// const x = [23, 5, 7];
// add(...x)

// restaurant.orderPizza('mushorrom', 'onion', 'olives', 'espinach');
// restaurant.orderPizza('mushorrom');

// //
// --------------------------- && - || OPERATORS LOGICS
// Use ANY data type, return ANY data type, shor-circuiting

// || OR
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas' || 'saul');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(false || false);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function (mainIngre, ...otherIngre) {
//     console.log(`${mainIngre}`);
//     console.log(`${otherIngre}`);
//   },
// }

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// && AND
// let a = 10;
// let b = 20;
// console.log(10 && 0);
// console.log(7 && 'fas');

// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mashroms', 'spinach')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushhsrom', 'spinach');

// ---------------------------------------------
// Nullish Operator

// restaurant.numbGuests = 0;
// const guests0 = restaurant.numbGuests ?? 10;
// console.log(guests0);

// null and undefined

// ------------------------------------------------------------
// Operators Logicals 2021

// const rest1 = {
//   name: 'Capri',
//   // numGuets: 20,
//   numGuets: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuets = rest1.numGuets || 10;
// // rest2.numGuets = rest2.numGuets || 10;

// // OR assignment operator
// // rest1.numGuets ||= 10;
// rest1.numGuets ||= 10;
// rest2.numGuets ??= 10;

// rest2.owner &&= 'jonas';

// console.log(rest1);
// console.log(rest2);

// function hola(...nombre) {
//   console.log(nombre);
// }

// hola(10, 20, 50, 960)
// const array = [10, 20, 30, 40];
// const [valorUno, ...otrosValores] = array;
// console.log(valorUno);

// const copiaArray = [...array]

// // nullish assignament operator
// // rest1.owner = rest1.owner && '<ANONIMUS>'
// // &&= es una version mejorada, ya que si el elemento no existe no retorna nada
// rest1.owner &&= '<ANONIMUS>';
// rest2.owner &&= '<ANONIMUS>';
// rest1.owner ??= 'fas'

// console.log(rest1);
// console.log(rest2);

// --------------------------------------------------
// Coding challenge 1

//  const game = {
//    team1: 'Bayern Munich',
//    team2: 'Borrussia Dortmund',
//    players: [
//      [
//        'Neuer',
//        'Pavard',
//        'Martinez',
//        'Alaba',
//        'Davies',
//        'Kimmich',
//        'Goretzka',
//        'Coman',
//        'Muller',
//        'Gnarby',
//        'Lewandowski',
//      ],
//      [
//        'Burki',
//        'Schulz',
//        'Hummels',
//        'Akanji',
//        'Hakimi',
//        'Weigl',
//        'Witsel',
//        'Hazard',
//        'Brandt',
//        'Sancho',
//        'Gotze',
//      ],
//    ],
//    score: '4:0',
//    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//    date: 'Nov 9th, 2037',
//    odds: {
//      team1: 1.33,
//      x: 3.25,
//      team2: 6.5,
//    },
//  };
// //  1
// let [players1, players2] = game.players
// // 2
// let [gk, ...fieldPlayers] = game.players[0];
// // 3
// let allPlayers = [...players1, ...players2];
// // 4
// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // 5
// let { team1: equipo1, x: sorteo, team2: equipo2 } = game.odds;
// // 6
// game.printGoals = function (...jugadoresGol) {
//   jugadoresGol.flat(Infinity).forEach((a, b) => console.log(a,`, Goles:${b + 1}`));
// }
// // 7
// let cuotaMasBaja = [equipo1, equipo2, sorteo].sort((a, b) => a > b ? 1 : -1);
// equipo1 < equipo2 && console.log('Equipo 1 tiene más ventaja');
// equipo2 < equipo1 && console.log('Equipo 2 tiene más ventaja');
// equipo2 === equipo1 && console.log('Puede ser empate');

// ----------------------------------------------------
// const restaurant = {

//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function(mainIngre, ...otherIngre) {
//     console.log(`${mainIngre}`);
//     console.log(`${otherIngre}`);
//   },
// }

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const item of menu) console.log(item);

// menu.forEach((x,i) => console.log(`${i+1}: ${x}`));
// console.log('--------------------');
// // let indice = 0;
// // for (let items of arreglo) {
// //   console.log(items);
// //   indice++;
// //   console.log(indice);
// // };

// for (const item of menu.entries()) {
//   console.log(`${item[0]+1}: ${item[1]}`);
// }
// console.log('---------------Se puede destructurar en un for of');
//  for (const [i, el] of menu.entries()) {
//    console.log(`${i +1}: ${el}`);
//  }

// // --------------------------------------------------
// // OBJETCS LITERALS------------------------------------

// const openingHours = {
//   //   // OPERACIONES CON PLANTILLAS LITERALES
//   fri: {
//     open: 12,
//     close: 1,
//     a:  22,
//   },
//   thu: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 Enhancet Objetc Literals
//   // Solo poner el nombre de la variable
//   openingHours,

//   // Forma moderna de declarar funcinoes dentro de un objeto
//   orderPizza(mainIngre, ...otherIngre) {
//     console.log(`${mainIngre}`);
//     console.log(`${otherIngre}`);
//   },

//   order: function (starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },
// };

// // OPTIONAL CHAINGING
// console.log(restaurant.openingHours.mon);

// // WITH
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.sat?.open);
// console.log(restaurant.openingHours?.mon?.close);

// // EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   const close = restaurant.openingHours[day]?.close;
//   console.log(`On ${day}, we Open at: ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? ' Method does not exist');
// console.log(restaurant.ordefar?.(0, 1) ?? ' Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'User array empty');
// -------------------------------------------------------

//   const openingHours = {
//     fri: {
//       open: 12,
//       close: 22,
//     },
//     thu: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // Forma moderna de declarar funcinoes dentro de un objeto
//   orderPizza(mainIngre, ...otherIngre) {
//     console.log(`${mainIngre}`);
//     console.log(`${otherIngre}`);
//   },

//   order: function (starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },
// };
// // Property names
// const properties = Object.keys(openingHours);
// // console.log(properties);

// let openStr = `We are open on ${properties.length} days: `

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `
// }
// // console.log(openStr);
// // Property values
// const values = Object.values(openingHours)
// // console.log(values);

// // Entrie Object
// const entries = Object.entries(openingHours)
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`Dia = ${key}: Open: ${open}, Close: ${close}.`);
// }

// --------------------------------------------------------
// Coding Challenge 2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1
// for (const [number, player] of Object.entries(game.scored)) {
//   console.log(`Gol ${Number(number) + 1 }: ${player}`);
// }
// // 2
// let suma = 0;
// for (const cuota of Object.values(game.odds)) {
//   suma += cuota;
// }
// console.log( 'Promedio '+ suma / Object.values(game.odds).length);

// // 3
// // const [equipo1Puntos, empate, equipo2Puntos] = Object.values(game.odds);
// // const [nombreEquipo1, NombreEquipo2] = Object.values(game)

// // console.log(`
// //   Probabilidad de Victoria de ${nombreEquipo1}: ${equipo1Puntos};
// //   Probabilidad de Empate: ${empate};
// //   Probabilidad de Victoria de ${NombreEquipo2}: ${equipo2Puntos};
// // `);

// //3.2

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'empate' : `Victoria de ${game[team]}`
//   console.log(`
//     Probabilidad de ${teamStr}: ${odd};
//   `);
// }

// // 4
// const anotadores = {
// }

// // ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels']
// for (const player of Object.values(game.scored)) {
//   anotadores[player] ??= 0;
//   anotadores[player] += 1;
// }

// console.log(anotadores);

// --------------------------------------------------------------
// SETHS

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// // Includes
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlic Bread')
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// // ordersSet.delete('Risotto');
// console.log(ordersSet);

// // Examples
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// const NewStaff = [...new Set(staff)];

// ------------------------------------------
// 'use strict';
// // MAPS
// // let arre = [10,20]
// // const rest = new Map();
// // rest.set('name', 'Classico Italiano');
// // rest.set(1, 'Firenze, Italy');
// // rest.set(2, 'Lisbon, Portugal');
// // rest.set('open', 11);
// // rest.set('close', 23);
// // rest.set(true, 'We are open :)');
// // rest.set(false, 'We are closed :D')
// // rest.set(arre, 'Diez y Veinte')

// // const time = 8;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // console.log(rest.has('name'));
// // rest.delete(2);
// // console.log(rest);
// // // rest.clear()
// // console.log(rest.get(arre));
// // console.log(rest.size);

// // const arrey = [10,1,1,2,5,3,1]
// // const ab = [...new Set(arrey)];
// // console.log(ab);

// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'Correct respuesta'],
//     [false, 'Try again respuesta']
// ])

// console.log(question);

// // Converter object to map

//   const openingHours = {
//     fri: {
//       open: 12,
//       close: 22,
//     },
//     thu: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
// };
// const converter = new Map(Object.entries(openingHours));
// console.log(converter);

// // Quiz
// console.log('----------------------');
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
// }
// // const rpt = Number(prompt('You Answer'));
// // console.log(question.get(question.get('correct') === rpt));

// // Converter map to Array
// console.log([...question]) //= console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// PROS Y CONTRAS
// Video

//----------------------------------------------
// Coding challenge 3

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// // 1

// console.log('eventos del juego:', [...new Set(gameEvents.values())]);
// // 2
// gameEvents.delete(64);
// console.log(gameEvents);
// // 3
// const ultimoEvent = [...gameEvents.keys()].at(-1);
// console.log(`An event happened, on average every ${ultimoEvent / gameEvents.size} minutes`);
// // 4
// const tiempos = gameEvents;
// for (const [minuto, evento] of tiempos) {
//   const tiempo = minuto <= 45 ? 'Primer' : 'Segundo';
//   console.log(`${tiempo} Tiempo ${minuto}: ${evento}`);
// }

// ----------------------------
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[0]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'))
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));

// console.log(airline.slice(airline.indexOf('TAP'), airline.indexOf(' ')));
// console.log(airline.slice(airline.indexOf('Portugal')));

// console.log(airline.slice(-1));
// console.log(airline.slice(-2));
// console.log(airline.slice(-8));

// const checkMiddleSeat = function (seat) {

//     // const medio = /[AB]/g.test(seat.split(''))
//     //   ? 'Se sientan en el medio'
//     //   : 'No se sientan en el medio';

//     // return medio
//     const s = seat.slice(-1)
//     if (s === 'B' || s === 'E') {
//         console.log('You got the middle seat');
//     } else {
//         console.log('You got lucky');
//     }
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization
// const capitalization = 'jOnAS';
// const passengerLower = capitalization.toLowerCase();
// const passengerCapita = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCapita);

// // Verify email
// const email = 'saulporras@gmail.com'
// const login = 'saulPorras@gmail.com';
// console.log(email.toLowerCase() === login.toLowerCase().trim());

// // Replacing
// const priceGB = '288,97e';
// const priceUS = priceGB.replace('e', '$').replace(',', '.');

// console.log(priceUS);

// const announcet = 'All passsenger come to barding door 23, Boarding door 23!'

// console.log(announcet.replace('door', 'gate'));
// console.log(announcet.replaceAll('door', 'gate'));

// console.log(announcet.replace(/door/g, 'gate'));

// const plane2 = 'afga10';
// console.log(plane2.includes('a'));
// console.log(plane2.startsWith('b'));
// console.log(plane2.endsWith('c'));

// // Practique
// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are NOT allowed on board');
//     } else {
//         'Welcome aboard'
//     }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife')
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// ----------------------------------------
// let a = 10;
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schedtmann'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passegner = 'jessica ann smith davis';

// const capitalaze = function (name) {
//   const names = name.split(' ');
//   const arrayUpper = [];

//   for (const n of names) {
//     // n.toLowerCase();
//     // arrayUpper.push(n[0].toUpperCase() + n.slice(1));

//     arrayUpper.push(n.toLowerCase().replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(arrayUpper.join(' '));
// };

// capitalaze(passegner);
// capitalaze('jonas schedtmann');

// // PAdding
// const message = 'Go to gate 23';
// console.log(message.length);
// console.log(message.padStart(15, '+'));
// console.log(message.padEnd(15, '+'));
// console.log(message.length);

// const maskCreditCard = function (number) {
//   // const str = number + '';
//   const str = number.toString().slice(-4);
//   console.log(str.padStart(String(number).length, '*'));
// };

// maskCreditCard(941221125548);
// maskCreditCard('26546548644');

// // Repeat
// const message2 = 'Bad wather.. Al departues delayed... ';
// console.log(message2.repeat(1));

// const planes = function (n) {
//     console.log(`There are ${n} planes un Line ${'✈'.repeat(n)}`);
// };

// planes(2)

// let o = 'saffsa';

// -------------------------------------------
// 'user strict';
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const textarea = document.querySelector('textarea');
// const button = document.querySelector('button');

// // Traer fatos del textarea al hacer click
// button.addEventListener('click', () => {
//   // Separar los string por espaciados
//   const newTextarea = textarea.value.split('\n');
//   let datos = [];

//   // Unir el primer caracter en mayuscula con el resto en minuscula
//   for (let i = 0; i < newTextarea.length; i++) {
//     let separador = newTextarea[i].trim().toLowerCase().split('_');
//     let texto = '';

//     for (array of separador) {

//      if(array === separador[0]) texto += array;
//       else texto += array[0].toUpperCase() + array.slice(1);
//     }

//       datos.push(texto);

//   }

//   // Remplazar el textarea a CamelCase
//   let contenedor = [];
//   for (let dato of datos) {
//     contenedor.push(`\n ${dato}`);
//   }
//   textarea.value = contenedor.join('');

//   // Mostrar en consola los checks con padding
//   let n = 1;
//   for (nCheck of contenedor) {
//     console.log(nCheck.padEnd(20, ' ') + '✅'.repeat(n));
//     n++;
//   }
//     n = 0;
// });

// -----------------------------------------------
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getTres = (string) => string.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.includes('Delayed')? '🛬': ''} ${type.replaceAll('_', ' ')} from ${getTres(from)} to ${getTres(to)} (${time.replace(':', 'h')})`.padStart(36)
  console.log(output);
}