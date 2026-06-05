function findLastIndex(string, char) {
  return isMatch(string, char, string.length - 1);
}

function isMatch(string, char, index) {
  if (index < 0) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return isMatch(string, char, index - 1);
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

function testFindLastIndex(string, char, expected) {
  let result = findLastIndex(string, char);

  displayMessage(string, char, result, expected);
}

function testCases() {
  testFindLastIndex("abcba", "a", 4);
  testFindLastIndex("", "", -1);
  testFindLastIndex("hello world", "l", 9);
}

testCases();