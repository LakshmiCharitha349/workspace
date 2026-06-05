function hcfOfATerm(term1,term2) {
  let max = (term1 > term2) ? term1 : term2;

  while (max >= 0) {
    if (term1 % max === 0 && term2 % max === 0) {
      return max;
    }
    max--;
  }
  
}

function displaymessage(term1,term2,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"hcf of ",term1,"and",term2,"actual result is",actualResult,"expected result is ",expectedResult); 
}

function testHcfOfATerm(term1,term2,expectedResult) {
  const actualResult = hcfOfATerm(term1,term2);
  displaymessage(term1,term2,actualResult,expectedResult);
} 

function testCases() {

  testHcfOfATerm(0,0,undefined);
  testHcfOfATerm(0,18,18);
  testHcfOfATerm(12,12,12);
  testHcfOfATerm(8,12,4);
  testHcfOfATerm(13,17,1);

}

testCases();