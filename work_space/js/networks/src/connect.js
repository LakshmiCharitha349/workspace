const con = await Deno.connect({
  hostname: "127.0.0.1",
  port: 8000,
  transport: "tcp",
});

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const buffer = new Uint8Array(1024);

await con.write(encoder.encode(JSON.stringify(msg)));
const n = await con.read(buffer);
const data = buffer.slice(0, n);
const result = decoder.decode(data);
console.log(result);
await con.read(buffer);
// await con.write(encoder.encode("without telnet1 ..."));
// await con.write(encoder.encode("exit"));

// con.close();
