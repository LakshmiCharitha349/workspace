function firstPrimeAbove(number) {
  return isPrimeFound(number + 1, 2);
}

function isPrimeFound(number, divisor) {
  if (number === divisor) {
    return number;
  }

  if (number % divisor === 0 || number <= 1) {
    return isPrimeFound(number + 1, 2);
  }

  return isPrimeFound(number, divisor + 1);
}

function displayMessage(number, actualResult, expectedResult) {
  const inputFragment = number;
  const actualFragment = " Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testFirstPrimeAbove(number, expected) {
  let result = firstPrimeAbove(number);

  displayMessage(number, result, expected);
}

function testCases() {
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(9, 11);
  testFirstPrimeAbove(8, 11);
}

testCases();