const { argv } = require('node:process');
let length = 0;
argv.forEach((arg, index) => {
    length++;
});

if (length <= 2) {
    console.log('No argument');
} else {
    console.log(argv[2]);
}

