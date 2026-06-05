const takeReadableStream = async (readable) => {
  const reader = readable.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    console.log(new TextDecoder().decode(value), done);
  }
};

const fakeReadable = (string) => {
  return new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(string));
      controller.close();
    },
  });
};

// await takeReadableStream(Deno.stdin.readable);  original reader
// await takeReadableStream(fakeReadable("hi hlo string")); //fake readable

const fileContents = "1\n2\n3\n4\n5";

const fakeFileOpen = async () => {
  const fileData = await Promise.resolve(fileContents);
  return fakeReadable(fileData);
};

await fakeFileOpen();
