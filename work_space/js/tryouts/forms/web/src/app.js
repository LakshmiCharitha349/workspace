const serveHomePage = async (req) => {
  const homePage = await Deno.readTextFile("./html/login.html");
  return new Response(homePage, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const serveNotFoundPage = () => {
  return new Response(`<h1>404 : page not found</h1>`, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const savePage = async (req) => {
  console.log(req);
  const formData = await req.formData();
  const f = formData.get("file");
  console.log(formData);
  console.log("f1", f);

  const file1 = await Deno.open(`./uploads/${f.name}`, {
    write: true,
    create: true,
  });

  await f.stream().pipeTo(Deno.stdout.writable);
  return new Response("OK");
};

const serveLoginPage = (req) => {
  console.log(req);
};

export const requestHandler = async (req) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return await serveHomePage(req);
  }

  if (url.pathname === "/signIn" && req.method === "POST") {
    return serveLoginPage(req);
  }

  return await serveNotFoundPage(req);
};
