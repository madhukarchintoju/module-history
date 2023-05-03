import { data } from "./data.js";
import { getRandomItem } from "./getRandomItem.js";

const name = getRandomItem(data.names);
const monster = getRandomItem(data.monsters);
const weapon = getRandomItem(data.weapons);
const outcome = getRandomItem(data.outcomes);

const message = `${name} fought a ${monster} with a ${weapon} and ${outcome}!`;

if (typeof document !== "undefined") {
  const text = document.createTextNode(message);
  const h1 = document.createElement("h1");
  h1.appendChild(text);

  document.body.appendChild(h1);
} else {
  console.log(message);
}
