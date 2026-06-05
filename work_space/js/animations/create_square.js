const createScreen = (rowSize = 20, clmnSize = 20) => {
  const frame = [];
  for (let clmn = 0; clmn < clmnSize; clmn++) {
    const row = " ".repeat(rowSize).split("");
    frame.push(row);
  }

  return frame;
};

const screen = createScreen();

const drawScreen = (screen) => {
  for (let row in screen) {
    for (let clmn in screen[row]) {
      screen[row][clmn] = "-";
    }
  }
};

const drawStarsOnScreen = (screen, x, y, character) => {
  screen[x][y] = character;
  console.log(screen.map((x) => x.join("")).join("\n"));
};

export const makeMove = (x, y, direction) => {
  const movements = {
    N: (x, y) => [x - 1, y],
    S: (x, y) => [x + 1, y],
    E: (x, y) => [x, y + 1],
    W: (x, y) => [x, y - 1],
  };

  return movements[direction](x, y);
};

let a = -1;
let b = 0;
const directions = "SENW";
let count = 0;
const size = 20;

const intervalId = setInterval(() => {
  console.clear();
  [a, b] = makeMove(a, b, directions[count % 4]);
  //drawScreen(screen);
  drawStarsOnScreen(screen, a, b, "*");
  if (a === size - 1 && b === 0) ++count;
  if (a === size - 1 && b === size - 1) ++count;
  if (a === 0 && b === size - 1) ++count;
  if (count === 4) clearInterval(intervalId);
}, 100);
