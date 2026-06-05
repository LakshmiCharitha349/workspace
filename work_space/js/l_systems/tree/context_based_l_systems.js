import { createCanvas, displayCanvas } from "./display.js";
import { draw } from "./axialTrees.js";

const isCharVariable = (char, rules) => rules.variables.includes(char);

const applyProductionRules = (char, string, rules) => {
  if (isCharVariable(char, rules)) {
    // console.log({ string });
    rules.index++;
    // console.log({ index });
    const lChar = string[rules.index - 1];
    const rChar = string[rules.index + 1];
    const newString = rules.rules[`${lChar}${char}${rChar}`];
    // console.log("lChar", lChar, "rChar", rChar, newString);
    return newString ? newString : char;
  }

  if (rules.vars.includes(char)) {
    return rules.varRules[char];
  }

  return char;
};

const applyRulesString = (string, rules) => {
  const result = [];
  rules.index = -1;
  // console.log("in", string);
  const ignoredString = string.filter((c) => !rules.ignored.includes(c));

  // console.log({ string });
  for (let i = 0; i < string.length; i++) {
    const char = applyProductionRules(string[i], ignoredString, rules);
    // console.log("fsdc", char);
    result.push(...char.split(""));
  }

  return result;
};

export const getString = (string, levels, productionRules) => {
  if (levels == 0) {
    return string;
  }

  const generatedString = applyRulesString(
    string,
    productionRules,
  );

  return getString(generatedString, levels - 1, productionRules);
};

const a = () => {
  const aRules = {
    variables: ["0", "1"],
    vars: ["+", "-"],
    constants: ["F"],
    ignored: ["F", "+", "-"],
    axiom: "F1F1F1".split(""),
    index: -1,
    rules: {
      "000": "0",
      "001": "1[+F1F1]",
      "010": "1",
      "011": "1",
      "100": "0",
      "101": "1F1",
      "110": "0",
      "111": "0",
    },
    varRules: {
      "+": "-",
      "-": "+",
    },
  };

  const string = getString(
    aRules.axiom,
    45,
    aRules,
  );
  console.log("finl", string);
  const screen = createCanvas(600, 600);
  const scale = 4;
  draw(screen, string, { x: 250, y: 600, angle: 22.5 }, scale);
  displayCanvas(screen.canvas);
};

const e = () => {
  const eRules = {
    variables: ["0", "1"],
    vars: ["+", "-"],
    constants: ["F"],
    ignored: ["F", "+", "-"],
    axiom: "F1F1F1".split(""),
    index: -1,
    rules: {
      "000": "0",
      "001": "1[-F1F1]",
      "010": "1",
      "011": "1",
      "100": "0",
      "101": "1F1",
      "110": "0",
      "111": "0",
    },
    varRules: {
      "+": "-",
      "-": "+",
    },
  };

  const string = getString(
    eRules.axiom,
    45,
    eRules,
  );
  console.log("finl", string);
  const screen = createCanvas(600, 600);
  const scale = 4;
  draw(screen, string, { x: 250, y: 600, angle: 22.5 }, scale);
  displayCanvas(screen.canvas);
};

const d = () => {
  const dRules = {
    variables: ["0", "1"],
    vars: ["+", "-"],
    constants: ["F"],
    ignored: ["F", "+", "-"],
    axiom: "F0F1F1".split(""),
    index: -1,
    rules: {
      "000": "1",
      "001": "0",
      "010": "0",
      "011": "1F1",
      "100": "1",
      "101": "1[+F1F1]",
      "110": "1",
      "111": "0",
    },
    varRules: {
      "+": "-",
      "-": "+",
    },
  };

  const string = getString(
    dRules.axiom,
    34,
    dRules,
  );
  console.log("finl", string);
  const screen = createCanvas(600, 600);
  const scale = 6;
  draw(screen, string, { x: 250, y: 600, angle: 25.75 }, scale);
  displayCanvas(screen.canvas);
};

const main = () => {
  // a();
  d();
};

main();
