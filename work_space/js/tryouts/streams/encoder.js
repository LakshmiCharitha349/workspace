const encoder = new TextEncoder();
const encodedText = encoder.encode("string");

const decoder = new TextDecoder();
const decodedText = decoder.decode(encodedtext);

Deno.stdin.readable.pipeTo(Deno.stdout.writable);
