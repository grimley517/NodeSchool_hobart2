var fs = require('fs');
var filePath = process.argv[2]
var buffer = fs.readFileSync(filePath);
var string = buffer.toString();
var arrayOfLines = string.split('\n');
//console.log(arrayOfLines);
console.log(arrayOfLines.length-1);


