import fs from 'fs';
// var fs = require('fs');

var output = fs.readFileSync('data.txt', 'utf8');

console.log(output);

// the above program can be run in a couple ways:
// 1. typing `node reduce2.js` in the command line (while using the require function)
// 2. typing `babel reduce2.js | node` into the command line and using the import keyword

// if we leave out the " | node" in #2, we will simply get the program itself printed out (as opposed to the result of running the file)
