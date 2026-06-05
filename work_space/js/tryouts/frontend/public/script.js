const handleListener = () => {
  const form = document.getElementById("form-1");
  form.addEventListener("submit", async (event) => {
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());
    console.log("in listener", body);
    event.preventDefault();

    const res = await fetch("/add", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      }
    });
    console.log(await res.json());
  })
}

window.onload = () => {
  handleListener();
};