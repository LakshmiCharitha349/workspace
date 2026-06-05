import { getKockCurveString } from "./applyRules.js";
import { createCanvas, displayCanvas } from "./display.js";

const isEven = (num) => num % 2 === 0;
const getMid = (width) => {
  return isEven(width) ? Math.floor(width / 2) - 1 : Math.floor(width / 2);
};

const drawForward = (plotter, n = 4) => {
  for (let i = 0; i < n; i++) {
    const rad = (plotter.angle * Math.PI) / 180;
    const x = Math.round(Math.sin(rad));
    const y = Math.round(Math.cos(rad));
    // console.log("x", x, "y", y);
    plotter.x += x;
    plotter.y += y;

    screen.canvas[plotter.x][plotter.y] = "\x1B[40m \x1B[0m";
  }
};

const turnRight = (plotter) => {
  plotter.angle += 90;
};

const createPlotter = () => {
  const angle = 0;
  const x = 290;
  const y = 10;
  return { x, y, angle };
};
const turnLeft = (plotter) => {
  plotter.angle -= 90;
};

const draw = (string) => {
  const plotter = createPlotter();
  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    if (char === "F") {
      drawForward(plotter);
    }
    if (char === "-") {
      turnRight(plotter);
    }

    if (char === "+") {
      turnLeft(plotter);
    }
  }
};
const screen = createCanvas(600, 600);
const string2 = getKockCurveString(4);
// console.log("string2", string2);
const string =
  "F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F+F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F-F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F-F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F+F+F-F-F+F+F+F-F-F+F-F+F-F-F+F-F+F-F-F+F+F+F-F-F+F";
draw(string2);
displayCanvas(screen.canvas);
//
