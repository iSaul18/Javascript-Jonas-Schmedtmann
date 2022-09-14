// 'use strict';
/*
const bookings = [];

// Defaults Parameters ES6+
const createBooking = function (fligthNum = 1, numPassengers = 1, price = 199) {
  // Defaults Parameters ES5-
  // fligthNum || 1;
  // numPassengers || 1;
  // price || 199;

  const booking = {
    fligthNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123')
createBooking('LH125', 2, 800)
*/

// -------------------------------------------------------------------------------------
/*
'use strict';

const fligth = 'LH234'
const jonas = {
  name: 'jonas',
  passport: 2484384,
};

const checkIn = function(fligthNum, passenger) {
  fligthNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  console.log(fligthNum);
  console.log(passenger.passport);
  if (passenger.passport === 2484384) {
    console.log('si es igual');
  } else {
    console.log('No es igual');
  }
}


checkIn(fligth, jonas);
console.log(jonas);

const newPassarport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000);
}

newPassarport(jonas)
checkIn(fligth, jonas)
console.log(jonas);
*/
// --------------------------------------
/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
}

const uperrFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
}

// Higher-order
const transformer = function (str, func) {
  console.log(`Original string ${str}`);
  console.log(`Transformer string ${func(str)}`);

  console.log(`Trasnformed by: ${func.name}`);
}

transformer('JavaSCript is the best!', uperrFirstWord)
console.log('---------------');
transformer('JavaSCript is the best!', oneWord);
*/
// -------------------------------
/*
const greet = function(greeting) {
  return function(name =  'desconocido') {
      console.log(`${greeting} ${name}`);
    }
}

const b = greet('Hey');
b();
greet('hola');

// Challenge
const greet2 = (gretting) => (name = 'desconocido') => console.log(`${gretting} ${name}`);

const a = greet2('Hey');
a();
greet2('hola');
*/
// -----------------------------------------------------------
/*
'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(fligthNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} fligth ${this.iataCode}${fligthNum}`
    );

    this.booking.push({fligth: `${this.iataCode}${fligthNum}`, name })
  },
};

lufthansa.book(239, 'Jonas Schedtman')
lufthansa.book(635, 'Jhon Smith');
console.log(lufthansa.booking);

const book = lufthansa.book;
const eurowing = {
  airline: 'Eurowing',
  iataCode: 'EW',
  booking: [],
  book,
}

// No funciona
// book(1, 'h')

book.call(eurowing, 23, 'Sara Willians')
console.log(eurowing.booking);

book.call(lufthansa, 239, 'Mary cooper');
console.log(lufthansa.booking);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
}

book.call(swiss, 583, 'Mary Copper')
console.log(swiss.booking);

// Apply Method
const fligtData = [486, 'George Copper']
book.apply(swiss, fligtData)
console.log(swiss.booking);

// 
book.call(swiss, ...fligtData);
console.log(swiss.booking);


// ------------------------------------------

// Bind metod
// book.call(eurowing, 23, 'Sara Willians')
const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(340, 'saul porras')

const bookEW23 = book.bind(eurowing, 23);
bookEW23('Jonas HEY')
bookEW23('Marta HEY');

// With event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;

  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100));

// Challenge
const addTax2 = (value) => value * 0.23;

const addTaxRate = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  }
}

const a = addTaxRate(0.23)
a(100)
*/
// ------------------------------------------------
// Coding challenge
'use strict'; 

const questionBTN = document.querySelector('.poll');

const poll = {
 question: "What is your favourite programming language?",
 options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
 // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    let orders = [this.question];
    for (const order of this.options) {
      orders.push(`\n ${order}`);
    }

    let rpt = Number(prompt(orders));
    if (/[0123]/g.test(rpt) && rpt < 4) {
      this.answers[rpt] += 1;
      this.displayResults();
      this.displayResults('string');
    }        
    else alert('Solo responde con los números del 0 al 3')
  },

  displayResults: function (tipo = 'array') {
    if (tipo === 'array') console.log(this.answers);
    else {
      let cadena = [`Los resultados de la encuesta son: ${this.answers.join(', ')}`];
      console.log(cadena.join(' '));
    }
  }
    
};

questionBTN.addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({ answers: [5, 2, 3] }, 'string')
