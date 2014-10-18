function myCallback(err,data){
    var string = data.toString();
    var arrayOfLines = string.split('\n');
    //console.log(arrayOfLines);
    console.log(arrayOfLines.length-1);
}

var fs = require('fs');
var filePath = process.argv[2]
fs.readFile(filePath,'utf-8',myCallback)


