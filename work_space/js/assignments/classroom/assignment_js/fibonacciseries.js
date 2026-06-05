// Do not rename n, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const n = 3;

// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let term1 = 0;
let term2 = 1;

for (let startOfRange = 1; startOfRange <= n; startOfRange++) {
  console.log(term1);
  const term3 = term1 + term2;
  term1 = term2;
  term2 = term3; 
}
  
  

  
