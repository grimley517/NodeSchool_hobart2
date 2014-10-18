var web = require ('http');

var target = process.argv[2];
var dataList = [];

web.get(target,function callBk(response){
    response.setEncoding('utf-8');    
    response.on('data',function(data){
        dataList.push(data);
    });
    response.on('end', function(){
        var len = 0;
        dataList.forEach(function(element){
            len += element.length;
        })
        var words = ''
        dataList.forEach(function(element){
            words += element;
        })
        console.log(len);
        console.log(words);
    })
})
    
