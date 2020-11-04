// Timer on the page
const startingMinutes = 2
let time = startingMinutes * 60

const countdownElem = document.getElementById('countdown');

setInterval(updateCountdown, 1000)

function updateCountdown() {
  const minutes = Math.floor(time / 60)
  let seconds = time % 60

  seconds = seconds <10 ? '0' + seconds : seconds

  countdownElem.innerHTML= `${minutes}: ${seconds}`;
  time--;
}

