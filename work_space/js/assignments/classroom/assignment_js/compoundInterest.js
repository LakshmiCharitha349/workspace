// Do not rename p, t or r, use them as input for your program.
// While testing we will change their values.

const p = 10;
const t = 2;
const r = 20;

// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let principle = p;

for (let currentYear = 1; currentYear <= t; currentYear++) {
  const interest = (principle * r) / 100;
  principle = principle + interest;
}

const compoundInterest = principle - p;
console.log(compoundInterest);

