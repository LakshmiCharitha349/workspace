function findIndex(string, char) {
  return isMatch(string, char, 0);
}

function isMatch(string, char, index) {
  if (index >= string.length) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return isMatch(string, char, index + 1);
}

function displayMessage(string, char, actualResult, expectedResult) {
  const inputFragment = '"' + string + " " + char + '"  ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testFindIndex(string, char, expected) {
  let result = findIndex(string, char);

  displayMessage(string, char, result, expected);
}

function testCases() {
  testFindIndex("abcba", "a", 0);
  testFindIndex("", "", -1);
  testFindIndex("hello world", "l", 2);
}

testCases();