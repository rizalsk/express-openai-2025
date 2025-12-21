export default (io)=>{
  io.on('connection', (socket)=>{
    console.log('User connected:', socket.id);

    socket.on('send-notification', msg=>{
      io.emit('receive-notification', msg);
    });

    socket.on('disconnect', ()=>{
      console.log('User disconnected:', socket.id);
    });
  });
};
