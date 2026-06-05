/*
  Implement the below function to convert a string from snake_case
  format into camelCase format.

  Example:
  toCamelCase("hello_wORLd_pro1gram")
    -> "helloWorldPro1gram"
*/
function toCamelCase(sentence) {
  let string = trim(sentence);
  console.log(string);
  let newString = "";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let index = 0; index < string.length; index++) {
    if (string[index] === "_") {
      if (string[index + 1] === "_") {
        continue;
      }

      newString += caps(string[index + 1], upperCase, lowerCase);
      index++;
    } else {
      let isLower = !isSmall(string[index], lowerCase);

      if (!isLower) {
        newString += caps(string[index], lowerCase, upperCase);
      }


      if (isLower && string[index] !== "_") {
        newString += string[index];
      }
    }

  }

  return newString;
}

function isSmall(char, lowerCase) {
  for (let index = 0; index < lowerCase.length; index++) {
    if (char === lowerCase[index]) {
      return false;
    }
  }
  return true;
}

function caps(char, upperCase, lowerCase) {
  let search = 0;

  if (isSmall(char, lowerCase)) {
    return char;
  }

  while (search < lowerCase.length) {
    if (char === lowerCase[search]) {
      return upperCase[search];
    }
    search++;
  }
}

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
  const inputFragment = '"' + sentence + '" ';
  const actualFragment = "Result is " + actualResult;
  const expectedFragment = " Expected is " + expectedResult;
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";

  let message = resultSymbol + inputFragment;
  message += actualFragment + expectedFragment;

  console.log(message);
}

function testToCamelCase(sentence, expected) {
  let result = toCamelCase(sentence);

  displayMessage(sentence, result, expected);
}

function testCases() {
  testToCamelCase("_to_camel_case", "toCamelCase");
  testToCamelCase("hlo_pROgram", "hloProgram");
  testToCamelCase("", "");
  testToCamelCase("hello_world", "helloWorld");
  testToCamelCase("this_is_a_test", "thisIsATest");
  testToCamelCase("HeLLO_World", "helloWorld");
  testToCamelCase("HeLLO__World", "helloWorld");
  testToCamelCase("_HeLLO_World", "helloWorld");
  testToCamelCase("_HeLLO_World__", "helloWorld");
}

testCases();