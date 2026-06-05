import { getBinaryTreeString } from "./applyRules.js";
import { createCanvas, displayCanvas } from "./display.js";

const isEven = (num) => num % 2 === 0;
const getMid = (width) => {
  return isEven(width) ? Math.floor(width / 2) - 1 : Math.floor(width / 2);
};

const leftTree = [];
const turnLeft = (plotter) => {
  leftTree.push({ ...plotter });
  plotter.angle -= 45;
};

const turnRight = (plotter) => {
  const newPlotter = leftTree.pop();
  plotter.x = newPlotter.x;
  plotter.y = newPlotter.y;
  plotter.angle = newPlotter.angle;
  plotter.angle += 45;
};

const createPlotter = () => {
  const angle = 90;
  const x = 500;
  const y = 250;
  return { x, y, angle };
};
const drawLine = (plotter, n = 1) => {
  for (let i = 0; i < n; i++) {
    const rad = (plotter.angle * Math.PI) / 180;
    const x = Math.round(Math.sin(rad));
    const y = Math.round(Math.cos(rad));
    plotter.x -= x;
    plotter.y += y;

    screen.canvas[plotter.x][plotter.y] = "\x1B[40m \x1B[0m";
  }
};

const draw = (string) => {
  const plotter = createPlotter();
  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    if (char === "[") {
      turnLeft(plotter);
    }
    if (char === "]") {
      turnRight(plotter);
    }

    if (char === "0") {
      drawLine(plotter, 1);
    }
    if (char === "1") {
      drawLine(plotter, 2);
    }
  }
};

const screen = createCanvas();
const string2 = getBinaryTreeString(7);
// console.log("string2", string2);
const string = string2;
draw(string);
displayCanvas(screen.canvas);
// 1[0]0
