let pointsOfPlayer1 = 0;
let pointsOfPlayer2 = 0;

function fillStars(char, size, end = "|", begin = "|") {
  return (begin + char.repeat(size) + end).concat("\n");
}

function padSpaces(string, size, begin = "|", end = "|") {
  return begin + string.padStart(Math.floor(size / 2) + 2).padEnd(size) + end.concat("\n");
}

function displayFinalScore() {
  const score = `${padSpaces("SCORE", 23)}`;
  const underline = fillStars('=', 3, "=", "=").slice(0, 5);
  const beginLine = fillStars('_', 23, "_", "_");
  const emptyLine = fillStars(' ', 23, "|", "|");
  const player1Score = `  player1 ------>  ${pointsOfPlayer1}`;
  const player2Score = `  player2 ------>  ${pointsOfPlayer2}`;
  const endLine = fillStars('_', 23);
  const paddedUnderLine = `${padSpaces(underline, 23)}`;
  const paddingPlayer1Score = `${padSpaces(player1Score, 23)}`;
  const paddingPlayer2Score = `${padSpaces(player2Score, 23)}`;
  const resultTable = beginLine + score + paddedUnderLine + emptyLine +
    paddingPlayer1Score + paddingPlayer2Score + endLine;
  console.log(resultTable);
}

function confirmationToreStart() {
  const isRestart = confirm("Do you want to RESTART ?");

  if (isRestart) {
    pointsOfPlayer1 = 0;
    pointsOfPlayer2 = 0;
    startGame();
  }
  return;
}
function winnerWeapon(weapon1, weapon2) {
  let score = 0;

  switch (weapon1) {
    case "rock":
      score = pointsForRock(weapon2);
      break;
    case "paper":
      score = pointsForPaper(weapon2);
      break;
    case "scissor":
      score = pointsForScissor(weapon2);
      break;
  }

  return score === 1 ? weapon1 : weapon2;
}

function displayScore(weapon1, weapon2) {
  if (weapon1 === weapon2) {
    console.log("--- DRAW ---");
    console.log("Both are", weapon1);
    return;
  }

  const winner = winnerWeapon(weapon1, weapon2);
  if (winner === weapon1) {
    pointsOfPlayer1++;
    console.log("player1 wins \n");
  } else {
    pointsOfPlayer2++;
    console.log("player2 wins \n");
  }
}

function displayWeapons(weapon1, weapon2) {
  console.log("\n", weapon1, "wins on", weapon2, "\n");
}

function pointsForRock(weapon2) {
  return weapon2 === "scissor" ? 1 : 0;

}

function pointsForPaper(weapon2) {
  return weapon2 === "rock" ? 1 : 0;
}

function pointsForScissor(weapon2) {
  return weapon2 === "paper" ? 1 : 0;
}

function weaponOfPlayer1() {
  const weapon = prompt("1 st player turn");
  console.clear();
  return weapon;
}

function weaponOfPlayer2() {
  const weapon = prompt("2 st player turn");
  return weapon;
}

function displayRulesOfGame() {
  console.log("For scissors [ ✂️ ] press ---> 'scissors'");
  console.log("For rock [ 🪨 ] press ---> 'rock'");
  console.log("For paper [ 📄 ] press ---> 'paper'");
  console.log("---> You have to play 3 turns to win");
  console.log("\n*** Let START the game ***\n");
}

function runGame() {
  const player1Weapon = weaponOfPlayer1();
  const player2Weapon = weaponOfPlayer2();

  displayScore(player1Weapon, player2Weapon);
}

function startGame() {
  console.log("\n_______ROCK-PAPER-SCISSOR_____\n");
  displayRulesOfGame();

  const totalTurns = 3;
  for (let turn = 1; turn <= totalTurns; turn++) {
    runGame();
  }

  displayFinalScore();
  confirmationToreStart();
}

function main() {
  startGame();
}

main();










