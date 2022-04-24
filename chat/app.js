const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.use('/', express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log("connect with socket id : ", socket.id);
    
});

app.use('/', express.static(__dirname + '/public'));

server.listen(3344, () => {
    console.log("started on http://localhost:3344");
})