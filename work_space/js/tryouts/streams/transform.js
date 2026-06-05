const readFile = new TransformStream({
  start() {
    this.buffer = new Uint8Array();
    this.offset = 0;
  },

  transform(chunk, controller) {
    const newBuffer = new Uint8Array(this.buffer.length + chunk.length);
    newBuffer.set(this.buffer);
    newBuffer.set(chunk, this.buffer.length);
    this.buffer = newBuffer;
  },

  flush(controller) {
    controller.enqueue(this.buffer);
  },
});

await Deno.stdin.readable.pipeThrough(readFile).pipeTo(Deno.stdout.writable);
