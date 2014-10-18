var web = require ('http');

var target = process.argv[2];

web.get(target,function callBk(response){
    response.setEncoding('utf-8');    
    response.on('data',function(data){
        console.log(data);
    });
})
    
