const createResponse = (_request, page, status) => {
  return new Response(page, {
    status,
    headers: {
      "content-type": "text/html",
    },
  });
};

const pageMapper = {
  "": "./pages/home.html",
  "home": "./pages/home.html",
  "projects": "./pages/projects.html",
  "team": "./pages/team.html",
  "services": "./pages/services.html",
};

export const createHandlerequest = (readFile) => {
  return (request) => handleRequest(request, readFile);
};

export const handleRequest = async (request) => {
  console.log("request", request);

  const body = await request.json();
  console.log(body);
  return new Response("successful", {
    headers: { "content-type": "text/plain" },
  });
};

// const response = await fetch("http://localhost:8000", {
//   method: "POST",
//   body: JSON.stringify({
//     name: "mine",
//   }),
//   headers: {
//     "content-type": "application/json",
//   },
// });

//  const body = await request.text();
//   console.log("body", body);

//   return new Response(body, {
//     headers: { "content-type": "application/json" },
//   });
