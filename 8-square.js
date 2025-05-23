const { argv } = require('node:process');
let arg = Number(argv[2]);
if (arg === undefined || isNaN(arg)) {
    console.log('Missing size');
} else {
    for (let i = 0; i < argv[2]; i++) {
        let row = '';
        for (let j = 0; j < argv[2]; j++) {
            row += 'X';
        }
        console.log(row);
    }
}