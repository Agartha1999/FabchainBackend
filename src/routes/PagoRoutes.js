const express = require('express');
const PagoController = require('../controllers/PagoControllers');

const router = express.Router();

router.get('/pago', PagoController.getAllPagos);
router.get('/pago/:id', PagoController.getPagoById);
router.post('/pago', PagoController.createPago);
router.put('/pago/:id', PagoController.updatePago);
router.delete('/pago/:id', PagoController.deletePago);

module.exports = router;
