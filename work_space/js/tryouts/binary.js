let num = 65;
const subString = 10;
let count = 0;
while( num >= 2) {
  let str1 = ( num % 2 < 1) ? 0 : 1;
  num = num / 2;
  let str2 =  ( num % 2 < 1) ? 0 : 1;
  let finalString = str2 * 10 + str1;
  if(finalString === subString) {
    count = count + 1;
  }
}
console.log("NUmber of matches is",count);
