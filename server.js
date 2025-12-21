import http from 'http';
import app from './src/app.js';
import { Server } from 'socket.io';
import socketHandler from './src/libraries/sockets/index.js';
import env from './src/config/env.js';
const { NODE_ENV, HOST, PORT } = env;

const server = http.createServer(app);

// Integrasi Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
socketHandler(io);

server.listen(PORT, HOST, () => {
  console.log(`Server is running in ${NODE_ENV} mode on http://${HOST}:${PORT}`);
});
