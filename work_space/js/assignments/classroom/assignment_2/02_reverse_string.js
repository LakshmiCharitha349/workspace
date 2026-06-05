/*
  Implement the below function to reverse the given sentence.
  Examples:
  reverseString("hello") returns "hello"
*/

function reverseString(sentence) {
  let reversed = "";

  for (let index = 0; index < sentence.length; index++) {
    reversed = sentence[index] + reversed;
  }

  return reversed;
}

function displayMessage(sentence, actualResult, expectedResult) {
  const inputFragment = '"' + sentence + '" ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testReverseString(sentence, expected) {
  let result = reverseString(sentence);

  displayMessage(sentence, result, expected);
}

function testCases() {
  testReverseString("hello world", "dlrow olleh");
  testReverseString("hEllo", "ollEh");
  testReverseString("bdws", "swdb");
  testReverseString(" ", " ");
  testReverseString("test cases", "sesac tset");
  testReverseString("123", "321");
  testReverseString(" 123 ", " 321 ");
}

testCases();