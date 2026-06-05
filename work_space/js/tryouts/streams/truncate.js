// const file = await Deno.open("./writable.txt", { write: true });

// await file.truncate(2);

// const buffer = new Uint8Array(8);
// const data = await file.read(buffer);
// const decodedtext = new TextDecoder().decode(buffer);
// console.log("data in buffer", decodedtext);

// const file = await Deno.open("./writable.txt", { write: true });
// await file.truncate();

// file.close();

const file = await Deno.open("./writable.txt", {
  write: true,
  truncate: true,
  read: true,
});
await file.truncate(7);
const buf = new Uint8Array(100);
await file.read(buf);
const text = new TextDecoder().decode(buf);
console.log(text);
