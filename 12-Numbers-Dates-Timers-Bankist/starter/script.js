'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = (date, locale) => {
  const diferenceDays = (date1, date2) =>
    Math.floor(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const dayPassed = diferenceDays(new Date(), date);

  if (dayPassed === 0) return 'Hoy';
  else if (dayPassed === 1) return 'Ayer';
  else if (dayPassed <= 7) return `Hace ${dayPassed}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrent = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sorted = false) {
  containerMovements.innerHTML = '';

  const movs = sorted
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const actualDate = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(actualDate, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatCurrent(
          mov,
          acc.locale,
          acc.currency
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrent(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrent(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrent(
    out,
    acc.locale,
    acc.currency
  ).replace('-', '');

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrent(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

const startTimeLogin = () => {
  // Set time to 5 minutes
  let minutes = 5;
  let seconds = 0;

  const actualizarTime = () => {
    labelTimer.textContent = `${String(minutes).padStart(2, 0)}:${String(
      seconds
    ).padStart(2, 0)}`;
  };

  actualizarTime();

  const contador = () => {
    // Verificar
    if (seconds === -1) {
      seconds = 59;
      minutes -= 1;
    }

    // Mostrar
    actualizarTime();

    // When 0, stop timer and log out user
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
      currentAccount = {};
      updateUI();
    }

    seconds -= 1;
  };

  // Call the timer every second
  const timer = setInterval(contador, 1000);
  return timer;
};

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display Date
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const localeLanguage = currentAccount.locale;
    labelDate.textContent = new Intl.DateTimeFormat(
      localeLanguage,
      options
    ).format(now);

    //Time
    if (timer) clearInterval(timer);
    timer = startTimeLogin();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Waiting
    setTimeout(() => {
      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      //Date of Transference
      currentAccount.movementsDates.push(new Date().toISOString());
      receiverAcc.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //Time
      clearInterval(timer);
      timer = startTimeLogin();
    }, 2000);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Waiting
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      //Date of Transference
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //Time
      clearInterval(timer);
      timer = startTimeLogin();
    }, 2000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;

  displayMovements(currentAccount, sorted);
});

/*let sorted = false;
document.querySelector('.StyledTime--zt1ewf').addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;
  console.log(sorted);
});
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
// Conversion
console.log(23 === 23.0);
console.log(Number(+'23'));

//Parsing 
console.log(Number.parseInt(1 + 2, 10));

console.log(Number.parseFloat(0.1 + 0.2, 10));

console.log(Number.isNaN(0.1 + 0.2, 10));
// Comprobate if it's a number.
console.log(Number.isFinite(0.1 + 0.2, 10));

// -----------------------------------------------------------
console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1 / 3));

console.log(Math.max(Number.parseFloat(...['10adfas', '2', 6])));
*/

// console.log(Math.sqrt(25));
// console.log(8 ** (1 / 3));

// console.log(Math.max(2, 1, '5'));
// console.log(Math.min(1, 2, 5, 6));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) => {
//   return Math.trunc(Math.random() * (max - min + 1)) + min;
// };

// console.log(randomInt(1.5, 3));

// //Ronding
// console.log(Math.trunc((0.2 + 0.1) * 10) / 10);
// console.log(Math.round(1.4));
// console.log(Math.floor(1.5));
// console.log(Math.ceil(1.5));

// // Rongind decimals
// console.log((1 + 2.4).toFixed(0));
// console.log(+(1 + 2.4).toFixed(1));

// const isEvne = n => n % 2 === 0;

// labelBalance.addEventListener('click', () => {
//   [...document.querySelectorAll('.movements__row')].forEach((x, i) => {
//     if (i % 2 === 0) x.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) x.style.backgroundColor = 'blue'
//   });
// })

// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.14_159
// console.log(PI);

// console.log(Number.parseInt('1_5'));
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2n ** 53n - 0n);
console.log(2n ** 53n + 1n);
console.log(2n ** 53n + 2n);
console.log(2n ** 53n + 3n);
console.log(2n ** 53n + 4n);
console.log(2n ** 53n + 5n);
*/

// Create a date

/*
console.log(new Date('Aug 02 2020'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(0));
*/

// Working with dates
// const days = ['domingo','lunes','martes','miercoles','jueves','viernes', 'sabado'];
// const future = new Date(2037, 10, 19);
// console.log(future.getFullYear());
// console.log(`El dia era: ${days[future.getDay()]}`);

// const diaActual = new Date(2022, 09, 4);
// console.log(diaActual.toDateString());
// console.log(days[diaActual.getDay()]);

// GetFullYear Da el año
// GetMonth Da el mes
// GetDay Da la semana

//
// const a = new Date();
// const container = [];
// container.push(a.toISOString());
// console.log(container);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);

// const num = 388474.23;
// const options = {
//   style: 'currency',
//   currency: 'USD',
// };
// console.log(new Intl.NumberFormat('es-PE', options).format(num));
