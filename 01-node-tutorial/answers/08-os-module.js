const os = require("os");

console.log("User Info:", os.userInfo());
console.log("System Uptime:", os.uptime(), "seconds");
console.log("Operating System:", os.type());
console.log("OS Version:", os.release());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
