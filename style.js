let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timerDisplay = document.getElementById("timerDisplay");

let msec = 0;
let secs = 0;
let mins = 0;

let interval = null;

// Start button
start.addEventListener("click", function () {
  if (interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer, 10);
});

// Stop button
stop.addEventListener("click", function () {
  clearInterval(interval);
});

// Reset button
reset.addEventListener("click", function () {
  clearInterval(interval);
  msec = 0;
  secs = 0;
  mins = 0;
  timerDisplay.innerText = "00 : 00 : 00";
});

// Timer function
function startTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
  }

  // Format the time
  let msecString = msec < 10 ? "0" + msec : msec;
  let secsString = secs < 10 ? "0" + secs : secs;
  let minsString = mins < 10 ? "0" + mins : mins;

  // Update display
  timerDisplay.innerText = `${minsString} : ${secsString} : ${msecString}`;
}
