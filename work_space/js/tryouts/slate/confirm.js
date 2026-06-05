import { confirm } from "@inquirer/prompts";

// confirm it allows us to enter boolean value and store it

const prompt = await confirm({
  message: "are you fine ...", // required
  default: true, //default should be boolean if we don't give anthing it gives this value
  transformer: () => {
    return "haa fine";
  },
});

console.log("prompt", prompt);
