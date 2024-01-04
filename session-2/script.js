const {name, sum: add, mul} = require('./index.js');
const os = require("os");
const chalk = require("chalk")

console.log(name);
console.log(add(10,20));
console.log(mul(2,4));
console.log(os.networkInterfaces());
const log = console.log;
log(chalk.red('Hello') + ' ' + chalk.yellow('World!'));
