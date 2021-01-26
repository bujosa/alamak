const express = require('express');

const app = express();

// Servidor para los sockets
const server = require('http').createServer(app);

// Configuracion del socket server
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socket.emit('mensaje-bienvenida', {
        msg: 'Bienvenido al server',
        date: new Date()
    });

    socket.on('message-to-server', (data) => {
        console.log(data);
        io.emit('message-from-server', data);
        // socket is individual 
        // io is global
    });
});


server.listen(3000, () => {
    console.log("Server corriendo en el puerto 3000");
});