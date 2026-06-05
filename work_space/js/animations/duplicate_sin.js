const rows = 25;
const columns = 100;
const screenCreation = function (rows, columns) {
  const arr = " ".repeat(rows).split("");
  return arr.map(() => " ".repeat(columns).split(""));
};

let screen = screenCreation(rows, columns);

function drawScreen(screen) {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = " ";
    }
  }
}

function addText(abscissa, ordinate, text, screen) {
  if (
    abscissa >= 0 && abscissa < screen.length && ordinate >= 0 &&
    ordinate < screen[0].length
  ) {
    screen[abscissa][ordinate] = text;
  }
}

function drawOnScreen(abscissa, ordinate, text, screen) {
  addText(abscissa, ordinate, text, screen);
}
let t = 0;

setInterval(() => {
  screen = screenCreation(rows, columns);
  drawScreen(screen);
  console.clear();
  const amplitude = 8;
  const center = Math.floor(rows / 2);
  const speed = 0.5;
  for (let x = 0; x < columns; x++) {
    const y = Math.floor(
      center + Math.sin(x * 0.1 + t) * amplitude,
    );
    console.log("y", y);
    const z = Math.floor(
      center + Math.cos((x * 0.15) + t) * amplitude,
    );
    drawOnScreen(y, x, "*", screen);
    //drawOnScreen(z, x, "^", screen);
  }
  t += speed;

  console.log(screen.map((row) => row.join("")).join("\n"));
}, 500);

// center     – vertical middle of the wave
// amplitude  – height of the wave (up–down)
// x * 0.15   – wavelength
// t          – wave motion (time shift / movement)
// sin()   – wave shape (like sin,cos or tan)
// if we use negitive values sin moves in opposite direction
