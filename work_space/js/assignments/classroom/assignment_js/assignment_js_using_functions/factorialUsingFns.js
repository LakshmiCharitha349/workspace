function testfactorial(term,expectedResult) {
  const actualResult = factorial(term);
  displaymeassage(term,actualResult,expectedResult);
} 

function displaymeassage(term,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"For ",term,"actual result is ",actualResult,"expected result is ",expectedResult);

}

function factorial(term) {
  if(term === 0 || term === 1) {
    return 1;
  }

  let product = 1;

  for (let startOfTheRange = 1; startOfTheRange <= term; startOfTheRange++) {
    product = product * startOfTheRange ;
  }

  return product;
}

function testCases() {
  testfactorial(0,1);
  testfactorial(1,1);
  testfactorial(2,2);
  testfactorial(5,120);
  testfactorial(6,720);
}
testCases();