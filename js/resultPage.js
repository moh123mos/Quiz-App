
function detemineRate(score, length) {
  let ratio = (score / length) * 100;
  if (ratio > 80) {
    rateResult.innerHTML = "Excellent";
    rateResult.className = "excel";
  } else if (ratio <= 80 && ratio >= 50) {
    rateResult.innerHTML = "Good";
    rateResult.className = "good";
  } else {
    rateResult.innerHTML = "Failure";
    rateResult.className = "fail";
  }
}
function backToQuiz() {
  arr = sheffle(arr);
  (scoreArr = []), (score = 0), (currentQ = 0);
  display();
  updateBullts(0);
  timerHanle();
  QsContainer.classList.add("show");
  showResult.classList.add("hide");
}
function showHome() {
  localStorage.setItem("showQs", "");
  location.reload();
}
