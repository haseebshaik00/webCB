// every time a new page is loaded a new socket connection is made
let socket = io();

let inpMsg = document.getElementById("inpMsg");
let btnSend = document.getElementById("btnSend");
let ulMsgList = document.getElementById("ulMsgList");

btnSend.onclick = () => {
    socket.emit('msg_send',{
        msg: inpMsg.value
    })
};

socket.on('msg_rec', (data) => {
    let liNewMsg = document.createElement('li');
    liNewMsg.innerText = data.msg;
    ulMsgList.appendChild(liNewMsg);
})
