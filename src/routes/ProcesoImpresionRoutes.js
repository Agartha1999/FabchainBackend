const express = require('express');
const ProcesoImpresionController = require('../controllers/ProcesoImpresionControllers');

const router = express.Router();

router.get('/proceso-impresiones', ProcesoImpresionController.getAllProcesosImpresion);
router.get('/proceso-impresiones/:idProceso/:idImpresion', ProcesoImpresionController.getProcesoImpresionByIds);
router.post('/proceso-impresiones', ProcesoImpresionController.createProcesoImpresion);
router.delete('/proceso-impresiones/:idProceso/:idImpresion', ProcesoImpresionController.deleteProcesoImpresion);

module.exports = router;
