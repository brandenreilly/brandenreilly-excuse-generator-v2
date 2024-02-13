/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  excuseGenerator();
  button.addEventListener("click", excuseGenerator);
};
const button = document.getElementById("excuseBTN");

function excuseGenerator() {
  let who = ["My dog", "My friend", "My cat", "My bird"];
  let action = ["ate", "peed on", "crashed", "ripped"];
  let what = ["my homework", "my car", "my laptop"];
  let when = [
    "last night.",
    "this morning.",
    "last weekend.",
    "a couple of hours ago."
  ];
  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  document.getElementById(
    "excuseHTML"
  ).innerHTML = `${who[whoRandom]} ${action[actionRandom]} ${what[whatRandom]} ${when[whenRandom]}`;
}
