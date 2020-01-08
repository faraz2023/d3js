import { myDo } from "./util.js";

document.getElementById("message-element").textContent = "Loading...";

let myPromise = new Promise((resolve, reject) => {
  let message = "hello to you from myPromise";
  setTimeout(() => resolve(message), 4000);
});
myPromise.then(message => {
  myDo();
  document.getElementById("message-element").textContent =
    "hello to you from vannila js and myPromise";
});
