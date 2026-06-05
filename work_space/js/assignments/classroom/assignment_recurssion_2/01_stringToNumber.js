function stringToNumber(string) {
  if (string === 0) {
    return 0;
  }

  const digit = string % 10;

  if (!digit && digit !== 0) {
    return NaN;
  }

  return stringToNumber((string - digit) / 10) * 10 + digit;
}

function getChar(string, index) {
  return string[index];
}

function stringToNumber(string) {
  const digit = getChar(string, string.length - 1);
}

function displayMessage(string, actualResult, expectedResult) {
  const inputFragment = '[' + string + ']';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testStringToNumber(string, expected) {
  const result = stringToNumber(string);

  displayMessage(string, result, expected);
}

function testCases() {
  testStringToNumber("0", 0);
  testStringToNumber("23", 23);
  testStringToNumber("abs", NaN);
  testStringToNumber("1234abs", NaN);
}

testCases();