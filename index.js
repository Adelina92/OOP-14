const obj = require("./protochain.js").o3;

console.log(obj.prototype.name);
console.log(obj.prototype.prototype.name);
console.log(obj.prototype.prototype.prototype.name);

module.exports = [obj.prototype.name, obj.prototype.prototype.name, obj.prototype.prototype.prototype.name];