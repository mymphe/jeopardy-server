const express = require('express');
const app = express();

const server = app.listen(8080, () =>
  console.log('listening on http://localhost:8080'),
);

const io = require('socket.io')(server, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', message);
  });
});
