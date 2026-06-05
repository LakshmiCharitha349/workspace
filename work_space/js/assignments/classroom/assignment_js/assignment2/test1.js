function displayMessage(string, substring, actualResult, expectedResult) {

  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  const inputFragment = '"' + string + "," + substring + '" ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;

  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message);
}