const { argv } = require('node:process');

let arg = Number(argv[2]);

if (arg === undefined) {
    console.log('Not a number');
} else if (isNaN(arg)) {
    console.log('Not a number');
} else {
    console.log(`My number: ${parseInt(argv[2])}`);
}