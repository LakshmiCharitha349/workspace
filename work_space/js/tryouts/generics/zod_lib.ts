import * as z from "zod";

const data = z.object({
  name: z.string().min()
})

const userInput = data.parse({})

const l = z.literal(["A","B","C"]);
z.parse("S")

// template literals
const template = z.templateLiteral([z.string(),z.number()]);
// template strings ==> "<anystring><Number>"

//enums
const values = z.enum(["abc", "def","ghi"]);


const num = z.number();
num.parse(10)