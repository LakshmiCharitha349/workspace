import { checkbox } from "@inquirer/prompts";

// value --> what should be returned by checkbox

const selectedOptions = await checkbox({
  message: "what do you want ...",
  choices: [
    { name: "chocolate", value: "choco" },
    { name: "cake", value: "cak" },
    { name: "juice", value: "juc" },
  ],
});

console.log("item ===> ", selectedOptions);
