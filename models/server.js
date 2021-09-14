const express = require("express");
const cors = require("cors");
const router = require("../routes/users");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json())
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/usuarios", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`corriendo en el servidor ${this.port}`);
    });
  }
}

module.exports = Server;
