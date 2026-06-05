const serveIndexFile = async () => {
  const indexPage = await Deno.readTextFile("./html/index.html");

  return new Response(indexPage, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const redirectToWishPage = (name) => {
  return new Response(null, {
    status: 303,
    headers: {
      location: `/wish?name=${name}`,
    },
  });
};

const serveGreetFile = async (req) => {
  const body = await req.text();
  const searchParams = new URLSearchParams(body);
  const params = Object.fromEntries(searchParams.entries());
  console.log(params);
  const name = searchParams.get("username");

  if (name === "charitha") {
    return await redirectToWishPage(name);
  }

  return await serveNotFoundPage();
};

const serveNotFoundPage = () => {
  return new Response(`<h1>404: page not found</h1>`, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const serveWishPage = (req, url) => {
  console.log({ url });
  const name = new URLSearchParams(url.search).get("name");

  return new Response(`wish page :: ${name}`, {
    headers: {
      "content-type": "text/html",
    },
  });
};

export const requestHandler = async (req) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return await serveIndexFile();
  }

  if (url.pathname === "/wish") {
    return await serveWishPage(req, url);
  }

  if (url.pathname === "/greet" && req.method === "POST") {
    return await serveGreetFile(req, url);
  }

  return await serveNotFoundPage();
};
