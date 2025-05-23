const { argv } = require('node:process');

if (argv[2] === undefined || argv[3] === undefined) {
    console.log('NaN');
} else {
    console.log(parseInt(argv[2]) + parseInt(argv[3]));
}