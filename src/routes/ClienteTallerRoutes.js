const express = require('express');
const ClienteTallerController = require('../controllers/ClienteTallerControllers');
const router = express.Router();

router.get('/clientes-taller', ClienteTallerController.getAllClientesTaller);
router.get('/cliente-taller/:id', ClienteTallerController.getClienteTallerById);
router.post('/clientes-taller', ClienteTallerController.createClienteTaller);
router.put('/cliente-taller/:id', ClienteTallerController.updateClienteTaller);
router.delete('/cliente-taller/:id', ClienteTallerController.deleteClienteTaller);

module.exports = router;