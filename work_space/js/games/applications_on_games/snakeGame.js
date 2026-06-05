const TITLE = "... SNAKE GAME ..."
function magenta(text) {
  return "\x1B[34m" + text +"\x1B[0m";
}

function blink(text) {
  return "\x1B[10m" + text + "\x1B[0m";
}

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m" ;
}

function bgWhitehite(text) {
  return "\x1B[47m" + text + "\x1B[0m";
}

function paddedLines(char, size, begin = "🟫",end = "🟫") {
  return begin + char.repeat(size - 2) + end; 
}

function positionOfFood(rowSize,columnSize) {
   const positionOfFood = [];
   positionOfFood[0] = Math.ceil(Math.random() * rowSize - 1);
   positionOfFood[1] = Math.ceil(Math.random() * columnSize - 2); 
  return positionOfFood; 
}

function placeFoodOnBoard(totalRows,totalColumns) {
  // let boardForFood = board[0].split("\n");
  // //console.log(boardForFood);

  // let arrayBoard = board.split("\n");
  // arrayBoard[5].split(" ")[] = "🔸";
  // //arrayBoard[5].split(" ")[12] = "🔸";
  // //console.log(arrayBoard[3].split(" ")[35]);
  // console.log(arrayBoard.join("\n"));

  const pattern = [];
  pattern.push(paddedLines('🟫', totalColumns).split(""));
  for (let row = 2; row < totalRows; row++) {
    const line = paddedLines("  ",totalColumns);
    pattern.push(line.split(" "));
  }
  
  pattern.push(paddedLines('🟫', totalColumns).split(" "));
 console.log(pattern);
}

function createBoard(totalRows, totalColumns) {
  const pattern = [];
  pattern.push(paddedLines('🟫', totalColumns));
  for (let row = 2; row < totalRows; row++) {
    const line = paddedLines("  ",totalColumns);
    pattern.push(line);
  }
  
  pattern.push(paddedLines('🟫', totalColumns));
 return pattern.join("\n");

}
function startGame() {
  const customizedTitle = blink(bold(magenta(TITLE)));
  console.log(customizedTitle);
  const rowSize = 20;
  const columnSize = 20;
  const board = createBoard(rowSize,columnSize);
  console.log(board);
  const spotOfFood = positionOfFood(rowSize,columnSize);
  //placeFoodOnBoard(board,20,20);
  //console.log("row",spotOfFood[0],"clmn",spotOfFood[1]);
  //board[spotOfFood[0]][spotOfFood[1]] = "🔸"; 
  //console.log(board);
 // board[0][1] = "s";
  //console.log(board.join("\n"));
}
function main() {
  startGame();
 // placeFoodOnBoard(20,20);
  
}
main();

function triangle(size) {
  const pattern = [];
  let count = 1;

  for (let row = 0; row < size; row++) {
    let line = "*".repeat(count).padStart(Math.floor(size / 2));
    pattern.push(line); 
    
  }
}