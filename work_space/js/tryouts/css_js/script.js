import { x } from "./script2.js"

const input = document.querySelector("#input");
const txt = document.getElementById("text");

console.log(txt);
input.addEventListener("keydown", (event) => {
  const key = event.key;
  txt.innerText = key;
})