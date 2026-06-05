// const upperCase = new TransformStream({
//   transform(chunk, controller) {
//     controller.enqueue(chunk.toUpperCase());
//   },
// });

// await Deno.stdin.readable
//   .pipeThrough(
//     upperCase,
//   ).pipeThrough(new TextEncoder()).pipeTo(
//     Deno.stdout.writable,
//   );

const upperCase = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  },
});

await Deno.stdin.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(upperCase)
  .pipeThrough(new TextEncoderStream())
  .pipeTo(Deno.stdout.writable);

const upperCase = new TransformStream({
  transform(chunk, controller) {
    const decodedText = new TextDecoder().decode(chunk);
    const uppercaseText = decodedText.toUpperCase();
    const encodedText = new TextEncoder().encode(uppercaseText);
    controller.enqueue(encodedText);
  },
});

await Deno.stdin.readable.pipeThrough(upperCase).pipeThrough(
  Deno.stdin.writable,
);
