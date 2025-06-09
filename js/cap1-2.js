let hours = 6;
let minutes = 0;
let seconds = 0;

setInterval(() => {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes >= 60) {
    hours = 6;
    minutes = 0;
    seconds = 0;
  }

  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");

  document.querySelector("#time").textContent = `${h}:${m}:${s}`;
}, 1000);
