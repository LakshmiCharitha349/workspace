const forest = "L ZL Z";
let isHunt = -1;

for(let start = 0;start < forest.length; start++) {

  let hunt = -1;
  if(forest[start] === "L") { 
    for(let search = 0;search < forest.length;search++) {

      let temp = isHunt;
      if(forest[search] === "Z") {
        hunt = (search - start);
        isHunt = hunt >= 0 ? hunt - 1 : -(hunt + 1);
        if(temp < isHunt && temp !== -1) {
          isHunt = temp;
        }       
      }
    }
  }
 }
console.log("input :",forest);
console.log("output :",isHunt);
