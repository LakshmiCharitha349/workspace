/*
  Implement the below function that tells if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubstring(string, subString) {
  // Implementation here.
  if (!subString) {
    return false;
  }

  for (let index = 0; index < string.length; index++) {
    if (isSubstringFound(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function isSubstringFound(string, substring, index) {
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
  const expectedFragment = "Expected is " + expectedResult;

  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message);
}

function testIsSubString(string, substring, expectedResult) {
  const actualResult = isSubstring(string, substring);

  displayMessage(string, substring, actualResult, expectedResult);
}

function testCases() {
  testIsSubString('hello world', 'worl', true);
  testIsSubString('repeating iiiiiiii', 'iii', true);
  testIsSubString('not found', 'for', false);
  testIsSubString('test case', ' ', true);
  testIsSubString('test case', '', false);
  testIsSubString('', '', false);
}

testCases();