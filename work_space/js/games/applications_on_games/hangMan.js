function createHangMan(turn) {
  const hangMan = ["Face", "Hands", "legs", "Man", "Hung"];
  return hangMan[turn];
}

function updateGuessWord(word, guessWord, char) {
  let newWord = guessWord.split("");
  for (let index = 0; index < word.length; index++) {
    if (word[index] === char) {
      newWord[index] = char;
      console.log("new word", newWord[index]);
    }
  }
  return newWord.join("");
}

function guessLetter() {
  return prompt("Guess a letter");
}

function playGame(word, guessWord, totalTurns) {
  let turn = 0;

  while (turn <= totalTurns) {
    const guesChar = guessLetter();
    guessWord = updateGuessWord(word, guessWord, guesChar);
    if (guessWord.includes(guesChar)) {
      console.log(guessWord);
    } else {
      const createMan = createHangMan(turn);
      console.log(createMan);
      turn++;
      if (createMan === "Hung") {
        console.log("You lost the game ....");
        return;
      }
    }
    if (guessWord === word) {
      console.log("***** YOU WIN *****");
      return;
    }
  }

}
function displayRulesOfGame() {
  console.log(" ---> Guess letters of a word");
  console.log(" ---> For each wrong guess a man is created");
  console.log(" ---> You have limited wrong guesses");
  console.log(" ---> If guesses completed man is hung \n");
}
function startGame() {
  console.log("       _____HANGMAN_____      \n");
  displayRulesOfGame();
  const word = "laptab";
  const guessWord = "______";
  playGame(word, guessWord, 5);

}
function main() {
  startGame();
}

main();