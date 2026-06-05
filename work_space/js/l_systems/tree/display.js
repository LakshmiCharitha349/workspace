import { chunk } from "jsr:@std/collections";

const whiteBg = "\x1B[47m \x1B[0m";
export const displayCanvas = (canvas) => {
  console.log(canvas.map((c) => c.join("")).join("\n"));
};

const fillCanvas = (screen) => {
  for (let i = 0; i < screen.height; i++) {
    for (let j = 0; j < screen.width; j++) {
      screen.canvas[i][j] = whiteBg;
    }
  }
};

export const createCanvas = (height = 500, width = 500) => {
  const screen = { height, width };
  screen.canvas = Array.from({ length: screen.width * screen.height });
  screen.canvas = chunk(screen.canvas, screen.height);
  fillCanvas(screen);
  return screen;
};
