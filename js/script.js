
if (localStorage.getItem("showQs") === "done") {
  QsContainer.classList.add("show");
} else {
  info.classList.add("show");
}
async function start_Quiz() {
  startQuiz.addEventListener("click", () => {
    takeInput();
    fetchData();
    moveByBtns();
    timerHanle();
    displayQuiz();
  });
}
function takeInput() {
  inputAmount = parseInt(inputAmount.value) || 1;
  inputCategory = inputCategory.value || "any";
  inputType = inputType.value || "any";
  inputDifficulty = inputDifficulty.value || "any";
}
function displayQuiz() {
  info.classList.remove("show");
  QsContainer.classList.add("show");
}

// under implementation ..
function saveOnLocalStorage() {
  localStorage.setItem("showQs", "done");
}
start_Quiz();
