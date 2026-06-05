function remainder(dividend, divisor) {
  if (dividend < divisor || divisor === 0) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function displayMessage(dividend, divisor, actualResult, expectedResult) {
  const inputFragment = '[' + dividend + " and " + divisor + ']';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testRemainder(dividend, divisor, expected) {
  let result = remainder(dividend, divisor);

  displayMessage(dividend, divisor, result, expected);
}

function testCases() {
  testRemainder(10, 2, 0);
  testRemainder(11, 2, 1);
  testRemainder(0, 0, 0);
  testRemainder(1, 0, 1);
  testRemainder(0, 1, 0);
  testRemainder(2, 11, 2);
}

testCases();