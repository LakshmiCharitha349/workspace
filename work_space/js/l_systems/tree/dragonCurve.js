import { getDragonCurveString } from "./applyRules.js";
import { createCanvas, displayCanvas } from "./display.js";

const turnLeft = (plotter) => {
  plotter.angle -= 90;
};

const turnRight = (plotter) => {
  plotter.angle += 90;
};

const createPlotter = () => {
  const angle = 90;
  const x = 100;
  const y = 100;
  return { x, y, angle };
};

const drawForward = (plotter, n = 4) => {
  for (let i = 0; i < n; i++) {
    const rad = (plotter.angle * Math.PI) / 180;
    const x = Math.round(Math.sin(rad));
    const y = Math.round(Math.cos(rad));
    // console.log("x", x, "y", y);
    plotter.x -= x;
    plotter.y -= y;

    screen.canvas[plotter.x][plotter.y] = "\x1B[40m \x1B[0m";
  }
};

const draw = (string) => {
  const plotter = createPlotter();
  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    if (char === "F" || char === "G") {
      drawForward(plotter, 4);
    }
    if (char === "+") {
      turnRight(plotter);
    }
    if (char === "-") {
      turnLeft(plotter);
    }
  }
};

const screen = createCanvas(300, 300);
const string2 = getDragonCurveString(10);
console.log("string2", string2);
const string = string2;
draw(string);
displayCanvas(screen.canvas);
// 1[0]0
