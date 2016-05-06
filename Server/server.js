var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//app.use(express.static(__dirname + '/app'));
<<<<<<< HEAD
app.use(express.static( __dirname + '/'));

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html')
=======

app.get('/', function(req, res,next) {  
    res.send('Root!');
>>>>>>> origin/master
});

app.get('/cp', function(req,res,net) {
    io.emit('time',{time:new Date().toJSON()});
    res.send('Time sent.');
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