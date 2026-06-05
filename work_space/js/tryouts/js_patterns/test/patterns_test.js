import * as allFns from "../src/patterns.js";
import { assertEquals } from "@std/assert";

 Deno.test("filled rectangle", () => 
     assertEquals(allFns.filledRectangle([3,3]), "***\n---\n   "));

 Deno.test("filled rectangle", () => 
     assertEquals(allFns.spacedAlternating([3,3]), "***\n---\n   "));

const testCasesOfFilled = [
  {
    fnName: allFns.filledRectangle,
    fnsize: allFns.repeatRC(5, 5),
    expected: "*****\n*****\n*****\n*****\n*****",
    gist: "rectangle of size 5 * 5",
  },
  {
    fnName: allFns.filledRectangle,
    fnsize: allFns.repeatRC(0, 1),
    expected: "",
    gist: "rectangle of size 0 * 1",
  },
  {
    fnName: allFns.filledRectangle,
    fnsize: allFns.repeatRC(1, 0),
    expected: "",
    gist: "rectangle of size 1 * 0",
  },
];

const testCasesOfHollow = [
  {
    fnName: allFns.hollowRectangle,
    fnsize: allFns.repeatHollow(5, 5),
    expected: "*****\n*   *\n*   *\n*   *\n*****",
    gist: "rectangle of size 5 * 5",
  },
  {
    fnName: allFns.hollowRectangle,
    fnsize: allFns.repeatHollow(0, 1),
    expected: "",
    gist: "rectangle of size 0 * 1",
  },
  {
    fnName: allFns.hollowRectangle,
    fnsize: allFns.repeatHollow(1, 0),
    expected: "",
    gist: "rectangle of size 1 * 0",
  },
];

const testCasesOfAlternating = [
  {
    fnName: allFns.alternatingRectangle,
    fnsize: allFns.repeatRC(5, 5),
    expected: "*****\n-----\n*****\n-----\n*****",
    gist: "rectangle of size 5 * 5",
  },
  {
    fnName: allFns.alternatingRectangle,
    fnsize: allFns.repeatRC(0, 1),
    expected: "",
    gist: "rectangle of size 0 * 1",
  },
  {
    fnName: allFns.alternatingRectangle,
    fnsize: allFns.repeatRC(1, 0),
    expected: "",
    gist: "rectangle of size 1 * 0",
  },
];
const testCasesOfSpacedAlternating = [
  {
    fnName: allFns.spacedAlternating,
    fnsize: allFns.repeatRC(5, 5),
    expected: "*****\n-----\n     \n*****\n-----",
    gist: "rectangle of size 5 * 5",
  },
  {
    fnName: allFns.spacedAlternating,
    fnsize: allFns.repeatRC(0, 1),
    expected: "",
    gist: "rectangle of size 0 * 1",
  },
  {
    fnName: allFns.spacedAlternating,
    fnsize: allFns.repeatRC(1, 0),
    expected: "",
    gist: "rectangle of size 1 * 0",
  },
];

const testCasesOfTriangle = [
  {
    fnName: allFns.triangle,
    fnsize: allFns.repeatSize(5),
    expected: "*\n**\n***\n****\n*****",
    gist: "triangle of size 5 ",
  },
  {
    fnName: allFns.triangle,
    fnsize: allFns.repeatSize(0),
    expected: "",
    gist: "triangle of size 0 ",
  },
  {
    fnName: allFns.triangle,
    fnsize: allFns.repeatSize(3),
    expected: "*\n**\n***",
    gist: "triangle of size 3",
  },
];

function testCasesOfFilledRect() {
  console.log("\n--- FILLED RECT ---\n");

  testCasesOfFilled.forEach((element) => {
    performTests(
      element.fnName,
      element.fnsize,
      element.expected,
      element.gist,
    );
  });
}

function testCasesOfHollowRect() {
  console.log("\n--- HOLLOW RECT ---\n");

  testCasesOfHollow.forEach((element) => {
    performTests(
      element.fnName,
      element.fnsize,
      element.expected,
      element.gist,
    );
  });
}

function testCasesOfAlternatingRect() {
  console.log("\n--- ALTERNATING RECT ---\n");

  testCasesOfAlternating.forEach((element) => {
    performTests(
      element.fnName,
      element.fnsize,
      element.expected,
      element.gist,
    );
  });
}

function testCasesOfSpacedAlternatingRect() {
  console.log("\n--- SPACED ALTERNATING RECT ---\n");

  testCasesOfSpacedAlternating.forEach((element) => {
    performTests(
      element.fnName,
      element.fnsize,
      element.expected,
      element.gist,
    );
  });
}

function testsOfTriangle() {
  console.log("\n--- TRIANGLE---\n");

  testCasesOfTriangle.forEach((element) => {
    performTests(
      element.fnName,
      element.fnsize,
      element.expected,
      element.gist,
    );
  });
}

function testCasesOfHollowTriangle() {
  console.log("\n--- HOLLOW TRIANGLE ---\n");
  console.log(
    allFns.applyStyles(allFns.hollowTriangle, allFns.repeatSize(0)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowTriangle, allFns.repeatSize(5)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowTriangle, allFns.repeatSize(1)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowTriangle, allFns.repeatSize(2)),
    "\n",
  );
}

function displayMessage(result, expected, gist) {
  
  const isPassed = Deno.test(gist, () => 
     assertEquals(result,expected));
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += actualFragment + expectedFragment;
  }

  console.log(message);
}

function performTests(style, size, expected, gist) {
  const result = style(size).join("\n");
  displayMessage(result, expected, gist);
}

function testAll() {
  testCasesOfFilledRect();
  testCasesOfHollowRect();
  testCasesOfAlternatingRect();
  testCasesOfSpacedAlternatingRect();
  testsOfTriangle();
  // testCasesOfHollowTriangle();
}

//testAll();
