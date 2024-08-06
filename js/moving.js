
function moveByBtns() {
  document.querySelector(".btn-next").addEventListener("click", () => {
    currentQ++;
    display();
    updateBullts(currentQ);
  });
  document.querySelector(".btn-prv").addEventListener("click", () => {
    currentQ--;
    display();
    updateBullts(currentQ);
  });
}
function moveByBullts() {
  bulltsSpan.forEach((e, i) => {
    e.addEventListener("click", () => {
      bulltsSpan.forEach((e) => e.classList.remove("active"));
      e.classList.add("active");
      currentQ = i;
      display();
    });
  });
}
function updateBullts(i) {
  bulltsSpan.forEach((e, j) => {
    if (i != j) e.classList.remove("active");
    else e.classList.add("active");
  });
}
