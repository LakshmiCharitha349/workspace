// Do not rename a or b, use them as input for your program.
// While testing we will change their values.

const a = 1;
const b = 2;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const max = (a > b) ? a : b;
let hcf = 0;

for(let checkNum = 1; checkNum <= max; checkNum++) {
  if(a % checkNum === 0 && b % checkNum === 0) {
    hcf = checkNum; 
  }
}
console.log(hcf);