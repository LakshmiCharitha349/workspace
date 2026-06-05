import { gettriangleArrowHeadString } from "./applyRules.js";
import { createCanvas, displayCanvas } from "./display.js";

const drawForward = (plotter, n = 6) => {
  const rad = (plotter.angle * Math.PI) / 180;
  const x = Math.cos(rad);
  const y = Math.sin(rad);

  for (let i = 0; i < n; i++) {
    plotter.x += x;
    plotter.y += y;

    screen.canvas[Math.round(plotter.y)][Math.round(plotter.x)] =
      "\x1B[40m \x1B[0m";
  }
};

const turnRight = (plotter) => {
  plotter.angle += 60;
};

const createPlotter = () => {
  const angle = 0;
  const x = 300;
  const y = 500;
  return { x, y, angle };
};
const turnLeft = (plotter) => {
  plotter.angle -= 60;
};

const draw = (string) => {
  const plotter = createPlotter();
  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    if (char === "A" || char === "B") {
      drawForward(plotter, 4);
    }
    if (char === "-") {
      turnRight(plotter);
    }

    if (char === "+") {
      turnLeft(plotter);
    }
  }
};

const screen = createCanvas(600, 700);
const string2 = gettriangleArrowHeadString(7);
const string = "F-G+F+G-F";
// console.log("string2", string2);
draw(string2);
displayCanvas(screen.canvas);
