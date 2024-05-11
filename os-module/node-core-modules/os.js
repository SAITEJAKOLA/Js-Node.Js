const os = require("os");

//arch()
const arch = os.arch();
console.log(arch);

//platform()
console.log(os.platform());

//cpus()
console.log(os.cpus());

//freemem()
console.log(os.freemem());
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

//totalmem()
console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);
//homedir()
console.log(os.homedir());

//uptime()
const uptime = os.uptime();
const days = Math.floor(uptime / 86400);
console.log(`Total uptime: ${days} days`, uptime);

//hostname()
console.log(os.hostname());
