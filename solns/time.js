var net = require('net');

var server = net.createServer(function (socket) {
    var d = new Date(Date.now());
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var date = d.getDate();
    var hours = d.getHours();
    if (hours<10){
        hours = '0'+ hours
    }
    var mins = d.getMinutes();
    var s = '-';
    var formattedDate = year + s + month + s + date +  ' ' + hours + ':' + mins;
    socket.end(formattedDate);

});
    
server.listen(process.argv[2]);