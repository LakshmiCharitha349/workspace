function reverse(string) {
  return reverseOfString(string, string.length);
}

function reverseOfString(string, length) {
  if (length === 0) {
    return "";
  }

  return string[length - 1] + reverseOfString(string, length - 1);
}

function displayMessage(string, actualResult, expectedResult) {
  const inputFragment = '"' + string + '"  ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testReverse(string, expected) {
  let result = reverse(string);

  displayMessage(string, result, expected);
}

function testCases() {
  testReverse("string", "gnirts");
  testReverse("", "");
  testReverse("hello world", "dlrow olleh");
}

testCases();