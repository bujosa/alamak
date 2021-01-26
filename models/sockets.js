class Sockets {
    constructor(io) {
        this.io = io;
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {
            // Event Listening
            socket.on('message-to-server', (data) => {
                console.log(data);
                this.io.emit('message-from-server', data);
                // socket is individual 
                // io is global
            });
        });
    }
}

module.exports = Sockets;