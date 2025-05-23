const { argv } = require('node:process');
let arg = Number(argv[2]);
if (argv[2] === undefined || isNaN(arg)) {
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < argv[2]; i++) {
        console.log('C is fun');
    }
}
