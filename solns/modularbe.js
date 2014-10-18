var fs = require("fs");

module.exports = function (path, extn, myCallback){    

    fs.readdir(path, function (err,files){  
        if(err){
            return myCallback (err,null);
        }
        var list = files.filter(function (element){
            var parts = element.split('.');
            return (parts[1]===extn);
        });
        return myCallback(null,list);
    });
}