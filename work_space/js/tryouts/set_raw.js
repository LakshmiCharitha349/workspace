Deno.stdin.setRaw(true, { cbreak: true });
const reader = Deno.stdin.readable.getReader();
while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  console.log(new TextDecoder().decode(value));
}

Deno.setRaw(false);
