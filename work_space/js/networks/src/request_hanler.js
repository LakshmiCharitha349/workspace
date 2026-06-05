const mainPage = Deno.readTextFileSync("./html-files/mainPage.html");
const bluePage = Deno.readTextFileSync("./html-files/blue.html");
const orangePage = Deno.readTextFileSync("./html-files/orange.html");
const notFoundPage = Deno.readTextFileSync("./html-files/not_found.html");

const createResponse = (body, contentType, statusCode) => {
  return {
    status: statusCode,
    headers: {
      "content-type": contentType,
      "content-length": body.length,
    },
    body,
  };
};

export const requestHandler = (request) => {
  switch (request.path) {
    case "/":
      return createResponse(mainPage, "text/html", 200);
    case "/blue":
      return createResponse(bluePage, "text/html", 200);
    case "/mainPage":
      return createResponse(mainPage, "text/html", 200);
    case "/orange":
      return createResponse(orangePage, "text/html", 200);
    default:
      return createResponse(notFoundPage, "text/html", 404);
  }
};
