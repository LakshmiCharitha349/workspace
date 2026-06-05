function multiply(multiplier, multiplicand) {
  if (multiplicand === 0) {
    return multiplicand;
  }

  return multiplier + multiply(multiplier, multiplicand - 1);
}

function displayMessage(multiplier, multiplicand, actualResult, expected) {
  const inputFragment = "[" + multiplier + " and " + multiplicand + "]";
  const actualFragment = " Result is " + actualResult;
  const expectedFragment = " Expected is " + expected;
  
  const resultSymbol = actualResult === expected ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testMultiply(multiplier, multiplicand, expected) {
  let result = multiply(multiplier, multiplicand);

  displayMessage(multiplier, multiplicand, result, expected);
}

function testCases() {
  testMultiply(2, 4, 8);
  testMultiply(3, 8, 24);
  testMultiply(0, 0, 0);
  testMultiply(1, 0, 0);
  testMultiply(0, 10, 0);
}

testCases();