import { gettriangleString } from "./applyRules.js";
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
  plotter.angle += 120;
};

const createPlotter = () => {
  const angle = 180;
  const x = screen.width - 10;
  const y = screen.height - 10;
  return { x, y, angle };
};
const turnLeft = (plotter) => {
  plotter.angle -= 120;
};

const draw = async (string) => {
  const plotter = createPlotter();
  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    console.log(char);
    if (char === "F" || char === "G") {
      drawForward(plotter, 10);
    }
    if (char === "-") {
      turnRight(plotter);
    }

    if (char === "+") {
      turnLeft(plotter);
    }
  }
};

const screen = createCanvas(300, 340);
const string2 = gettriangleString(5);
const string = "F-G";

draw(string2);
displayCanvas(screen.canvas);

// "F", "-", "G", "+",
//   "F", "+", "G", "-",
//   "F", "-", "G", "G",
//   "-", "G", "G"
