import { select } from "npm:@inquirer/prompts";

const reader = Deno.stdin.readable.getReader();
const writer = Deno.stdout.writable.getWriter();
const whiteBg = "\x1b[47m \x1b[0m";

const encoder = new TextEncoder();

const enableKeys = () => Deno.stdin.setRaw(true, { cbreak: true });
const enableMouse = async () => {
  const mouseEnable = "\x1b[?1002h";
  await writer.write(encoder.encode(mouseEnable));
};

const chooseColor = async () => {
  return await select({
    message: "Choose color",
    choice: [
      { name: "blue", value: "\x1b[44m \x1b[0m" },
      { name: "red", value: "\x1b[41m \x1b[0m" },
      { name: "skyBlue", value: "\x1b[46m \x1b[0m" },
      { name: "green", value: "\x1b[42m \x1b[0m" },
      { name: "orange", value: "\x1b[43m \x1b[0m" },
      { name: "violet", value: "\x1b[45m \x1b[0m" },
      { name: "white", value: "\x1b[47m \x1b[0m" },
    ],
  });
};

const addTools = async () => {
  const tool = await selectTool();

  if (tool === "eraser") {
    return "\x1b[40m \x1b[0m";
  }

  if (tool === "colors") {
    return await chooseColor();
  }
};

const addColorOption = async () => {
  await writer.write(encoder.encode(`\x1B[${25};${0}H`));
  await writer.write(encoder.encode("colors"));
};

const startPainting = async () => {
  const color = await addTools();

  while (true) {
    const { value, done } = await reader.read();
    const [x, y] = value.slice(4);
    const xOffset = y - 32;
    const yOffset = x - 32;
    if (xOffset >= 25) {
      // console.log("xOffset", yOffset);
      // await writer.write(encoder.encode(`\x1b[?1003l`));
      continue;
    }
    // await enableMouse();
    await writer.write(encoder.encode(`\x1B[${xOffset};${yOffset}H`));
    await writer.write(encoder.encode(color));
    if (done) break;
  }
};

const selectTool = async (x, y, color) => {
  const tools = [
    { y: 50, x: 5, name: "blue", code: "" },
    { y: 50, x: 15, name: "red", code: "\x1b[41m \x1b[0m" },
    { y: 50, x: 25, name: "green", code: "" },
    { y: 50, x: 35, name: "blue" },
    { y: 50, x: 45, name: "blue" },
  ];
  for (let count = 0; count < 5; count++) {
    await writer.write(encoder.encode(`\x1B[${xOffset};${yOffset}H`));
    await writer.write(encoder.encode(color));
  }
};

const paint = async () => {
  enableKeys();
  await enableMouse();
  await startPainting();
};

await paint();

// const colors = {
//   "red": "\x1b[41m \x1b[0m",
//   "skyBlue": "\x1b[46m \x1b[0m",
//   "green": "\x1b[42m \x1b[0m",
//   "orange": "\x1b[43m \x1b[0m",
//   "blue": "\x1b[44m \x1b[0m",
//   "violet": "\x1b[45m \x1b[0m",
//   "white": "\x1b[47m \x1b[0m",
// };
