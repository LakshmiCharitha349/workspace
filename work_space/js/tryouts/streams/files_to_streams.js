const file = await Deno.open("factorial.js");

const reader = file.readable.getReader();
const decoder = new TextDecoder();
let index = 0;
while (true) {
  const result = await reader.read();
  index++;
  console.log(decoder.decode(result.value), index, result.done);
  if (result.done) {
    console.log(result.done, "done");
    break;
  }
}
console.log("end....");
reader.releaseLock();

//read and write into files
const writableFile = await Deno.open("./writableFile", {
  create: true,
  read: true,
  write: true,
  append: true,
});

await writableFile.readable.pipeTo(writableFile.writable);

//using buffer
const data = await Deno.open("./factorial.js", { read: true });
const buffer = new Uint8Array(16);
const file = await data.read(buffer); //read  data into buffer
// file consists number of bytes are read from data into buffer
new TextDecoder().decode(buffer);
