const express = require('express');
const ImpresionController = require('../controllers/ImpresionControllers');

const router = express.Router();

router.get('/impresiones', ImpresionController.getAllImpresiones);
router.get('/impresion/:id', ImpresionController.getImpresionById);
router.post('/impresiones', ImpresionController.createImpresion);
router.put('/impresion/:id', ImpresionController.updateImpresion);
router.delete('/impresion/:id', ImpresionController.deleteImpresion);

module.exports = router;
