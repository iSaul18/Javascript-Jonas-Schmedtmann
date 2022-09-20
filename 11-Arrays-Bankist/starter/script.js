'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Mostrar Movimientos depositos/retiros
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  console.log(movements);
  const movs = sort ? movements.slice(0).sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov < 0 ? 'withdrawal' : 'deposit';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Tipos de monedas
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Total del Dinero Actual
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((a, b) => a + b, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// Total del dinero depositado/retirado y interes
const calDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(x => x > 0)
    .reduce((a, b) => a + b, 0);
  labelSumIn.textContent = incomes + '€';

  const out = account.movements.filter(x => x < 0).reduce((a, b) => a + b, 0);
  labelSumOut.textContent = Math.abs(out) + '€';

  const interest = account.movements
    .filter(x => x > 0)
    .map(x => (x * account.interestRate) / 100)
    .filter(x => x >= 1)
    .reduce((a, b) => a + b, 0);

  labelSumInterest.textContent = interest + '€';
};

// Usernames
const createUserNames = function (acct) {
  acct.forEach(element => {
    element.username = element.owner
      .toLowerCase()
      .split(' ')
      .map(e => e[0])
      .join('');
  });
};
createUserNames(accounts);

// Actualizador
const updateStats = acc => {
  // Mostrar Movimientos
  displayMovements(acc.movements);
  // Mostrar balance
  calcDisplayBalance(acc);
  // Mostrar Summary
  calDisplaySummary(acc);
};

// Iniciar Sesion
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.trim()
  );

  if (currentAccount === undefined) {
    inputLoginUsername.style.boxShadow = 'inset 0 0 0 2px rgb(186, 53, 53)';
  }

  if (currentAccount?.pin === Number(inputLoginPin.value.trim())) {
    // Error Pasado
    inputLoginUsername.style.boxShadow = '';
    inputLoginPin.style.boxShadow = '';
    inputLoginPin.blur();
    // Mostrar App
    containerApp.style.opacity = '1';
    // Limpiar inputs
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    // Mensaje de bienvenida
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // Actualizar
    updateStats(currentAccount);
  } else {
    inputLoginPin.style.boxShadow = 'inset 0 0 0 2px rgb(186, 53, 53)';
  }
});

// Transferir
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    ({ username }) => username === inputTransferTo.value
  );

  // Limpiar los inputs
  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Doing tge transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Actualizar
    updateStats(currentAccount);
  }
});

// Prestar dinero
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    // Agregar movimiento
    currentAccount.movements.push(amount);

    // Actualizar
    updateStats(currentAccount);
  }

  inputLoanAmount.value = '';
});

// Cerrar Cuenta
btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value.trim() &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const i = accounts.findIndex(x => x === currentAccount);
    // Eliminar cuenta
    accounts.splice(i, 1);
    // Cerrar sesión
    containerApp.style.opacity = '0';
  }

  // Limpiar inputs
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

// Sort
let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;

});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const depositsFor = movements.filter(mov => mov > 0);
const withDrawals = movements.filter(mov => mov < 0);

console.log(depositsFor);
console.log(withDrawals);

console.log(movements);
const globalBalance = movements.reduce((a, b) => a + b);
console.log(globalBalance);


*/
/////////////////////////////////////////////////
/*
// SLICE Y SPLICE Hacen lo mismo, solo que splice modifica

// SLICE Hace una copia de un array
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-1));
console.log(arr.slice());

// SPLICE Roba valores del array original
console.log(arr.splice(-2));
console.log(arr);

// SPLIT separa un string por un caracter
// 
// REVERSE inverte el orden del array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['f', 'g', 'h', 'i', 'j', 'k']
console.log([...arr].reverse());
console.log(arr);

// CONCAT
const most = arr.concat(arr2)
console.log([...arr, ...arr2]);
console.log(most);

// JOIN 
console.log(most.join('-'));

// AT
const arr3 = [23, 11, 64];
console.log(arr3[arr3.length-1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));
// string
console.log('abcde'.at(-1));

*/

// --------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(`For Of---------------------`);
for (const mov of movements) {
  const rpt = mov <= 0 ? `retiro ${Math.abs(mov)}` : `Aumentó ${mov}`;
  console.log(rpt);
}

console.log(`For Each----------------------`);
movements.forEach(x => console.log(x >= 0 ? `Aumentó ${x}` : `Retiró ${Math.abs(x)}`));

*/

// ForEach in maps and seths

// Map
/*
console.log('MAP------------------');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key) => console.log(`${key}: ${value}`));

// Set
console.log('SET------------------');
const currenciesUnique = new Set(['UDS', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach((value) => console.log(`${value}`))


// ---------------------------
/*
// Coding challenge

let dataJulia = [3, 5, 2, 12, 7];
let dataKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const newArray1 = dogsJulia.slice(1, -2);
  const totalDogs = newArray1.concat(dogsKate);

  totalDogs.forEach(function (dogAge, i) {
    const rpt = dogAge >= 3 ? 'Adulto' : 'Cachorro';
    console.log(`El Perro N°${i+1} es un ${rpt}, y tiene ${dogAge} años`);
  })
}
dataJulia = [9, 16, 6, 8, 3];
dataKate = [10, 5, 6, 1, 4];
checkDogs(dataJulia, dataKate)
*/

// ----------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

const movementsDolars = movements.map(x => Math.round(x * 1.1));
const movementsUSD = movements.map(x => x * euroToUSD)
console.log(movementsDolars);

const newArray = [];
for (const movs of movements) {
  newArray.push(movs * 1.1)
}

movements.map((mov, i, arr) => {
  
})

*/
/*
const movements = [-1000, 200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements.reduce((acumulator, actual) => actual > acumulator ? actual : acumulator);

console.log(max);
*/

// --------------------------------------------------------------------------
// Coding challenge 3
/*
const calcAverageHumanAge = (dogAges) => {
  const converterAgeHuman = dogAges.map(ageI => ageI <= 2 ? ageI * 2 : 16 + ageI * 4);
  const filterAges = converterAgeHuman.filter(ageI => ageI >= 18);

  const ageProm = filterAges.reduce((acc, actual, i ,arr) =>
    acc + (actual / arr.length), 0);

  return ageProm;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

*/

// --------------------------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositUSD = movements
  .filter(x => x > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);

  */
/*
// Coding challenge 3
const calcAverageHumanAge = dogAges => {
  return dogAges
    .map(ageI => (ageI <= 2 ? ageI * 2 : 16 + ageI * 4))
    .filter(ageI => ageI >= 18)
    .reduce((acc, actual, i, arr) => acc + actual / arr.length, 0);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/*

const mov = [10, 50, 20, 50, 40, 30, 60, 50, 80, 90, 40, 70];
const a = mov.find(x => x > 30);

const ja = [{ name: 'saul', a:50}, { name:'erick', a:50}];
console.log(ja.find(x => x.a === 50));
*/
/*
const arrayMetodos = function () {
  const a = [1, 2, 3, 4, 5, 6];
  const b = new Array(4).fill(0)
  console.log(a);
  console.log(b);
  let c = [1];
  c = Array.from({ length: 4 }, (_, i) => Math.trunc(Math.random()*6)+1);
  console.log(c);
};

console.log(arrayMetodos());
*/


labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '$')));
  
  // console.log([...document.querySelectorAll('.movements__value')]);
  console.log(movementsUI);
});