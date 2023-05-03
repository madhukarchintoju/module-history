(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? // CommonJS
      factory(exports, require("./data.js"), require("./getRandomItem.js"))
    : typeof define === "function" && define.amd
    ? // AMD
      define(["exports", "data", "getRandomItem"], factory)
    : // Globals
      factory(
        (global.mymodule = global.mymodule || {}),
        global.data,
        global.getRandomItem
      );
})(this, function (exports, data, getRandomItem) {
  const name = getRandomItem.getRandomItem(data.data.names);
  const monster = getRandomItem.getRandomItem(data.data.monsters);
  const weapon = getRandomItem.getRandomItem(data.data.weapons);
  const outcome = getRandomItem.getRandomItem(data.data.outcomes);

  const message = `${name} fought a ${monster} with a ${weapon} and ${outcome}!`;

  if (typeof document !== "undefined") {
    const text = document.createTextNode(message);
    const h1 = document.createElement("h1");
    h1.appendChild(text);

    document.body.appendChild(h1);
  } else {
    console.log(message);
  }
});
