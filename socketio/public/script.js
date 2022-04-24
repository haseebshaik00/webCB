// every time a new page is loaded a new socket connection is made
let socket = io();

let btn = document.getElementById("btn");

btn.onclick = () => {
    // button clicked from client - req sent to server
    socket.emit('boom');
}

// req recieved from client - wizz gets printed in client console
socket.on('wizz', () => {
    console.log("wizz");
})