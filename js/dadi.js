const submitBtn = document.querySelector(".btn");
submitBtn.addEventListener("click", function () {
  const userEl = document.querySelector(".user");
  let max6 = Math.ceil(Math.random() * 6);
  const userScore = max6;
  userEl.innerHTML = max6;
  const computerEl = document.querySelector(".computer");
  max6 = Math.ceil(Math.random() * 6);
  const computerScore = max6;
  computerEl.innerHTML = max6;
  const winnerEl = document.querySelector(".winner");
  if (userScore > computerScore) {
    winnerEl.innerHTML = "L'user ha vinto";
  } else if (userScore < computerScore) {
    winnerEl.innerHTML = "Il computer ha vinto";
  } else {
    winnerEl.innerHTML = "Tie";
  }
});
