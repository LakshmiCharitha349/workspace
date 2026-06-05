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
      screen[row][clmn] = " ";
    }
  }
};

const drawStarsOnScreen = (screen, x, y, character) => {
  screen[x][y] = character.repeat(5);
  console.log(screen.map((x) => x.join("")).join("\n"));
};

let x = 0;
let y = -1;
let count = 0;
let size = 0;

const intervalId = setInterval(() => {
  console.clear();
  //drawScreen(screen);
  y = x > (Math.floor(5 / 2) + size) ? y - 1 : y + 1;
  drawStarsOnScreen(screen, x++, y, "*");

  size = x % 5 === 0 && x !== 0 ? size + 5 : size;
}, 500);

/*DRAW STARS `***
               ***
                ***
             ***
              ***
               *** `   */

// const drawStarsOnScreen = (screen, x, y, character) => {
//   screen[x][y] = character.repeat(6);
//   console.log(screen.map((x) => x.join("")).join("\n"));
// };

// let x = 0;
// let y = 0;

// const intervalId = setInterval(() => {
//   console.clear();
//   //drawScreen(screen);
//   drawStarsOnScreen(screen, x++, y++, "*");

//   if (x % 6 === 0) y = 0;
// }, 800);
