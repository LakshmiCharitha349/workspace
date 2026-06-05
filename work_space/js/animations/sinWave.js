const createScreen = (rowSize = 20, clmnSize = 50) => {
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

// let b = 0;
// let centre = 10;
// let amplitude = 8;
// let t = 0;
// const intervalId = setInterval(() => {
//   console.clear();
//   t = t + 0.1;
//   let a = Math.round(centre + Math.sin(t) * amplitude);

//   drawStarsOnScreen(screen, a, b, "*");
//   b = (b + 1) % 20;
// }, 100);

let col = 0;

let colSize = 50;
let rowSize = 20;
let amplitude = 8;
let centre = Math.floor(rowSize / 2);
let waveSpeed = 0.3;

setInterval(() => {
  col = (col + 1) % colSize;
  //drawScreen(screen);
  let row = Math.round(centre + Math.sin(col * waveSpeed) * amplitude);

  let grid = [];

  for (let r = 0; r < rowSize; r++) {
    let line = "";
    for (let c = 0; c < colSize; col++) {
      if (r === row || c === col) {
        console.log("dsfscd");
        line += "*";
      } else {
        line + -".";
      }
    }
    grid.push(line);
  }

  //console.clear();
  console.log(grid.join("\n"));
}, 120);

//drawStarsOnScreen(screen, row, col, "*");
