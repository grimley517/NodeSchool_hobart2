var web = require ('http');
var targets = process.argv.slice(2);
var outputs = [];
var count = targets.length

targets.forEach(function(element, index){
    var dataList = []
    web.get(element,function callBk(response){
        response.setEncoding('utf-8');  
        response.on('data',function(data){
            dataList.push(data);
        });
        response.on('end', function(){
            var words = '';
            dataList.forEach(function(element){
                words += element;
            })
            outputs[index]=words;
            count -=1
            if (count === 0){
                outputs.forEach(function(element){
                    console.log(element);
                })
            }
            
        }).on('error', function error(e){
        console.error('gor error '+e['message']);
    });
    });
});

