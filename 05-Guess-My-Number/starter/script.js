'user strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const highScore = document.querySelector('.highscore');
const numberBox = document.querySelector('.number');
const numberInput = document.querySelector('.guess');
const mensaje = document.querySelector('.message');
const againBTN = document.querySelector('.again');
const score = document.querySelector('.score');
const body = document.querySelector('body');
const checkBTN = document.querySelector('.check');

const cambiarContenido = (elemento, contenido) => {
  return (elemento.textContent = contenido);
};

const cambiarEstilo = (elemento, propiedad, valor) => {
  return (elemento.style[propiedad] = valor);
};

const cambiarValor = (elemento, Newvalor) => {
  return (elemento.value = Newvalor);
};

checkBTN.addEventListener('click', function () {
  // Cuando no hay nada insertado en el input
  if (!numberInput.value) {
    cambiarContenido(mensaje, '⛔ No number ❗');

    // Cuando el jugador gana
  } else if (Number(numberInput.value) === secretNumber) {
    cambiarContenido(numberBox, secretNumber);
    cambiarContenido(mensaje, '✨Correct Number!🎉');
    cambiarEstilo(body, 'backgroundColor', '#60b347');
    cambiarEstilo(numberBox, 'width', '30rem');

    if (score.textContent > highScore.textContent)
      cambiarContenido(highScore, score.textContent);

    // Cuando el numero dado es diferente que secretNumber
  } else if (numberInput.value !== secretNumber) {
    if (score.textContent > 1) {
      let hilow =
        numberInput.value > secretNumber ? 'Too higth 📈' : 'Too Low 📉';
      cambiarContenido(mensaje, hilow);
      console.log(secretNumber);
      score.textContent--;
    } else {
      cambiarContenido(mensaje, '💥You lost the game!');
      cambiarEstilo(body, 'backgroundColor', '#ca1a1a');
      cambiarContenido(score, '0');
    }
  }
});

againBTN.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  cambiarContenido(mensaje, 'Start guessing...');
  cambiarContenido(score, '20');
  cambiarContenido(numberBox, '?');
  cambiarEstilo(body, 'backgroundColor', '#222');
  cambiarEstilo(numberBox, '15rem');
  cambiarValor(numberInput, '0');
});
