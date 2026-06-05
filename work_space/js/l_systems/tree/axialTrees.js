import { Turtle } from "./turtle.js";
import { createCanvas, displayCanvas } from "./display.js";
import { getFractalTreeString, getString } from "./applyRules.js";
export const draw = (screen, string, plotter, scale) => {
  const { angle } = plotter;

  const turtle = new Turtle(screen, plotter.x, plotter.y);

  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    if (char === "F") {
      turtle.drawForward(scale);
    }
    if (char === "-") {
      turtle.turnRight(angle);
    }

    if (char === "+") {
      turtle.turnLeft(angle);
    }
    if (char === "[") {
      turtle.storePlotter();
    }
    if (char === "]") {
      turtle.resetPlotter();
    }
  }
};

const fractal = (screen) => {
  const string = getFractalTreeString(6);
  string.unshift("-");
  draw(screen, string, 25);
};

const a = () => {
  const aRules = {
    variables: ["F"],
    constants: ["[", "]", "+", "-"],
    axiom: ["F"],

    rules: { "F": ["F", "[", "+", "F", "]", "F", "[", "-", "F", "]", "F"] },
  };

  const string = getString(
    aRules.axiom,
    5,
    aRules,
  );

  const screen = createCanvas(800, 800);
  const scale = 3;
  draw(screen, string, { x: 300, y: 780, angle: 25.7 }, scale);
  displayCanvas(screen.canvas);
};

const b = () => {
  const bRules = {
    variables: ["F"],
    constants: ["[", "]", "+", "-"],
    axiom: ["F"],

    rules: { "F": "F[+F]F[-F][F]".split("") },
  };

  const screen = createCanvas(800, 800);
  const string = getString(
    bRules.axiom,
    5,
    bRules,
  );
  const scale = 10;
  draw(screen, string, { x: 300, y: 780, angle: 20 }, scale);
  displayCanvas(screen.canvas);
};

const c = () => {
  const cRules = {
    variables: ["F"],
    constants: ["[", "]", "+", "-"],
    axiom: ["F"],

    rules: { "F": "FF-[-F+F+F]+[+F-F-F]".split("") },
  };

  const screen = createCanvas(800, 800);
  const string = getString(
    cRules.axiom,
    4,
    cRules,
  );
  const scale = 10;

  draw(screen, string, { x: 300, y: 780, angle: 22.5 }, scale);
  displayCanvas(screen.canvas);
};

const d = () => {
  const dRules = {
    variables: ["F", "X"],
    constants: ["[", "]", "+", "-"],
    axiom: ["X"],

    rules: { "X": "F[+X]F[-X]+X".split(""), "F": "FF".split("") },
  };

  const string = getString(
    dRules.axiom,
    7,
    dRules,
  );

  console.log(string);
  const screen = createCanvas(800, 800);
  const scale = 3;
  draw(screen, string, { x: 300, y: 800, angle: 20 }, scale);
  displayCanvas(screen.canvas);
};

const e = () => {
  const eRules = {
    variables: ["F", "X"],
    constants: ["[", "]", "+", "-"],
    axiom: ["X"],

    rules: { "X": "F[+X][-X]FX".split(""), "F": "FF".split("") },
  };

  const string = getString(
    eRules.axiom,
    7,
    eRules,
  );

  // console.log(string);
  const screen = createCanvas(600, 600);
  // const scale = 2;
  draw(screen, string, { x: 300, y: 600, angle: 25.7 }, scale);
  displayCanvas(screen.canvas);
};

const f = () => {
  const fRules = {
    variables: ["F", "X"],
    constants: ["[", "]", "+", "-"],
    axiom: ["X"],

    rules: { "X": "F-[[X]+X]+F[+FX]-X".split(""), "F": "FF".split("") },
  };

  const string = getString(
    fRules.axiom,
    6,
    fRules,
  );

  // console.log(string);
  const screen = createCanvas(600, 600);
  const scale = 3;
  draw(screen, string, { x: 250, y: 600, angle: 22.5 }, scale);
  displayCanvas(screen.canvas);
};

const bush = () => {
  const bushRules = {
    variables: ["A", "F", "S", "L"],
    constants: ["/", "!", "+", "-", "'", "}", "]", "&", "f", "|"],
    axiom: ["A"],

    rules: {
      "A": "[&FL!A]/////'[&FL!A]///////'[&FL!A]".split(""),
      "F": "S ///// F".split(""),
      "S": "FL".split(""),
      "L": "[’’’∧∧{-f+f+f-|-f+f+f}]".split(""),
    },
  };

  const string = getString(
    bushRules.axiom,
    7,
    bushRules,
  );

  // console.log(string);
  const screen = createCanvas(600, 600);
  const scale = 3;
  draw(screen, string, { x: 250, y: 600, angle: 22.5 }, scale);
  displayCanvas(screen.canvas);
};

const makePattern = (rule, init, func, count = 5) => {
  const pattern = [];
  for (let i = 0; i < count; i++) {
    const newPattern = [];
    for (const ch in init) {
      newPattern.push(...rule);
    }
  }
};

const main = () => {
  const screen = createCanvas(800, 800);
  // const init = prompt(">> ");
  // makePattern(rules, init, funcsForCharacters, count);
  // fractal(screen);
  // a();
  // b();
  // c();
  d();
  //e();
  // f();
  // bush();
  // displayCanvas(screen.canvas);
};

main();

// console.log("string2", string2);
