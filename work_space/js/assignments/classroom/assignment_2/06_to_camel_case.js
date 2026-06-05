function toCamelCase(sentence) {
  let newString = "";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let start = sentence[0] === "_" ? 1 : 0;

  for (let index = start; index < sentence.length; index++) {
    if (sentence[index] === "_") {
      if(sentence[index + 1] === "_") {
        continue;
      }

      newString += caps(sentence[index + 1], lowerCase, upperCase);
      index++;
    } else if (!isSmall(sentence[index], lowerCase)) {
      newString += small(sentence[index], lowerCase, upperCase);
    } else if (isSmall(sentence[index], lowerCase)) {
      newString += sentence[index];
    }
  }

  return newString;
}

function caps(char, lowerCase, upperCase) {
  let search = 0;
  if (!isSmall(char, lowerCase)) {
    return char;
  }

  while (search < lowerCase.length) {
    if (char === lowerCase[search]) {
      return upperCase[search];
    }
    search++;
  }
}

function small(char, lowerCase, upperCase) {
  let search = 0;


  while (search < upperCase.length) {
    if (char === upperCase[search]) {
      return lowerCase[search];
    }
    search++;
  }
}

function isSmall(char, lowerCase) {
  for (let index = 0; index < lowerCase.length; index++) {
    if (char === lowerCase[index]) {
      return true;
    }
  }
  return false;
}

function displayMessage(sentence, result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${sentence}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

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
  testToCamelCase("HeLLO_____World", "helloWorld");
  testToCamelCase("_HeLLO_World", "helloWorld");
  testToCamelCase("_HeLLO_World__", "helloWorld");
}

testCases();