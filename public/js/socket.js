const socket = io('http://localhost:3000');

socket.on('receive-notification', msg=>{
  alert('Notification: '+msg);
});

function sendNotification(){
  const msg = document.getElementById('notifInput').value;
  socket.emit('send-notification', msg);
}
