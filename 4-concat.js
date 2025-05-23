const { argv } = require('node:process');

let firstArg = argv[2];
let secondArg = argv[3];

console.log(`${firstArg} is ${secondArg}`);