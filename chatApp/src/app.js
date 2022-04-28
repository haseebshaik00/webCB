const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("connect with socket id : ", socket.id);
    socket.on('msg_send', (data) => {
        console.log(data.msg);
        // socket.emit('msg_rec', data); - data is added on webpage only to the client requested the data to the server

        // socket.broadcast.emit('msg_rec', data); - data is added on webpage, to all the clients except requested the data to the server

        // data is added on webpage, to all the clients irrespective of the client who requested the data to the server
        io.emit('msg_rec', data);
    });
});

app.use('/', express.static(__dirname + '/public'));

server.listen(3344, () => {
    console.log("started on http://localhost:3344");
})