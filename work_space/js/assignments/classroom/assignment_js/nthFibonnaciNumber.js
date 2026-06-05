// Do not rename n, use it as input for your program.
// While testing we will change their values.
// N will be always 1 or greater.
const n = 0;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let term1 = 0;
let term2 = 1;

for (let term = 1; start < n; start++) {
  const term3 = term1 + term2;
  term1 = term2;
  term2 = term3;
}

console.log(term1);

// if (n === 1) {
//   term3 = 0;
// } else if (n === 2) {
//   term3 = 1;
// } else {
//   for (let start = 3; start <= n; start++) {
//     term3 = term1 + term2;
//     term1 = term2;
//     term2 = term3;
//   } 
// }

// console.log(term3);