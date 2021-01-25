const express = require('express');

const app = express();

// Servidor para los sockets
const server = require('http').createServer(app);

// Configuracion del socket server
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', () => { 
    console.log('Cliente conectado!');
});

server.listen(3000, () => {
    console.log("Server corriendo en el puerto 3000");
});