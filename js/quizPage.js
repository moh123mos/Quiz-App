
async function fetchData() {
  await fetch(
    `https://opentdb.com/api.php?amount=${inputAmount}&${
      inputCategory === "any" ? "" : "category=" + inputCategory + "&"
    }${inputType === "any" ? "" : "type=" + inputType + "&"}${
      inputDifficulty === "any" ? "" : "difficulty=" + inputDifficulty + "&"
    }`
  )
    .then((res) => res.json())
    .then((data) => {
      arr = data.results;
      showPage();
      display();
    });
  console.log(arr);
}
function showPage() {
  //append bullts
  for (let i = 0; i < arr.length; i++) {
    if (!i) bullts.innerHTML += `<span class="active">${i + 1}</span>`;
    else bullts.innerHTML += `<span>${i + 1}</span>`;
  }
  bulltsSpan = document.querySelectorAll(".questions .bullts span");
  moveByBullts();
  showQ();
}
function showQ() {
  //question from api
  titleQ.innerHTML = arr[currentQ].question;
  optionsQ.innerHTML = "";
  // options arr
  let answerFromApi = [
    ...arr[currentQ].incorrect_answers,
    arr[currentQ].correct_answer,
  ];
  //randomize the options
  answerFromApi = sheffle(answerFromApi);
  //knowing idx of correct answer
  answerFromApi.forEach((e, i) => {
    if (e === arr[currentQ].correct_answer) ans = i;
  });
  for (let i = 0; i < answerFromApi.length; i++) {
    optionsQ.innerHTML += `
      <div class="answer_${i + 1}">
            <div class="bullt">
              <span></span>
            </div>
            <div class='answer'>${answerFromApi[i]}</div>
      </div>`;
  }
  //toggle ative class to answer from answers and calc score
  optionsOfQ = document.querySelectorAll(".options .bullt span");
  calcScore();
}
function calcScore() {
  optionsOfQ.forEach((e, i) => {
    e.addEventListener("click", () => {
      optionsOfQ.forEach((e) => e.classList.remove("active"));
      e.classList.add("active");
      if (i == ans) scoreArr[currentQ] = 1;
      else scoreArr[currentQ] = 0;
      score = scoreArr.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      // console.log("score is : " + score);
    });
  });
}
function sendAnswer() {
  QsContainer.classList.remove("show");
  showResult.classList.remove("hide");
  finalScore.innerHTML = score;
  total_Qs.innerHTML = arr.length;
  detemineRate(score, arr.length);
  clearTimer();
  handleTimeShow(inputAmount * 30, 0);
}
