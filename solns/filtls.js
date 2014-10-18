//  FILTERED LS
//  Exercise 5 of 13

// Create a program that prints a list of files in a given directory, 
//filtered by the extension of the files. 
//You will be provided a directory name as the first argument to your program 
//(e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

// For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

// The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

// -------------------------------------------------------------------------------

// ## HINTS

// The fs.readdir() method takes a pathname as its first argument and a callback as its second. The callback signature is:

//     function callback (err, list) { /* ... */ }

// where list is an array of filename strings.

function forEachCallback(element){
    console.log(element);
};

function filtCallback(element){
    var parts = element.split('.');
    return (parts[1]===extn);
};

function fsCallback (err,files){
    //files is an array of filenames;
    files = files.filter(filtCallback);
    files.forEach(forEachCallback);
};

var fs = require("fs");

var dir = process.argv[2];
var extn = process.argv[3];
fs.readdir(dir,fsCallback);