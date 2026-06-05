const disableMouse = async () => {
  const writer = Deno.stdout.writable.getWriter();
  const encoder = new TextEncoder();
  await writer.write(encoder.encode("\x1b[?1002l"));
};

import { createCanvas, displayCanvas } from "./display.js";

const stem = (x, y) => {
  // console.log("-- stem --");
  return [0, 0.16 * y];
};

const drawForward = (screen, [x, y]) => {
  const col = Math.floor(((x + 2.1820) / (2.6558 + 2.1820)) * (300 - 1));
  const row = 300 - 1 - Math.floor((y / 9.9983) * (300 - 1));

  screen.canvas[row][col] = "\x1B[44m \x1B[0m";
};

const fernBody = (x, y) => {
  // console.log("-- fern --");
  const newX = (0.85 * x) + (0.04 * y);
  const newY = (-0.04 * x) + (0.85 * y) + 1.6;
  return [newX, newY];
};

const leftLeaf = (x, y) => {
  // console.log("-- left leaf --");
  const newX = (0.2 * x) - (0.26 * y);
  const newY = (0.23 * x) + (0.22 * y) + 1.6;
  return [newX, newY];
};

const rightLeaf = (x, y) => {
  // console.log("-- right leaf --");
  const newX = (-0.15 * x) + (0.28 * y);
  const newY = (0.26 * x) + (0.24 * y) + 0.44;
  return [newX, newY];
};

const getNewPoints = (x, y) => {
  const probability = Math.random();

  if (probability <= 0.01) {
    return stem(x, y);
  }
  if (probability <= 0.86) {
    return fernBody(x, y);
  }
  if (probability <= 0.93) {
    return leftLeaf(x, y);
  }

  return rightLeaf(x, y);
};

const main = async () => {
  await disableMouse();
  let point = [0, 0];

  const screen = createCanvas(300, 300);

  for (let i = 0; i < 100000; i++) {
    point = getNewPoints(...point);

    drawForward(screen, point);
  }

  displayCanvas(screen.canvas);
};

await main();
