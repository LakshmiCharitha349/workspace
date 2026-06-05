const FILLED_RECT = "filled-rectangle";
const HOLLOW_RECT = "hollow-rectangle";
const ALTER_RECT = "alternating-rectangle";
const SPACED_RECT = "spaced-alternating-rectangle";
const TRIANGLE = "triangle";
const RIGHT_TRI = "right-aligned-triangle";

function fillStars(char,size) {
  return char.repeat(size - 2);
}

function join(pattern) {
  let stars = "";
  for (let index = 0; index < pattern.length; index++) {
    stars += pattern[index];
    stars += "\n"; 
  }

  return stars.slice(0,stars.length - 1);
}

function generatePattern(style, dimensions) {
  let pattern = [];

  const columnLength = dimensions[0];
  const rowLength = dimensions[1];
  if(columnLength === 0 || rowLength === 0) return "";

  switch (style) {
    case 'filled-rectangle':
      return filledRectangle(pattern, rowLength, columnLength);
    case 'hollow-rectangle':
      return hollowRectangle(pattern, rowLength, columnLength);
    case 'alternating-rectangle':
      return alternatingRectangle(pattern, rowLength, columnLength);
    case 'spaced-alternating-rectangle':
      return spacedAlternatingRectangle(pattern, rowLength, columnLength);
    case 'triangle':
       return triangle(pattern, length);
    case 'right-aligned-triangle':
      return rightTriangle(pattern,length);
    case "diamond" :
      return diamond(pattern, length);
    case "hollow-diamond":
      return hollowDiamond(pattern,length);
  }

}

function filledRectangle(pattern, rowLength, columnLength) {
  for (let row = 1; row <= rowLength; row++) {
    pattern.push(fillStars('*',columnLength));
  }
  console.log("pattern",pattern);
  return pattern.join("\n");
}

function symbolOfRow(number) {
  return number % 2 !== 0 ? "*" : "-";
}


function hollowRectangle(pattern, rowLength, columnLength) {
  pattern.push(fillStars('*', columnLength));
  pattern.push(fillStars('*', columnLength));

}

function alternatingRectangle(pattern, rowLength, columnLength) {

  for (let row = 1; row <= rowLength; row++) {
    const symbol = symbolOfRow(row);
     pattern += fillStars(symbol,columnLength);
  }
  return pattern.trim();
}

function symbol(row) {
  const number = row % 3;
  switch (number) {
    case 1: return "*";
    case 2: return "-";
    case 0: return " ";
  }
}

function spacedAlternatingRectangle(pattern, rowLength, columnLength) {

  for (let row = 1; row <= rowLength; row++) {
    const symbolOfRow = symbol(row);
    pattern += symbolOfRow.repeat(columnLength);

    if (row !== rowLength) pattern += "\n";

  }
  return pattern;
}

function triangle(pattern, size) {
  for (let row = 1; row <= size; row++) {
     pattern += fillStars('*',row);
  }

  return pattern.trim();
}

function rightTriangle(pattern,size) {
  for (let row = 1; row <= size; row++) {
    pattern += fillStars("*",row).padStart(size + 1," ");
   }
  return pattern.trimEnd();
}

function diamond(pattern, size) {
  let count = 1;
  for (let row = 0; row < size; row++) {
    let line= fillStars("*",count).padStart(count + Math.abs(Math.floor(size/2) - row)," ").padEnd(size," "); 
    pattern.push(line); 
    if(row >= Math.floor(size/2)) {
      count -= 2;
    } else {
      count += 2;
    }
  }

  return pattern.join("\n");
}

function holloDiamond(pattern,size) {
  let count = 1;
  for (let row = 0; row < size; row++) {
    let line= fillStars("*",count).padStart(count + Math.abs(Math.floor(size/2) - row)," ").padEnd(size," "); 
    pattern.push(line); 
    if(row >= Math.floor(size/2)) {
      count -= 2;
    } else {
      count += 2;
    }
  }

  return pattern.join("\n");
}

function displayMessage(dimensions, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${dimensions}\n`;
    const actualFragment = `Result:\n${result}\n`;
    const expectedFragment = `Expected:\n${expected}\n`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testGeneratePattern(style, dimensions, expected, gist) {
  const result = generatePattern(style, dimensions);
  displayMessage(style, dimensions, result, expected, gist);
}

function testCasesOfFilledRect() {

  console.log(FILLED_RECT);
  testGeneratePattern(FILLED_RECT, [0, 2], "", "size: 0 * 2");
  testGeneratePattern(FILLED_RECT, [0, 0], "", "size: 0 * 0");
  testGeneratePattern(FILLED_RECT, [10, 0], "", "size: 10 * 0");
  testGeneratePattern(FILLED_RECT, [2, 2], "**\n**", "size: 2 * 2");
  testGeneratePattern(FILLED_RECT,[3, 3], "***\n***\n***", "size 3 * 3");
  testGeneratePattern(FILLED_RECT,[5, 3], "*****\n*****\n*****", "size: 5 * 3");
}

function testCasesOfHollowRect() {
  testGeneratePattern(HOLLOW_RECT, [0, 0], "", "0 rows 0 clmns");
  testGeneratePattern(HOLLOW_RECT,[3, 3], "***\n* *\n***", "3 * 3 hollow rect");
  testGeneratePattern(HOLLOW_RECT, [3, 0], "", "0 rows");
  testGeneratePattern( HOLLOW_RECT,[3, 6], "***\n* *\n* *\n* *\n* *\n***", "6 * 3 hollow rect");

}

function testCasesOfAlternateRect() {
  testGeneratePattern(ALTER_RECT, [0, 0], "", "empty rectangle");
  testGeneratePattern(ALTER_RECT, [3, 3], "***\n---\n***", "");
  testGeneratePattern(ALTER_RECT, [0, 3], "", "no columns");
  testGeneratePattern(ALTER_RECT, [3, 0], "", "no rows");
}

function testCasesOfSpacedAlterRect() {
  testGeneratePattern(SPACED_RECT,
    [3, 3], "***\n---\n   ", "same rows and clomuns");
  testGeneratePattern(SPACED_RECT,
    [2, 5], "**\n--\n  \n**\n--", "2 clmns 5 rows");
  testGeneratePattern(SPACED_RECT,
    [6, 2], "******\n------", "6 clms and 2 rows");
  testGeneratePattern(SPACED_RECT,
    [4, 3], "****\n----\n    ", "3 clmns 4 rows");
  testGeneratePattern(SPACED_RECT,
     [3, 4], "***\n---\n   \n***", "3 rows, 4 clmns");
  testGeneratePattern(SPACED_RECT,
    [0, 3], "", "0 clmns,3 rows");
}

function testCasesOfTriangle() {
  testGeneratePattern( TRIANGLE, [1], "*", "triangle of size 1");
  testGeneratePattern( TRIANGLE, [0], "", "empty triangle");
  testGeneratePattern( TRIANGLE, [2], "*\n**", "triangle of size 2");
  testGeneratePattern(
    TRIANGLE, [5], "*\n**\n***\n****\n*****", "triangle of size 5");
}

function testCasesOfRightTriangle() {
  testGeneratePattern(RIGHT_TRI, [0], "", "triangle of size 0");
  testGeneratePattern(RIGHT_TRI, [1], "*", "triangle of size 1");
  testGeneratePattern(RIGHT_TRI, [2], " *\n**", "triangle of size 1");
  testGeneratePattern(
    RIGHT_TRI, [5], "    *\n   **\n  ***\n ****\n*****", "triangle of size 5");
    testGeneratePattern(
    RIGHT_TRI, [3], "  *\n **\n***", "triangle of size 5");
}

function testCasesOfDiamond() {
  testGeneratePattern("diamond", [0],"","diamond of size 0");
  testGeneratePattern("diamond", [1],"*","diamond of size 0");
  testGeneratePattern("diamond", [2],"*","diamond of size 0");
}

function testAllCases() {
  testCasesOfFilledRect();
  //testCasesOfHollowRect();
  // testCasesOfAlternateRect();
  // testCasesOfSpacedAlterRect();
  // testCasesOfTriangle();
  // testCasesOfRightTriangle();
  //testCasesOfDiamond();
}

function main() {
  testAllCases();
}

testAllCases();

