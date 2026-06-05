console.log("before set time out");
setTimeout(() => console.log("first set time out"), 5000);
setTimeout(() => console.log("second set time out"), 4000);

let i = 0;
while (i < 10000000) i++;
console.log("after time out");
