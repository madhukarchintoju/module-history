(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? // CommonJS
      factory(exports)
    : typeof define === "function" && define.amd
    ? // AMD
      define(["exports"], factory)
    : // Globals
      factory((global.getRandomItem = global.getRandomItem || {}));
})(this, function (exports) {
  exports.getRandomItem = (data) =>
    data[Math.floor(data.length * Math.random())];
});
