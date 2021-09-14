const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/nosotros', (req, res) => {
            res.send (`estamos en el apartado de nosotros`);
        });

        this.app.get ('/clientes', (req,res) =>{
            res.send  ("estamos en el apartado de clientes");
        });
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`corriendo en el servidor ${this.port}`)
        })
    }
}

module.exports = Server;