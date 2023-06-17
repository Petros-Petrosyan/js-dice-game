const START_BUTTON = document.querySelector(".btn-new");
const DICE_BUTTON = document.querySelector(".btn-roll");
const PLAYER_0 = document.querySelector(".player-0-panel");
const PLAYER_1 = document.querySelector(".player-1-panel");
const DICE = document.querySelector(".dice");
const CURRENT_0 = document.getElementById("current-0");
const CURRENT_1 = document.getElementById("current-1");
const SCORE_0 = document.getElementById("score-0");
const SCORE_1 = document.getElementById("score-1");
const NAME_0 = document.getElementById("name-0");
const NAME_1 = document.getElementById("name-1");
const FINAL_SCORE_INPUT = document.querySelector(".btn-final-score");
const FINAL_SCORE_TEXT = document.getElementById("txt-final-score");

START_BUTTON.addEventListener("click", () => {
  let finalScoreValue = +FINAL_SCORE_INPUT.value;
  if (finalScoreValue < 101 || finalScoreValue > 301) {
    alert(" Enter final score: \n The final score between 101 and 301");
    FINAL_SCORE_INPUT.value = "";
  } else {
    FINAL_SCORE_INPUT.style.display = "none";
    FINAL_SCORE_TEXT.style.display = "inline-block";
    FINAL_SCORE_TEXT.innerText =
      "the final score is " + FINAL_SCORE_INPUT.value;
    NAME_0.innerHTML = "Player 1";
    NAME_1.innerHTML = "Player 2";
    SCORE_0.innerHTML = "0";
    SCORE_1.innerHTML = "0";
    CURRENT_0.innerHTML = "0";
    CURRENT_1.innerHTML = "0";
    DICE.src = "img/dice-5.png";
    PLAYER_0.classList.remove("active");
    PLAYER_1.classList.remove("active");
    let randomPlayer = Math.floor(Math.random() * 2);
    if (randomPlayer === 0) {
      PLAYER_0.classList.add("active");
    } else {
      PLAYER_1.classList.add("active");
    }
    START_BUTTON.innerHTML = "dice gamer";
  }
});

DICE_BUTTON.addEventListener("click", () => {
  let AUDIO = document.getElementById("audio");
  AUDIO.play();
  let randomDice = Math.floor(Math.random() * 6) + 1;
  DICE.src = "img/dice-" + randomDice + ".png";
  if (PLAYER_0.className === "player-0-panel active") {
    CURRENT_0.innerHTML = +CURRENT_0.innerHTML + randomDice;
    SCORE_0.innerHTML = +SCORE_0.innerHTML + randomDice;
  } else {
    CURRENT_1.innerHTML = +CURRENT_1.innerHTML + randomDice;
    SCORE_1.innerHTML = +SCORE_1.innerHTML + randomDice;
  }
  if (randomDice === 1) {
    PLAYER_0.classList.toggle("active");
    PLAYER_1.classList.toggle("active");
    CURRENT_0.innerHTML = "0";
    CURRENT_1.innerHTML = "0";
  }
  if (+SCORE_0.innerHTML >= +FINAL_SCORE_INPUT.value) {
    START_BUTTON.innerHTML = "start game";
    NAME_0.innerHTML = "you win";
    PLAYER_0.classList.remove("active");
    FINAL_SCORE_INPUT.style.display = "inline-block";
    FINAL_SCORE_INPUT.value = "";
    FINAL_SCORE_TEXT.style.display = "none";
    let audioWin = document.getElementById("win");
    audioWin.play();
  } else if (+SCORE_1.innerHTML >= +FINAL_SCORE_INPUT.value) {
    START_BUTTON.innerHTML = "start game";
    NAME_1.innerHTML = "you win";
    PLAYER_1.classList.remove("active");
    FINAL_SCORE_INPUT.style.display = "inline-block";
    FINAL_SCORE_INPUT.value = "";
    FINAL_SCORE_TEXT.style.display = "none";
    let audioWin = document.getElementById("win");
    audioWin.play();
  }
});
