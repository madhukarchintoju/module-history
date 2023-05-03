(function (app) {
  const name = app.getRandomItem(app.data.names);
  const monster = app.getRandomItem(app.data.monsters);
  const weapon = app.getRandomItem(app.data.weapons);
  const outcome = app.getRandomItem(app.data.outcomes);

  const message = `${name} fought a ${monster} with a ${weapon} and ${outcome}!`;

  if (typeof document !== "undefined") {
    const text = document.createTextNode(message);
    const h1 = document.createElement("h1");
    h1.appendChild(text);

    document.body.appendChild(h1);
  } else {
    console.log(message);
  }
})(GLOBAL_APP_DATA);
