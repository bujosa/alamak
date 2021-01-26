const express = require('express');
const http = require('http');
const sockerio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io = sockerio(this.server, { /* Configurations */ });
    }

    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    sockerConfigurations() {
        new Sockets(this.io);
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