/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function endsWith(string, substring) {
  // Implementation here.
  if (!substring) {
    return false;
  }

  const index = string.length - substring.length;

  if (isSubstring(string, substring, index)) {
    return true;
  }

  return false;
}

function isSubstring(string, substring, index) {
  for (let subStringIndex = 0; subStringIndex < substring.length; subStringIndex++) {
    if (string[index + subStringIndex] !== substring[subStringIndex]) {
      return false;
    }
  }

  return true;
}

function displayMessage(string, substring, actualResult, expectedResult) {

  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  const inputFragment = '"' + string + "," + substring + '" ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;

  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message);
}

function testEndsWith(string, substring, expectedResult) {
  const actualResult = endsWith(string, substring);

  displayMessage(string, substring, actualResult, expectedResult);
}

function testCases() {
  testEndsWith("hello world", "ld", true);
  testEndsWith("hello world", "wor", false);
  testEndsWith("hello world", "hello", false);
  testEndsWith("hello world ", " ", true);
  testEndsWith('strings', "", false);
  testEndsWith('strings', "str", false);
}

testCases();