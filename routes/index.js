const express = require('express');

class Server {
    constructor(){
        this.app = express();
        this.port = Process.env.Port;
    }

    listen(){
        this.app.listen(this.port, ()=>{
             console.log(`corriendo en el servidor ${this.port}`)
        })
    }
}