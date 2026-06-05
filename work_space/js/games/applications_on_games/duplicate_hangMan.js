const TITLE = "_____ HANG MAN _____";
function createHangMan(turn) {
  const hangManPics = [`
  +---+
  |   |
      |
      |
      |
      |
      |
      |
=========`, `
  +---+
  |   |
  O   |
      |
      |
      |
=========`, `
  +-----+
  |     |
  O     |
 /|     |
        |
        |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`, `
  +---+
  |    |
  O    |
 /|\\   |
 /     |
       |
=========`, `
  +---+
  |    |
  O    |
 /|\\   |
 / \\   |
       |
=========`];
  console.log(hangManPics[turn]);
}

function generateWord() {
  const words = (`ant baboon badger bat bear beaver camel cat clam cobra cougar ` +
    `coyote crow deer dog donkey duck eagle ferret fox frog goat killer ` +
    `goose hawk lion lizard llama mole monkey moose murderer mouse mule new ` +
    `potter owl panda parrot pigeon python rabbit ram conscious raven ` +
    `rhino salmon seal quiz zinc shark sheep skunk sloth snake spider ` +
    `stork swan tiger toad trout turkey turtle weasel whale wolf ` +
    `wombat thoughts`).split(" ");

  return words[Math.floor(Math.random() * 68)];
}

function updateGuessWord(word, guessWord, char) {
  let newWord = guessWord.split("");

  for (let index = 0; index < word.length; index++) {
    if (word[index] === char) {
      newWord[index] = char;
    }
  }

  return newWord.join("");
}

function guessLetter() {
  return prompt("Guess a letter");
}

function playGame(word, guessWord, totalTurns) {
  let turn = 0;
  while (turn < totalTurns) {
    const guessChar = guessLetter();
    guessWord = updateGuessWord(word, guessWord, guessChar);
    if (guessWord.includes(guessChar)) {
      console.log(guessWord);
    } else {
      createHangMan(turn);
      turn++;
    }

    if (guessWord === word) {
      console.log("***** YOU WIN *****");
      return;
    }
  }
  console.log("You lost....");
  console.log("Word is ", word);
}

function displayRulesOfGame() {
  console.log(" ---> Guess letters of a word");
  console.log(" ---> For each wrong guess a man is created");
  console.log(" ---> You have limit of 6 wrong guesses");
  console.log(" ---> If all guesses completed man is hung you will lose \n");
}

function startGame() {
  console.log(TITLE);
  displayRulesOfGame();
  const word = generateWord();
  const guessWord = "_".repeat(word.length);
  playGame(word, guessWord, 6);
}

function main() {
  startGame();
}

main();