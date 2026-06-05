function resultMessage(actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"actual result is",actualResult,"expected result is",expectedResult);
}

function decimalToBinary(number) {
  let conversionNumber = number;
  let binaryNum = "";
  
  if (conversionNumber === 0) {
    return "0";
  }
  while (conversionNumber > 0) {
    const binaryDigit = conversionNumber % 2;
    binaryNum = binaryDigit + binaryNum;
    conversionNumber = (conversionNumber - binaryDigit) / 2;
  }
  return binaryNum;
}

function testdecimalToBinary(number,expectedResult) {
  const actualResult = decimalToBinary(number);
  resultMessage(actualResult,expectedResult);
} 

testdecimalToBinary(0,"0");
testdecimalToBinary(1,"1");
testdecimalToBinary(12,"1100");
testdecimalToBinary(255,"11111111");
testdecimalToBinary(10,"1010");


