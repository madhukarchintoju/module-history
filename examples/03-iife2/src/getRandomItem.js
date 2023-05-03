(function (app) {
  app.getRandomItem = (data) => data[Math.floor(data.length * Math.random())];
})(GLOBAL_APP_DATA);
