const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.use('/', express.static(__dirname + '/public'));

var users = {
    haseeb: 'haseeb123'
}

var socketMap = [];

io.on('connection', (socket) => {
    console.log("connect with socket id : ", socket.id);
    
    socket.on('logging_in', (data) => {

        function login(s, data){
            s.join(data.username);
            s.emit('logged_in', data);
            console.log("logged in ", data.username);
            socketMap[s.id] = data.username;
            console.log(socketMap);
        }

        if(users[data.username]){
            if(users[data.username] == data.password){
                login(socket, data);
            }
            else{
                socket.emit('logged_fail', data);
            }
        }
        else{
            users[data.username] = data.password;   
            // joins the room
            login(socket, data.username);
        }
        console.log(users);
    });

    socket.on('msg_send', (data) => {

        data.from = socketMap[socket.id];

        if(data.to){
            // sends to the room , if 2 rooms names are same msgs are sent to both 
            io.to(data.to).emit('msg_rcv', data);
        }
        else{
            socket.broadcast.emit('msg_rcv', data);
        }
    });

});

server.listen(3344, () => {
    console.log("started on http://localhost:3344");
})