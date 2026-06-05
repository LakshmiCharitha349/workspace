const f1 = () => {
  console.log("hi");
  throw "error";
};

// setInterval(() => {
//   try {
//     f1();
//   } catch {
//     console.log("f1 throws an error");
//   }
// }, 500);

// const main = () => {
//   try {
//     const file = Deno.readTextFileSync("./factorial.j");
//   } catch (e) {
//     console.log("No such file or directory", e);
//   }

//   console.log("Statments after handling error");
// };

// main();
