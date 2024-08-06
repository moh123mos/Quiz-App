function sheffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function toggleClass(arrOfEles, className) {
  arrOfEles.forEach((e) => {
    e.addEventListener("click", () => {
      arrOfEles.forEach((e) => e.classList.remove(className));
      e.classList.add(className);
    });
  });
}

// to move between questions
function display() {
  showQ();
  if (currentQ == 0) {
    document.querySelector(".btn-prv").classList.add("disactive");
  } else if (currentQ > 0) {
    document.querySelector(".btn-prv").classList.remove("disactive");
  }
  if (currentQ == arr.length - 1) {
    document.querySelector(".btn-next").classList.add("hide");
    document.querySelector(".submit").classList.remove("hide");
  } else {
    document.querySelector(".btn-next").classList.remove("hide");
    document.querySelector(".submit").classList.add("hide");
  }
}
