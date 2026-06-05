function isPrime(primeCandidate) {
  return isPrimeFound(primeCandidate, 2);
}

function isPrimeFound(number, divisor) {
  if (number === divisor) {
    return true;
  }

  if (number <= 1) {
    return false;
  }

  if (number % divisor === 0) {
    return false;
  }

  return isPrimeFound(number, divisor + 1);
}

function displayMessage(primeCandidate, actualResult, expectedResult) {
  const inputFragment = '"' + primeCandidate + '"  ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testIsPrime(primeCandidate, expected) {
  let result = isPrime(primeCandidate);

  displayMessage(primeCandidate, result, expected);
}

function testCases() {
  testIsPrime(3, true);
  testIsPrime(0, false);
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(9, false);
  testIsPrime(8, false);
  testIsPrime(10, false);
  testIsPrime(11, true);
}

testCases();