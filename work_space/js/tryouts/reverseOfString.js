const  str = "hello world";
let reverseOfString = "";

for(let index = 0;index < str.length;index++) {
  reverseOfString = str[index] + reverseOfString ;
}

console.log("Reverse of String is",reverseOfString);
