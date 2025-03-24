const express = require('express');
const ProcesoManufacturaController = require('../controllers/ProcesoManufacturaControllers');

const router = express.Router();

router.get('/procesos-manufacturas', ProcesoManufacturaController.getAllProcesosManufactura);
router.get('/procesos-manufacturas/:idProceso/:idManufactura', ProcesoManufacturaController.getProcesoManufacturaByIds);
router.post('/procesos-manufacturas', ProcesoManufacturaController.createProcesoManufactura);
router.delete('/procesos-manufacturas/:idProceso/:idManufactura', ProcesoManufacturaController.deleteProcesoManufactura);

module.exports = router;
