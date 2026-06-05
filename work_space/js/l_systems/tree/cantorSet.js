import { getCantorSetString } from "./applyRules.js";
import { createCanvas, displayCanvas } from "./display.js";

const drawForward = (plotter, n) => {
  for (let i = 0; i < n; i++) {
    screen.canvas[plotter.x][plotter.y] = "\x1B[40m \x1B[0m";
    plotter.y++;
  }
};

const moveForward = (plotter, n) => {
  for (let i = 0; i < n; i++) {
    screen.canvas[plotter.x][plotter.y] = "\x1B[47m \x1B[0m";
    plotter.y++;
  }
};

const createPlotter = () => {
  const angle = 90;
  const x = 20;
  const y = 30;
  return { x, y, angle };
};

const draw = (string, plotter, n) => {
  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    if (char === "A") {
      drawForward(plotter, n);
    }

    if (char === "B") {
      moveForward(plotter, n);
    }

    if (char === "+") {
      turnLeft(plotter);
    }
    if (char === "-") {
      turnRight(plotter);
    }
  }
};

let segmentWidth = 243;
const screen = createCanvas(200, 300);
let string = ["A"];
const plotter = createPlotter();

let iteration = 1;
for (let i = 0; i < 6; i++) {
  draw(string, plotter, segmentWidth);
  string = getCantorSetString(iteration);
  iteration++;
  plotter.x += 3;
  plotter.y = 30;
  segmentWidth = segmentWidth / 3;
}
string = getCantorSetString(5);
draw(string, plotter, 1);
displayCanvas(screen.canvas);
// ABA

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||                   |||||||||||||||||||||||||||
// |||||||||         |||||||||                   |||||||||         |||||||||
// |||   |||         |||   |||                   |||   |||         |||   |||
// | |   | |         | |   | |                   | |   | |         | |   | |
// | |   | |         | |   | |                   | |   | |         | |   | |
