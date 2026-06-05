function generatePattern(style, dimensions) {
  const columnLength = dimensions[0];
  const rowLength = dimensions[1];
  if (columnLength === 0 || rowLength === 0) {
    return "";
  }

  if (style === "filled-rectangle") {
    return filledRectangle("",rowLength, columnLength);
  }

  if (style === "hollow-rectangle") {
    return hollowRectangle(rowLength, columnLength);
  }

  if (style === "alternating-rectangle") {
    return alternatingRectangle(rowLength, columnLength);
  }
}

function isOdd(number) {
  return number % 2 !== 0;
}

function filledRectangle(string,rowLength, columnLength) {

  if(rowLength < 0) {
    return string;
  }
  

  if(columnLength === 0) {
    string += "\n";
    return filledRectangle(string, rowLength - 1, columnLength);
  }
  
  string += "*";
  return filledRectangle(string, rowLength, columnLength - 1);

}

function hollowRectangle(rowLength, columnLength) {
  let string = "";
  for (let row = 1; row <= rowLength; row++) {
    for (let clmn = 1; clmn <= columnLength; clmn++) {
      if (row === 1 || row === rowLength || clmn === 1 || clmn === columnLength) {
        string += "*";
      } else {
        string += " ";
      }
    }
     string += "\n";
  }
  return string;
}

function alternatingRectangle(rowLength, columnLength) {
  let string = "";
  for (let row = 1; row <= rowLength; row++) {
    for (let clmn = 1; clmn <= columnLength; clmn++) {
      if(isOdd(row)) {
        string += "*";
      } else {
        string += "-";
      }
    }
    string += "\n";
  }
  return string;
}

function displayMessage(style, dimensions, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${style} : ${dimensions}\n`;
    const actualFragment = `Result:\n${result}`;
    const expectedFragment = `Expected:\n${expected} ${result.length},${expected.length}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testGeneratePattern(style, dimensions, expected, gist) {
  const result = generatePattern(style, dimensions);
  displayMessage(style, dimensions, result, expected, gist);
}

function testCases() {
  testGeneratePattern("filled-rectangle", [2, 2], "**\n**\n", "rectangle of 2 * 2");
  // testGeneratePattern("filled-rectangle", [0, 2], "", "rectangle of 0 * 2");
  // testGeneratePattern("filled-rectangle", [0, 0], "", "rectangle of 0 * 0");
  // testGeneratePattern("filled-rectangle", [10, 0], "", "rectangle of 0 * 0");
  // testGeneratePattern("filled-rectangle", [5, 3], "*****\n*****\n*****\n", "");
  // testGeneratePattern("hollow-rectangle", [3, 3], "***\n* *\n***\n", "");
  // testGeneratePattern("alternating-rectangle", [3, 3], "***\n---\n***\n", "");

}

testCases();
