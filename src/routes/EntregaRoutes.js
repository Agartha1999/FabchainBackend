const express = require('express');
const EntregaController = require('../controllers/EntregaControllers');

const router = express.Router();

router.get('/entregas', EntregaController.getAllEntregas);
router.get('/entrega/:id', EntregaController.getEntregaById);
router.post('/entregas', EntregaController.createEntrega);
router.put('/entrega/:id', EntregaController.updateEntrega);
router.delete('/entrega/:id', EntregaController.deleteEntrega);

module.exports = router;
