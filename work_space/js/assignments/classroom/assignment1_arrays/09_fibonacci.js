function fibonacci(limit) {
  const series = [];
  if (limit === 0) {
    return series;
  }
  let term1 = 0;
  let term2 = 1;
  for (let startOfRange = 1; startOfRange <= limit; startOfRange++) {
    const term3 = term1 + term2;
    series.push(term1);
    term1 = term2;
    term2 = term3;
  }
  return series;
}

function displayMessage(limit, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${limit}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testFibonacci(limit, expected, gist) {
  const result = fibonacci(limit);
  displayMessage(limit, result, expected, gist);
}

function testCases() {
  testFibonacci(5, [0, 1, 1, 2, 3], "series upto 5");
  testFibonacci(0, [], "empty series");
  testFibonacci(1, [0], "one element");
  testFibonacci(2, [0, 1], "one element");
}

testCases();