const createScreen = (rowSize = 10, clmnSize = 10) => {
  const frame = [];
  for (let clmn = 0; clmn < clmnSize; clmn++) {
    const row = " ".repeat(rowSize).split("");
    frame.push(row);
  }

  return frame;
};

const drawScreen = (screen) => {
  for (let row in screen) {
    for (let clmn in screen[row]) {
      screen[row][clmn] = " ";
    }
  }
};

const addString = (x, y, string) => {
  screen[x][y] = string;
};

const drawString = (screen, xOfw1, yOfw1, xOfw2, yOfw2, string1, string2) => {
  addString(xOfw1, yOfw1, string1);
  addString(xOfw2, yOfw2, string2);
  console.log(screen.map((x) => x.join("")).join("\n"));
};

const screen = createScreen();

let x = 0;
let y = 0;
let a = 1;
let b = 10;

const intervalId = setInterval(() => {
  console.clear();
  drawScreen(screen);

  drawString(screen, x, y++, a, b--, "charitha", "bharathi");
  if (y === 10 || b === 0) {
    y = 0;
    b = 10;
  }
}, 200);
