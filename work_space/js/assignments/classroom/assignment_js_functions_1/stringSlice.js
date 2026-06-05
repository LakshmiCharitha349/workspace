/*
  Implement the below function that
  creates a testSlice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function slice(text, start, end) {
  // Implementation here.
  if (start > end || start >= text.length) {
    return "";
  }

  let subString = "";
  const actualStart = start < 0 ? 0 : start;

  for (let index = actualStart; index <= end && index < text.length; index++) {
    subString = subString + text[index];
  }

  return subString;
}

function displayMessage(text, start, end,  actualResult, expectedResult) {
 const resultSymbol = actualResult === expectedResult ? "✅ " : "❌ ";

  const inputFragment = '"' + text + start + ":" + end + '"';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;

  const message = resultSymbol + inputFragment + actualFragment + expectedFragment;

  console.log(message);
}

function testSlice(text, start, end, expectedResult) {
  const actualResult = slice(text, start, end);

  displayMessage(text, start, end, actualResult, expectedResult);
}

function testCases() {
  testSlice('hello world', 0, 4, "hello");
  testSlice('negative start', -1, 8, "negative ");
  testSlice('hello', 0, 0, "h");
  testSlice('test case', 0, 1, "te");
  testSlice('test slice', -2, -1, "");
  testSlice('  ', 2, 1, "");
  testSlice('hello world', 10, 20, "d");
  testSlice('hello world', 2, 5, "llo ");
  testSlice("Aniruddha", 0, 4, "Aniru");
  testSlice("negative start", -1, 8, "negative ");
  testSlice('', 0, 10, '');
  testSlice('aniruddha', 0, 0, 'a');
  testSlice("negative start", -1, 0, "n");
  testSlice('hello world', 5, 20, " world");

}

testCases();