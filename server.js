const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.middleware();
        this.routes();

    }

    middleware() {
        this.app.use(express.json());
        this.app.use(cors());

        this.app.use(express.static('./public'));
    }

    routes() {

        this.app.use('/api/users', require('./routes/user'));

    }

    listen() {

        this.app.listen(this.port, () => console.log(`escuchando en ${this.port}`));
    }


}

module.exports = Server;