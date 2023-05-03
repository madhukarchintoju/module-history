(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? // CommonJS
      factory(exports)
    : typeof define === "function" && define.amd
    ? // AMD
      define(["exports"], factory)
    : // Globals
      factory((global.data = global.data || {}));
})(this, function (exports) {
  exports.data = {
    names: ["Eleven", "Dustin", "Steve", "Mike", "Nancy", "Will", "Lucas"],
    monsters: ["Mind Flayer", "Vecna", "Demogorgon", "Demodog"],
    weapons: ["gun", "guitar", "Kate Bush"],
    outcomes: ["won", "lost"],
  };
});
