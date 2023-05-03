(function () {
  const names = ["Eleven", "Dustin", "Steve", "Mike", "Nancy", "Will", "Lucas"];
  const monsters = ["Mind Flayer", "Vecna", "Demogorgon", "Demodog"];
  const weapons = ["gun", "guitar", "Kate Bush"];
  const outcomes = ["won", "lost"];

  const getRandomItem = (data) => data[Math.floor(data.length * Math.random())];

  const name = getRandomItem(names);
  const monster = getRandomItem(monsters);
  const weapon = getRandomItem(weapons);
  const outcome = getRandomItem(outcomes);

  const message = `${name} fought a ${monster} with a ${weapon} and ${outcome}!`;

  if (typeof document !== "undefined") {
    const text = document.createTextNode(message);
    const h1 = document.createElement("h1");
    h1.appendChild(text);

    document.body.appendChild(h1);
  } else {
    console.log(message);
  }
})();
