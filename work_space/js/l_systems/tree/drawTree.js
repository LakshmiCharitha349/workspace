import { chunk } from "jsr:@std/collections";

const createCanvas = (height, width) => {
  const canvas = Array.from({ length: (width * 4) }).fill(" ");
  return chunk(canvas, 1);
};

const parseCanvas = (canvas) => canvas.map((x) => x.join("")).join("\n");

const drawLine = (canvas) => {
  const positionX = canvas.length - 1;
  const positionY = Math.floor(canvas[0] / 2);
  for (let index = 0; index < 4; index++) {
    canvas[positionX - index][positionY] = ".";
  }
  return parseCanvas(canvas);
};

const canvas = createCanvas(1, 1);
console.log(drawLine(canvas));
