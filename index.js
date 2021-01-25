const app = require('express')();

// Servidor para los sockets
const server = require('http').createServer(app);

// Configuracion del socket server
const io = require('socket.io')(server);

io.on('connection', () => { /* ... */});

server.listen(3000, () => {
    console.log("Server corriendo en el puerto 3000");
});