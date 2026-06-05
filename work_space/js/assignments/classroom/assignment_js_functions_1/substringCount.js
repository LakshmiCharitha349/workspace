/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function occurrences(string, substring) {
  // Implementation here.
  if (substring === "") {
    return 0;
  }
  
  let numberOfOccurrences = 0;
  
  for (let index = 0; index < string.length; index++) {
    numberOfOccurrences = isSubstring(string, substring, index) ? numberOfOccurrences + 1 : numberOfOccurrences;
  }

  return numberOfOccurrences;
}

function isSubstring(string, substring, index) {

  for (let subStringIndex = 0; subStringIndex < substring.length; subStringIndex++) {
    if (string[index + subStringIndex] !== substring[subStringIndex]) {
      return false;
    }
  }

  return true;
}

function displayMessage(actualResult, expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  console.log(resultSymbol, "actualResult", actualResult, "expected result is ", expectedResult);
}

function testOccurrences(string, substring, expectedResult) {
  const actualResult = occurrences(string, substring);

  displayMessage(actualResult, expectedResult);
}

function testCases() {
  testOccurrences('hello world', 'l', 3);
  testOccurrences('hello world', 'll', 1);
  testOccurrences('hello world', 'world', 1);
  testOccurrences('hello world', 'zebra', 0);
  testOccurrences('hello world', ' ', 1);
  testOccurrences('hello world', 'hello world', 1);
  testOccurrences('    ', "h", 0);
  testOccurrences('', "h", 0);
  testOccurrences("hello", "", 0);

}

testCases();