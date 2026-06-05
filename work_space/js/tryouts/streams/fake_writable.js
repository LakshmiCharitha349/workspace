const writeToStream = async (fakeWritableStream, string) => {
  const writer = await fakeWritableStream.getWriter();
  writer.write(new TextEncoder().encode(string));
  writer.releaseLock();
};

const getText = (chunks) => {
  const size = chunks.reduce((len, chunk) => len + chunk.length, 0);

  const result = new Uint8Array(size);
  let offset = 0;

  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }

  return new TextDecoder().decode(result);
};

const fakeWritable = () => {
  const chunks = [];

  const stream = new WritableStream({
    write(chunk) {
      chunks.push(chunk);
    },
  });

  return {
    stream,
    getText() {
      const size = chunks.reduce((len, chunk) => len + chunk.length, 0);

      const result = new Uint8Array(size);
      let offset = 0;

      for (const chunk of chunks) {
        result.set(chunk, offset);
        offset += chunk.length;
      }

      return new TextDecoder().decode(result);
    },
  };
};

// await writeToStream(null, "hi hlo original");//original writable

const fakeWriter = fakeWritable();
const x = await writeToStream(fakeWriter.stream, "hi hlo fake one");
