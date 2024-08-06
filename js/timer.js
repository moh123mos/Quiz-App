function timerHanle() {
  dec = 0;
  base = inputAmount * 30;
  id = setInterval(frame, 1000);
  function frame() {
    if (dec == base) {
      clearTimer();
      alert("Time Over !! \n Good Luck");
      handleTimeShow(base, 0);
      sendAnswer();
    } else {
      dec++;
      handleTimeShow(base, dec);
    }
  }
}
function clearTimer() {
  clearInterval(id);
}
function handleTimeShow(base, dec) {
  timer.style = ` background-image: conic-gradient(
              #eb3678,
              #fb773c ${(dec / base) * 100}%,
              #8080809b 0
            );`;
  let sec = base - dec;
  let mins = parseInt(sec / 60);
  sec = sec % 60;
  if (mins < 10) mins = `0${mins}`;
  if (sec < 10) sec = `0${sec}`;
  minutes.innerHTML = `${mins}: `;
  seconds.innerHTML = sec;
}
