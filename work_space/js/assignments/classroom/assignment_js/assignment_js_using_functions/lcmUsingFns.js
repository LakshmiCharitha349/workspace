function lcmOfATerm(term1,term2) {
  if (term1 === 0 || term2 === 0) {
    return 0;
  }
  
  let max = (term1 > term2) ? term1 : term2;
  let isFindLcm;

  while (!isFindLcm) {
    if (max % term1 === 0 && max % term2 === 0) {
      isFindLcm = true;
      return max;
   }
   max++;
  }
  
  }

function displaymessage(term1,term2,actualResult,expectedResult) {
  const resultSymbol = actualResult === expectedResult ? "✅" : "❌";
  console.log(resultSymbol,"lcm of ",term1,"and",term2,"actual result is",actualResult,"expected result is ",expectedResult); 
}

function testlcmOfATerm(term1,term2,expectedResult) {
  const actualResult = lcmOfATerm(term1,term2);
  displaymessage(term1,term2,actualResult,expectedResult);
} 

function testCases() {

  testlcmOfATerm(0,0,0);
  testlcmOfATerm(1,18,18);
  testlcmOfATerm(12,12,12);
  testlcmOfATerm(2,3,6);
  testlcmOfATerm(0,1,0);
  testlcmOfATerm(13,7,91);

}

testCases();