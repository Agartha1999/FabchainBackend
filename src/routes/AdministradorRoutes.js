const express = require('express');
const AdministradorController = require('../controllers/AdministradorControllers');
const router = express.Router();

router.get('/administradores', AdministradorController.getAllAdministradores);
router.get('/administrador/:id', AdministradorController.getAdministradorById);
router.post('/administradores', AdministradorController.createAdministrador);
router.put('/administrador/:id', AdministradorController.updateAdministrador);
router.delete('/administrador/:id', AdministradorController.deleteAdministrador);

module.exports = router;