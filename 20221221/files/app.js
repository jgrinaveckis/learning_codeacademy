const fs = require('fs');
const cFile = require('./createFile');

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Please provide arguments");
    return;
} else if (args.length == 1) {
    console.log("Please provide second argument");
    return;
}
try {
    cFile.createFile(fs, args[0], args[1]);
}
catch(e) {
    console.log(e);
}