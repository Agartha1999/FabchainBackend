const express = require('express');
const ComprobanteController = require('../controllers/ComprobanteControllers');

const router = express.Router();

router.get('/comprobante', ComprobanteController.getAllComprobantes);
router.get('/comprobante/:id', ComprobanteController.getComprobanteById);
router.post('/comprobante', ComprobanteController.createComprobante);
router.put('/comprobante/:id', ComprobanteController.updateComprobante);
router.delete('/comprobante/:id', ComprobanteController.deleteComprobante);

module.exports = router;
