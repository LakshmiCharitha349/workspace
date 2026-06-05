interface Details {
  name: string;
  color: string;
}

//Partial todo
// const studentDetails = (details: Required<Details>) => {
//   console.log(details);
  
// }

// studentDetails({});
class Student {
  #name:string;
  #color:string;
  constructor(name:string,color:string){
    this.#name = name;
    this.#color = color
  }
}

const student = new Student("ram","blue");