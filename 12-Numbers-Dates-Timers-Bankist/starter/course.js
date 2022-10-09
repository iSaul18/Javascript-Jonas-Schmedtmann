// const ingredients = ['olives', 'tomate'];

// // Set Time Out , ejecutar algo despues de ciertos milisegundos
// const pizzaTime = setTimeout(
//   ingredients => {
//     console.log(
//       'Aqui está su pizza con: ' + ingredients[0] + ', ' + ingredients[1]
//     );
//   },
//   1,
//   ingredients
// );

// if (ingredients.includes('spinach')) clearTimeout(pizzaTime);

// let a = 500;
// setInterval(() => {
//   console.log(a - 1);
//   a -= 1;
// }, 1000);

let seconds = 0;
let minutes = 0;
let hours = 0;

const reloj = setInterval(() => {
  seconds += 1;

  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }

  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  if (hours === 24) {
    hours = 0;
  }

  console.log(
    `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(
      seconds
    ).padStart(2, 0)}`
  );
}, 1000);
