let num = 21;
const subString = "101";
let binaryNum = "";

while( num >= 1) {
  let str1 = ( num % 2 < 1) ? 0 : 1; 
  binaryNum = str1 + binaryNum;
  num = num / 2;
}

const str = "" + binaryNum;
let count = 0;

for(let index = 0;index <= str.length - subString.length;index++) {
  let ans = true;
  for(let start = 0;start < subString.length; start++) {
    if(str[start + index] !== subString[start]) {
      ans = false;
    }
  }
  if(ans === true) {
    count = count + 1;
  }
}

console.log("Number of",subString,"'s is",count);
