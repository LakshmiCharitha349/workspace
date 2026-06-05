const filled = (char, size) => char.repeat(size);

const hollowLine = (size) => {
  if (size === 1) {
    return "*";
  }
  return `*${filled(" ", size - 2)}*`;
};

export const repeatSize = function (size) {
  const result = [];
  for (let row = 1; row <= size[0]; row++) {
    result.push(row);
  }

  return result;
};

export const repeatRC = function (size) {
  if (size[1] === 0) return [];

  const result = [];
  for (let row = 1; row <= size[0]; row++) {
    result.push(size[1]);
  }

  return result;
};

export const repeatHollow = (size) => {
  const rowSize = size[0];
  const clmnSize = size[1];

  if (clmnSize === 0 || rowSize === 0) {
    return [];
  }
  return [clmnSize, repeatRC([rowSize - 2, clmnSize]), clmnSize];
};

export const hollowTriangle = function (size) {
  const lines = repeatSize(size);

  const result = [];
  result.push(lines.slice(0, -1).map((row) => hollowLine(row)));
  result.push(filled("*", lines[lines.length - 1]));

  return result.flat();
};

export const triangle = function (size) {
  const lines = repeatSize(size);
  return lines.map((x) => filled("*", x));
};

const chooseChar = (index, size) => {
  const chars = "*- ";
  return chars[index % size];
};

export const alternatingRectangle = function (size) {
  const lines = repeatRC(size);
  return lines.map((row, index) => filled(chooseChar(index, 2), row)).join("\n");
};

export const spacedAlternating = function (size) {
  const lines = repeatRC(size);
  return lines.map((row, index) => filled(chooseChar(index, 3), row)).join("\n");
};

export const hollowRectangle = function (size) {
  const lines = repeatHollow(size);

  return lines.map((element) => {
    if (Array.isArray(element)) {
      return element.map((x) => hollowLine(x));
    }

    return filled("*", element);
  }).flatMap((row) => row).join("\n");

  // pattern.push(filled("*", size[0]));
  // pattern.push(size.slice(1, -1).map(x => hollowLine(x)));
  // pattern.push(filled("*", size[size.length - 1]));

  // return pattern.flat();
};

export const filledRectangle = function (size) {
  const lines = repeatRC(size);
  return lines.map((row) => filled("*", row)).join("\n");
};
