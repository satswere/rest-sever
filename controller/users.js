const { response } = require("express");

const usuariosGet = (req = request, res = response) => {

  const { q, nombre = 'luis', apikey, page = 1, limit } = req.query;

  res.json({
      msg: 'get API - controlador',
      q,
      nombre,
      apikey,
      page, 
      limit
  });
}

const usuariosPost = (req, res = response) => {

  const { nombre, edad } = req.body;

  res.json({
      msg: 'post API - usuariosPost',
      nombre, 
      edad
  });
}

const usuariosPut = (req, res = response) => {

  const { id } = req.params;

  res.json({
      msg: 'put API - usuariosPut',
      id
  });
}

const usuariosDelate = (req, res = response) => {
  res.json({
    msg: "delate Api - desde el controller",
  });
};

const usuariospatch = (req, res = response) => {
  res.json({
    msg: "patch Api - desde el controller",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariospatch,
  usuariosDelate,
};
