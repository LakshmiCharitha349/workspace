//seek mode
const file = await Deno.open("./encoder.js", { read: true });
const buffer = new Uint8Array(8);
const writableFile = await Deno.open("./writable.txt", {
  create: true,
  write: true,
});
const totalBytes = await file.seek(5, Deno.SeekMode.Start); //it returns currPosition of cursor
//Deno.seekmode.current it adds already existing position to given offset and returns it

const data = await file.read(buffer); //returns buffer length
const decodedData = new TextDecoder().decode(buffer);
console.log("buffer length: ", data);
console.log("decoded value: ", decodedData);
console.log("Bytes moved: ", totalBytes);
