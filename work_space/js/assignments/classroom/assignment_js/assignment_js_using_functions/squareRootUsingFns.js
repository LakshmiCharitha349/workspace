function squareRoot(term) {
  return term ** 0.5 ;

}

function displayMessage(term, actualResult, expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  console.log(resultSymbol, "actual result", actualResult, "expected result", expectedResult);
}

function testSquareRoot(term, expectedResult) {
  const actualResult = squareRoot(term);

  displayMessage(term, actualResult, expectedResult);
}

function testCases() {
  testSquareRoot(0, 0);
  testSquareRoot(1, 1);
  testSquareRoot(2, 1.414);
  testSquareRoot(9, 3);
  testSquareRoot(10, 3.141);
}

testCases();