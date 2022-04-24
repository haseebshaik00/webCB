// every time a new page is loaded a new socket connection is made
let socket = io();

$('#loginBox').show();
$('#chatBox').hide();

$('#btnStart').click(() => {
    socket.emit('logging_in', {
        username: $('#inpUsername').val(),
        password: $('#inpPassword').val()
    })
});

socket.on('logged_in', (data) => {
    console.log('logged in with ', data.username);
    $('#user').text(`${data.username}`);
    $('#loginBox').hide();
    $('#chatBox').show();
})

socket.on('logged_fail', (data) => {
    window.alert('Wrong username or password entered for ' + data.username);
})

$('#btnSend').click(() => {
    socket.emit('msg_send', {
        to: $('#inpToUser').val(),
        msg: $('#inpMsg').val()
    })
});

socket.on('msg_rcv', (data) => {
    $('#ulMsgList').append($('<li>').text(`[${data.from}] : ` + data.msg));
});