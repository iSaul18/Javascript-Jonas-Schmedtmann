'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const dicesEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores = [],
  currentContainer,
  activePlayer,
  playing;

const init = function () {
  scores[0] = 0;
  scores[1] = 0;
  currentContainer = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  dicesEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentContainer = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

init();
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a ramdon dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    dicesEl.classList.remove('hidden');
    dicesEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentContainer += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentContainer;
    } else {
      // Switch to next player
      switchPlayers();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.Add current score to active playe's score
    scores[activePlayer] += currentContainer;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2.Check if player's score >= 100
    if (scores[activePlayer] >= 10) {
      // Finish Game
      playing = false;
      dicesEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayers();
    }
  }
});

btnNewGame.addEventListener('click', init);
