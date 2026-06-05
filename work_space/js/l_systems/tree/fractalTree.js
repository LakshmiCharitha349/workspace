import { getFractalTreeString } from "./applyRules.js";
import { createCanvas, displayCanvas } from "./display.js";

const createPlotter = () => {
  const angle = 280;
  const x = 20;
  const y = 780;
  return { x, y, angle };
};

const recovery = [];
const colors = [
  "\x1B[44m \x1B[0m",

  "\x1B[45m \x1B[0m",
];
const drawForward = (plotter, n = 6) => {
  const rad = (plotter.angle * Math.PI) / 180;
  const x = Math.cos(rad);
  const y = Math.sin(rad);
  const color = Math.floor(Math.random() * 4);
  for (let i = 0; i < n; i++) {
    plotter.x += x;
    plotter.y += y;
    screen.canvas[Math.round(plotter.y)][Math.round(plotter.x)] =
      "\x1B[44m \x1B[0m";
  }
};

const storePlotter = (plotter) => {
  recovery.push({ ...plotter });
  // console.log(recovery);
};

const resetPlotter = (plotter) => {
  const newPlotter = recovery.pop();
  // console.log("new", newPlotter);
  plotter.x = newPlotter.x;
  plotter.y = newPlotter.y;
  plotter.angle = newPlotter.angle;
};

const turnRight = (plotter) => {
  plotter.angle += 25;
};

const turnLeft = (plotter) => {
  plotter.angle -= 25;
};

const draw = (string) => {
  const plotter = createPlotter();

  const tools = {
    "X": () => {
      return;
    },
    "-": turnRight,
    "+": turnLeft,
    "F": drawForward,
    "[": storePlotter,
    "]": resetPlotter,
  };
  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    tools[char](plotter, 4);
  }
};

const screen = createCanvas(800, 800);
const string2 = getFractalTreeString(6);
string2.unshift("-");
// console.log("string2", string2);

draw(string2);
displayCanvas(screen.canvas);

// ["F", "+", "[", "[", "X",
//   "]", "-", "X", "]", "-",
//   "F", "[", "-", "F", "X",
//   "]", "+", "X"]
