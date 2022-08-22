// Remember, we're gonna use strict mode in all scripts now!

// "use strict";

// const dateTemperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const dateTemperatures2 = [2, 8, 10, 17, -5];

// const dateTemperaturesFusion = dateTemperatures.concat(dateTemperatures2);

// const temperatures = [];

// for (let i = 0; i < dateTemperatures.length; i++) {
//   if (typeof dateTemperatures[i] === "number") {
//     temperatures.push(dateTemperatures[i]);
//   } else if (typeof dateTemperatures !== "number") {
//     continue;
//   }
// }

// const maxTemperature = Math.max.apply(null, temperatures);
// const minTemperature = Math.min.apply(null, temperatures);

// console.log(
//   `La temperatura maxima es ${maxTemperature}, la temperatura minima es: ${minTemperature}, y la amplitud de temperatura es ${
//     maxTemperature - minTemperature
//   }`
// );

// const calTemAmpitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     if (typeof dateTemperaturesFusion[i] !== "number") continue;

//     if (temps[i] > max) max = temps[i];

//     if (temps[i] < min) min = temps[i];
//   }

//   return max - min;
// };

// const calAmplitud = calTemAmpitude(dateTemperaturesFusion);

// console.log(calAmplitud);

// ******************************************************

("user strict");

const repetidor = (array) => {
  let contenedor = [];
  let constructor = array.forEach((element, i) => {
    contenedor.push(`...${element}°C in ${i + 1} day`);
  });

  let respuesta = contenedor.join("");

  return respuesta;
};

console.log(repetidor([10, 11, 12, 13, 1]));
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "cels",
//     value: Number(prompt("celsius:")),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// IDENTIFICAR
// const calTemAmpitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     if (typeof dateTemperaturesFusion[i] !== "number") continue;

//     if (temps[i] > max) max = temps[i];

//     if (temps[i] < min) min = temps[i];
//   }

//   return max - min;
// };

// const calAmplitud = calTemAmpitude(dateTemperaturesFusion);

// console.log(calAmplitud);

const valor = [1, 2, 3, 4, 5, , 6];
