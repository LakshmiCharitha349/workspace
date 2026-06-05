function nthFibonacciTerm(termPosition) {
  if (termPosition <= 1) {
    return 0;
  }

  return nthTerm(termPosition - 2, 0, 1);
}

function nthTerm(termPosition, term1, term2) {
  if (termPosition === 0) {
    return term2;
  }

  return nthTerm(termPosition - 1, term2, term2 + term1);
}

function displayMessage(termPosition, actualResult, expectedResult) {
  const inputFragment = '[' + termPosition + ']';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testNthFibonacciterm(termPosition, expected) {
  const result = nthFibonacciTerm(termPosition);

  displayMessage(termPosition, result, expected);
}

function testCases() {
  testNthFibonacciterm(1, 0);
  testNthFibonacciterm(2, 1);
  testNthFibonacciterm(3, 1);
  testNthFibonacciterm(4, 2);
  testNthFibonacciterm(6, 5);
  testNthFibonacciterm(8, 13);
}

testCases();