const express = require('express');
const UsuarioController = require('../controllers/UsuarioControllers');
const router = express.Router();

router.get('/usuarios', UsuarioController.getAllUsuarios);
router.get('/usuario/:id', UsuarioController.getUsuarioById);
router.post('/usuarios', UsuarioController.createUsuario);
router.put('/usuario/:id', UsuarioController.updateUsuario);
router.delete('/usuario/:id', UsuarioController.deleteUsuario);

module.exports = router;
