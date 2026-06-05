export function displayMessage(result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message +=  actualFragment + expectedFragment;
  }

  console.log(message);
}

export function performTests(style, size, expected, gist) {
  const result = style(size).join("\n")
  displayMessage( result, expected, gist);
}