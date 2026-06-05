// Write a function that gives first n elements of fibonacci in an n
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters
function fibonacci(n) {
  let series = [];
  let term1 = 0;
  let term2 = 1;

  if (n === 0) {
    return series;
  }

  for (let startOfRange = 1; startOfRange <= n; startOfRange++) {
    const term3 = term1 + term2;
    series.push(term1);
    term1 = term2;
    term2 = term3;
  }

  return series;
}

function fibonacciSeries(series, term1, term2,n) {
  
}

function displayMessage(n, result, expected, gist) {
  const resultSymbol = result === expected ? "✅" : "❌";
  let message = "";

  if (resultSymbol === "✅") {
    message = resultSymbol + gist;
  } else {
    const descriptionFragment = "Gist:" + gist + "\n";
    const inputFrag = "\n" + '[' + n + ']' + "\n";
    const actualFragment = "Result:" + result + "\n";
    const expectedFragment = "Expected:" + expected + "\n";

    message = resultSymbol + descriptionFragment;
    message += inputFrag;
    message += actualFragment + expectedFragment;
  }

  console.log(message);
}

function testFibonacci(n, expected, gist) {
  const result = fibonacci(n);

  displayMessage(n, result, expected, gist);
}

function testCases() {
  testFibonacci(5, [0, 1, 1, 2, 3], "series upto 5");
  testFibonacci(0, [], "empty series");
  testFibonacci(1, [0], "one element");
  testFibonacci(2, [0,1], "one element");
}

testCases();