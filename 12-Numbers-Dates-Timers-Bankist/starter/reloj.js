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
