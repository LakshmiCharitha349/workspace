/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function replace(text, match, replacement) {
  // Implementation here.
  let matchString = "";

  for (let index = 0; index < text.length; index++) {
    if (text[index] === match) {
      matchString = matchString + replacement;
    } else {
      matchString = matchString + text[index];
    }
  }

  return matchString;
}

function displayMessage(text, match, actualResult, expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅ " : "❌ ";

  const inputFragment = '"' + text + "," + match + '" ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;

  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message);
}

function testReplace(text, match, replacement, expectedResult) {
  const actualResult = replace(text, match, replacement);

  displayMessage(text, match, actualResult, expectedResult);
}

function testCases() {
  testReplace('hello world', 'l', 'n', "henno wornd");
  testReplace('no spaces here', ' ', '_', "no_spaces_here");
  testReplace('  ', 'd', 'e', "  ");
  testReplace('hello world', 'o', ' ', "hell  w rld");
}

testCases();