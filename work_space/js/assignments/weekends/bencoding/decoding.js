function decodeNumbers(data) {
  let indexOfE = data.indexOf("e");
  return [parseInt(data.slice(1, indexOfE)), indexOfE + 1];
}

function decodeString(data) {
  const  size = +data.slice(0, data.indexOf(":"));
  const startIndex = data.indexOf(":") + 1;
  const lastIndex = size + data.indexOf(":") + 1;

  const decodedString = data.slice(startIndex,lastIndex);

  return [decodedString, size + data.indexOf(":") + 1];
}

function decodeArrays(decodedArray, data) {
  let index = 0;

  while (index < data.length - 1) {  
    const element = decode(data.slice(index));
    decodedArray.push(element[0]);
    index = index + parseInt(element[1]);
  }

  return [decodedArray];
}

function decode(data) {
  if (data.startsWith("i")) {
    return decodeNumbers(data);
  }

  if (data.startsWith("l")) {
    return decodeArrays([], data.slice(1, data.length - 1))
  }

  return decodeString(data);
}

function displayMessage(data, result, expected, gist) {
  const isPassed = result.toString() === expected.toString();
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${data}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function decodedElement(data) {
  return decode(data)[0];
}

function testDecode(data, expected, gist) {
  const result = decodedElement(data);

  displayMessage(data, result, expected, gist);
}

function testCasesOnNumbersOnDecode() {
  console.log("\n--- DECODING NUMBERS ---");
  testDecode("i123e", 123, "Decode a number");
  testDecode("i0e", 0, "Decode  number 0");
  testDecode("ie", NaN, "Decode  number 0");
  testDecode("i-435e", -435, "Decode negitive number");
  testDecode("i45637e", 45637, "Decode negitive number");
}

function testCasesOnStringOnDecode() {
  console.log("\n--- DECODING STRINGS ---");
  testDecode("6:string", "string", "Decode a string");
  testDecode("0:", "", "Decode a empty string");
  testDecode("5:hello", "hello", "Decode a string hello");
  testDecode("5:hello", "hello", "Decode a string hello");
  testDecode("11:hello world", "hello world", "Decode a word");
  testDecode("16:special!@#$chars", "special!@#$chars", "string with special chars");
}

function testCasesOnArraysOnDecode() {
  console.log("\n--- DECODING ARRAYS ---");
  testDecode("li12345ee", [12345], "Decode array");
  testDecode("li123e1:diee", [123,"d",NaN], "Decode array");
  testDecode("l2:hie", ["hi"], "Decode array");
  testDecode("li123e6:bananae", [123, "banana"], "Decode array");
  testDecode("l10:abcdefghije", ["abcdefghij"], "Decode array");
  testDecode("l2:hii123ee", ["hi", 123], "Decode array");
  testDecode("le", [], "Decode empty array");
  testDecode("l5:applel6:bananai-5eee", ["apple", ["banana", -5]], "Decode nested array");
  testDecode("l3:onel3:twol5:threeeee", ["one", ["two", ["three"]]], "Decode nested array");
  testDecode("l3:onel3:twol5:threeeee", ["one", ["two", ["three"]]], "Decode nested array");
  testDecode("l3:onel3:twol5:threeee4:foure", ["one", ["two", ["three"]],"four"], "Decode nested array");
}

function testAllCasesOnDecode() {

  testCasesOnNumbersOnDecode();
  testCasesOnStringOnDecode();
  testCasesOnArraysOnDecode();
}

function main() {
  testAllCasesOnDecode();
}

main();