const createScreen = (height, width) => {
  return {
    height,
    width,
    pixels: Array.from(
      { length: height },
      () => Array.from({ length: width }, (_) => " "),
    ),
  };
};

const drawScreen = ({ height, width, pixels }) => {
  for (let row = 0; row < height; row++) {
    for (let clmn = 0; clmn < width; clmn++) {
      pixels[row][clmn] = " ";
    }
  }
};

const displayText = ({ pixels }) => {
  // console.log(pixels);
  console.log(pixels.map((x) => x.join("")).join("\n"));
};

const putCharAt = (screen, x, y, char) => {
  if (x < 0 || x >= screen.height) return;
  if (y < 0 || y >= screen.width) return;

  screen.pixels[x][y] = char;
};

const getChar = (screen, x, y, char) => {
  screen.pixels[x][y % screen.width] = char;
};

const putTextAt = (screen, x, y, string, dx) => {
  for (let index = 0; index < string.length; index++) {
    getChar(screen, x, y + index + dx, string[index], dx);

    // putCharAt(screen, x, y + index, string[index]);
  }
  displayText(screen);
};

const putChar = (screen, x, y, char) => {
  screen.pixels[x % screen.height][y] = char;
};

const forVerticalPutTextAt = (screen, x, y, string, dx) => {
  for (let index = 0; index < string.length; index++) {
    getChar(screen, x + index + dx, y, string[index], dx);

    // putCharAt(screen, x, y + index, string[index]);
  }
  displayText(screen);
};

const drawText = (screen, x, y, string, dx) => {
  putTextAt(screen, x, y, string, dx);
};

const updateTextHorizantally = (screen, x, y, string, dx) => {
  console.clear();
  putTextAt(screen, x, y, string, dx);
};

const updateTextVertically = (screen, x, y, string, dx) => {
  console.clear();
  forVerticalPutTextAt(screen, x, y, string, dx);
};

const animateText = (screen, x, y, string) => {
  setInterval(() => {
    updateTextHorizantally(screen, x, y++, string, 0);
    updateTextHorizantally(screen, 1, y++, string, 0);
    updateTextVertically(screen, x++, 6, string, 0);

    //updateTextVertically(screen, x++, y, string);
    drawScreen(screen);
  }, 1000);
};

const main = () => {
  const screen = createScreen(20, 20);
  const string = "hello";

  animateText(screen, 0, 0, string);
};

main();
