import { createGame } from "./script.js";

const player1 = "Player 1";
const player2 = "Player 2";
const game = createGame(player1, player2);

const scoreDisplay = document.getElementById("score");
const setDisplay = document.getElementById("sets");
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const resetBtn = document.getElementById("resetBtn");

const updateScore = () => {
  const currentScore = game.score();
  scoreDisplay.textContent = currentScore;
  setDisplay.textContent = `Sets: ${game.getSets()}`;

  scoreDisplay.classList.add("scale-105", "text-indigo-700");
  setTimeout(() => scoreDisplay.classList.remove("scale-105", "text-indigo-700"), 150);
};

player1Btn.addEventListener("click", () => {
  game.pointWon(player1);
  updateScore();
});

player2Btn.addEventListener("click", () => {
  game.pointWon(player2);
  updateScore();
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
