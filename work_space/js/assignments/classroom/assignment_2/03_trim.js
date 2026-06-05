/*
  Implement the below function to trim(remove all leading and trailing 
  whitespaces) from the given sentence.
  A whitespace is SPACE(" "), NEW LINE("\n"), TAB("\t")
  Examples:
  trim(" hello world\n") returns "hello world"
*/

function trim(sentence) {
  let newString = "";
  let start = 0;
  let end = 0;

  if (sentence === "") {
    return "";
  }

  for (let index = 0; index < sentence.length; index++) {
    if (range(sentence[index])) {
      start = index;
      break;
    }
  }

  for (let index = sentence.length - 1; index >= 0; index--) {
    if (range(sentence[index])) {
      end = index;
      break;
    }
  }

  if (start === end) {
    return "";
  }

  for (let index = start; index <= end; index++) {
    newString += sentence[index];
  }

  return newString;
}

function range(char) {
  const isRangeOfSmall = char >= "a" && char <= "z";
  const isRangeOfCaps = char >= "A" && char <= "Z";
  const isRangeOfNum = char >= "0" && char <= "9";

  return isRangeOfCaps || isRangeOfSmall || isRangeOfNum;
}

function displayMessage(sentence, actualResult, expectedResult) {
  const inputFragment = '"' + sentence + '"  ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testTrim(sentence, expected) {
  let result = trim(sentence);

  displayMessage(sentence, result, expected);
}

function testCases() {
  testTrim("  hello world\n  ", "hello world");
  testTrim("hel l\to", "hel l\to");
  testTrim("    123    ", "123");
  testTrim("", "");
  testTrim(" ", "");
  testTrim("hello\n", "hello");
  testTrim("\t\t\t", "");
  testTrim("\n  good  mrng", "good  mrng");
  testTrim(" bbbbbbb", "bbbbbbb");
}

testCases();