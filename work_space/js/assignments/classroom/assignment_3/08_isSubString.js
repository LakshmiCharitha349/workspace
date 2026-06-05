function isSubString(string, otherString) {
  return isSubStringFound(string, otherString, 0, 0);
}

function isSubStringFound(string, otherString, index, subindex) {
  if (subindex >= string.length || index >= string.length) {
    return false;
  }

  if (subindex === otherString.length - 1 && subindex !== 0) {
    return true;
  }

  if (string[index] === otherString[subindex]) {
    return isSubStringFound(string, otherString, index + 1, subindex + 1);
  }

  return isSubStringFound(string, otherString, index + 1, subindex);
}

function displayMessage(string, otherString, actualResult, expectedResult) {
  const inputFragment = '[' + string + " " + otherString + ']';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testIsSubString(string, otherString, expected) {
  let result = isSubString(string, otherString);

  displayMessage(string, otherString, result, expected);
}

function testCases() {
  testIsSubString("hello world", "llo", true);
  testIsSubString("hello world", "ld", true);
  testIsSubString("xyz", "a", false);
  testIsSubString("", "", false);
  testIsSubString("hello world", "", false);
  testIsSubString("hello world", "o", true);
  testIsSubString("hello world", "x", false);
  testIsSubString("hello world", "xs", false);
}

testCases();