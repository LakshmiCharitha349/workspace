// Do not rename year, use it as input for your program.
// While testing we will change its values.

const year = 1200;

// Print true if the year is a leap year otherwise print false.
// Printing more than one output or printing anything other than leap year or not leap year might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let isLeap = false;

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
  isLeap = true;
}

console.log(isLeap);