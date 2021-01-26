const express = require('express');
const http = require('http');
const sockerio = require('socket.io');
const path = require('path');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.server = http.createServer(this.app);
        this.io = sockerio(this.server, { /* Configurations */ });
    }

    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    sockerConfigurations() {

    }

    execute() {

        // Init middlewares
        this.middlewares();

        // Init Sockets
        this.sockerConfigurations();

        // Init server
        this.server.listen(this.port, () => {
            console.log("Server corriendo en el puerto: ", this.port);
        });
    }
}

module.exports = Server;