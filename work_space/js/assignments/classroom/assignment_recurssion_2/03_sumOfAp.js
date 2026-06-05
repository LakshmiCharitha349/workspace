function sumOfAP(firstTerm, differ, term) {
  if (term === 0) {
    return 0;
  }

  return firstTerm + sumOfAP(firstTerm + differ, differ, term - 1);
}

function displayMessage(firstTerm, differ, term, result, expected, gist) {

  const resultSymbol = result === expected ? "✅" : "❌";
  let message = "";

  if (resultSymbol === "✅") {
    message = resultSymbol + gist;
  } else {
    const descriptionFragment = "Gist:" + gist + "\n";
    const inputFrag = "\n" + '[' + firstTerm + differ + term + ']' + "\n";
    const actualFragment = "Result:" + result + "\n";
    const expectedFragment = "Expected:" + expected + "\n";

    message = resultSymbol + descriptionFragment;
    message += inputFrag;
    message += actualFragment + expectedFragment;
  }

  console.log(message);
}

function testSumOfAP(firstTerm, differ, term, expected, gist) {
  const result = sumOfAP(firstTerm, differ, term);

  displayMessage(firstTerm, differ, term, result, expected, gist);
}

function testCases() {
  testSumOfAP(0, 2, 10, 90, "sum of 10 numbers");
  testSumOfAP(0, 1, 2, 1, "sum of 2 terms");
  testSumOfAP(1, 1, 10, 55, "sum of 10 numbers");
  testSumOfAP(1, 1, 0, 10, "sum of 0 terms");
}

testCases();