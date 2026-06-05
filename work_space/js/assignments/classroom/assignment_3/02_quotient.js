function quotient(dividend, divisor) {

  if (dividend < divisor || divisor === 0) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
}

function displayMessage(dividend, divisor, actualResult, expectedResult) {
  const inputFragment = '[' + dividend + "and" + divisor + ']';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testQuotient(dividend, divisor, expected) {
  const result = quotient(dividend, divisor);

  displayMessage(dividend, divisor, result, expected);
}

function testCases() {
  testQuotient(10, 2, 5);
  testQuotient(11, 2, 5);
  testQuotient(0, 0, 0);
  testQuotient(1, 0, 0);
  testQuotient(0, 1, 0);
  testQuotient(2, 11, 0);
}

testCases();