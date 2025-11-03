const POINTS = ["Love", "Fifteen", "Thirty", "Forty"];

export const createGame = (player1, player2) => {
  let scores = { [player1]: 0, [player2]: 0 };
  let sets = { [player1]: 0, [player2]: 0 };
  let gameOver = false;

  const pointWon = player => {
    if (gameOver) return;
    scores[player]++;
  };

  const resetGame = () => {
    scores = { [player1]: 0, [player2]: 0 };
    gameOver = false;
  };

  const score = () => {
    const [p1, p2] = [scores[player1], scores[player2]];

    if (p1 >= 4 && p1 - p2 >= 2) {
      sets[player1]++;
      gameOver = true;
      resetGame();
      return `Game ${player1}!`;
    }
    if (p2 >= 4 && p2 - p1 >= 2) {
      sets[player2]++;
      gameOver = true;
      resetGame();
      return `Game ${player2}!`;
    }

    if (p1 >= 3 && p2 >= 3) {
      if (p1 === p2) return "Deuce";
      if (Math.abs(p1 - p2) === 1) return `Advantage ${p1 > p2 ? player1 : player2}`;
    }

    return `${POINTS[p1] ?? POINTS[3]}-${POINTS[p2] ?? POINTS[3]}`;
  };

  const getSets = () => `${sets[player1]} - ${sets[player2]}`;

  return { pointWon, score, getSets };
};
