const createScreen = (rowSize = 2, clmnSize = 100) => {
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

const addString = (screen, x, y, string) => {
  console.log("x", x, "y", y);
  screen[x][y] = string;
};

const drawString = (screen, xOfw1, yOfw1, string1) => {
  addString(screen, xOfw1, yOfw1, string1);
};

const screen = createScreen();

let x = 0;
let y = 0;
let z = 100;

const string1 = "charitha";
const string2 = "lakshmi";

const intervalId = setInterval(() => {
  console.clear();
  drawScreen(screen);
  [...string1].map((char) => {
    drawString(screen, 0, y++, char);
    return char;
  });

  console.log(screen.map((x) => x.join("")).join("\n"));
}, 500);

// [...string2].map((char) => {
//     drawString(screen, 1, z--, char);
//     return char;
//   });
