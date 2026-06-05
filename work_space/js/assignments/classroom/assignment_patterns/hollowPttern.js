function generatePattern(style, dimensions) {
  let string = "";
  const clmnLength = dimensions[1];
  const rowLength = dimensions[0];
  if (clmnLength === 0 || rowLength === 0) {
    return string;
  }
  for (let row = 1; row <= rowLength; row++) {
    for (let clmn = 1; clmn <= clmnLength; clmn++) {
      if(row === 1 || row === rowLength || clmn === 1 || clmn === length) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
  return string;
}

function displayMessage(style, dimensions, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${style} : ${dimensions}\n`;
    const actualFragment = `Result:\n ${result}\n`;
    const expectedFragment = `Expected:\n ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testGeneratePattern(style, dimensions, expected, gist) {
  const result = generatePattern(style, dimensions);
  displayMessage(style, dimensions, result, expected, gist);
}

function testCases() {
  testGeneratePattern("filled-rectangle", [2, 2], "**\n\n**", "rectangle of 2 * 2");
  testGeneratePattern("filled-rectangle", [0, 2], "", "rectangle of 0 * 2");
  testGeneratePattern("filled-rectangle", [0, 0], "", "rectangle of 0 * 0");
  testGeneratePattern("filled-rectangle", [3, 2], "**\n**\n**", "rectangle of 0 * 0");

}

testCases();
