/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  // Implementation here.
  for (let index = 0; index < text.length; index++) {
    if (isSubstring(text, target, index)) {
      return index;
    }
  }

  return -1;
}

function isSubstring(string, substring, index) {
  for (let subStringIndex = 0; subStringIndex < substring.length; subStringIndex++) {
    if (string[index + subStringIndex] !== substring[subStringIndex]) {
      return false;
    }
  }

  return true;
}

function displayMessage(text, target, actualResult, expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  const inputFragment = '"' + text + "," + target + '" ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;

  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message);
}

function testFindIndex(text, target, expectedResult) {
  const actualResult = findIndex(text, target);

  displayMessage(text, target, actualResult, expectedResult);
}

function testCases() {
  testFindIndex('hello world', 'o', 4);
  testFindIndex('repeating iiiiiiii', 'i', 6);
  testFindIndex('not found', 'z', -1);
  testFindIndex('   ', ' ', 0);
}

testCases();