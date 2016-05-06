var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/client.html');
});

app.get('/cp', function(req,res,net) {
    io.emit('sev1',req.query.refno);
    res.send('notification sent');
});

server.listen(process.env.PORT || 4200);  

io.on('connection', function(client) {  
    console.log('Client connected...');

   client.on('join', function(data) {
        console.log(data);
    });

    client.on('messages', function(data) {
           client.emit('broad', data);
           client.broadcast.emit('broad',data);
    });

});