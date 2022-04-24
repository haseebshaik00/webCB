const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("connect with socket id : ", socket.id);

    // req recieved from client
    socket.on('boom', () => {
        console.log("boom recieved from ", socket.id);
    });

    // req sent to client
    setInterval(() => {
        socket.emit("wizz");
    }, 2000);
});

app.use('/', express.static(__dirname + '/public'));

server.listen(3344, () => {
    console.log("started on http://localhost:3344");
})