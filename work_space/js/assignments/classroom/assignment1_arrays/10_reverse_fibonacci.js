function reverse(array) {
  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray.unshift(array[index]);
  }

  return newArray;
}

function reverseFibonacci(limit) {
  const series = [];
  let term1 = 0;
  let term2 = 1;
  if (limit === 0) {
    return series;
  }
  for (let startOfRange = 1; startOfRange <= limit; startOfRange++) {
    const term3 = term1 + term2;
    series.push(term1);
    term1 = term2;
    term2 = term3;
  }
  return reverse(series);
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

function testReverseFibonacci(limit, expected, gist) {
  const result = reverseFibonacci(limit);

  displayMessage(limit, result, expected, gist);
}

function testCases() {
  testReverseFibonacci(5, [3, 2, 1, 1, 0], "series upto 5");
  testReverseFibonacci(0, [], "empty series");
  testReverseFibonacci(1, [0], "one element");
  testReverseFibonacci(2, [1, 0], "series of size 2");
}

testCases();