const express = require('express');
const ClientePlataformaController = require('../controllers/ClientePlataformaControllers');
const router = express.Router();

router.get('/cliente-plataformas', ClientePlataformaController.getAllClientesPlataforma);
router.get('/cliente-plataforma/:id', ClientePlataformaController.getClientePlataformaById);
router.post('/cliente-plataformas', ClientePlataformaController.createClientePlataforma);
router.put('/cliente-plataforma/:id', ClientePlataformaController.updateClientePlataforma);
router.delete('/cliente-plataforma/:id', ClientePlataformaController.deleteClientePlataforma);

module.exports = router;
