function isOdd(number) {
  return number % 2 !== 0;
}

function selectOdds(numbers) {
  const arrayWithOdds = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      arrayWithOdds.push(numbers[index]);
    }
  }

  return arrayWithOdds;
}

function displayMessage(numbers, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${numbers}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testSelectOdds(numbers, expected, gist) {
  const result = selectOdds(numbers);
  displayMessage(numbers, result, expected, gist);
}

function testCases() {
  testSelectOdds([3, 2, 4, 5, 7], [3, 5, 7], "numbers from 2 to 7");
  testSelectOdds([2, 4, 6], [], "numbers with no odds");
  testSelectOdds([1, 3, 5, 7], [1, 3, 5, 7], "numbers with only odds");
}

testCases();