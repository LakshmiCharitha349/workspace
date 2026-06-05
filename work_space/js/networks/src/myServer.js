const createListener = (port) => Deno.listen({ port });

const formatHeader = (headers) =>
  Object.entries(headers)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\r\n");

const STATUS_MSG = {
  200: "OK",
  404: "NOT_FOUND",
};

const createResponseLine = (request, response) => {
  const statusMsg = STATUS_MSG[response.status];
  return `${request.protocol} ${response.status} ${statusMsg}`;
};

export const formatResponse = (request, response) => {
  const responseLine = createResponseLine(request, response);
  const formattedHeader = formatHeader(response.headers);
  return [responseLine, formattedHeader, "", response.body].join("\r\n");
};

const writeRequest = async (conn, request, response) => {
  const encoder = new TextEncoder();
  const formatedResponse = formatResponse(request, response);
  await conn.write(encoder.encode(formatedResponse));
};

const readRequest = async (conn) => {
  const decoder = new TextDecoder();
  const buffer = new Uint8Array(1024);
  const totalBytes = await conn.read(buffer);
  const request = decoder.decode(buffer.slice(0, totalBytes));
  return request;
};

const parseRequest = (request) => {
  const [requestLine] = request.split("\r\n");
  const [method, path, protocol] = requestLine.split(" ");
  return { method, path, protocol };
};

const handleConn = async (conn, requestHandler) => {
  const rawRequest = await readRequest(conn);
  const request = parseRequest(rawRequest);
  const response = await requestHandler(request);
  await writeRequest(conn, request, response);
};

export const server = async (port, requestHandler) => {
  const listener = createListener(port);
  for await (const conn of listener) {
    handleConn(conn, requestHandler);
  }
};
