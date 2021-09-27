
const express = require('express');
const cors = require('cors')

class Server {

    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.middleware();
        this.routes();

    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.static('./public'));
    }

    routes(){
        
        this.app.get('/api', function (req, res) {
         res.json({
             VideoJuego: 'Contra'
         });
        });

        this.app.post('/api', function (req, res) {
            res.send('Hello World POST')
        });

        this.app.delete('/api', function (req, res) {
            res.send('Hello World DELETE')
        });

        


    }

    listen(){

        this.app.listen(this.port, () => console.log(`escuchando en ${this.port}`));
    }


}

module.exports = Server;


 