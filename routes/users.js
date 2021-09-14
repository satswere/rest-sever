const {Router} = require('express');
const { usuariosPost, usuariosPut, usuariosGet, usuariospatch, usuariosDelate } = require('../controller/users');
const router = Router();

router.post('/', usuariosPost)
router.put('/:id', usuariosPut)
router.delete('/', usuariosDelate)
router.get('/', usuariosGet)
router.patch('/', usuariospatch)


module.exports = router;