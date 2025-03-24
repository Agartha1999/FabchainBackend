const express = require('express');
const ProcesoOtrosController = require('../controllers/ProcesoOtrosControllers');

const router = express.Router();

router.get('/procesos-otros', ProcesoOtrosController.getAllProcesosOtros);
router.get('/procesos-otros/:idProceso/:idOtro', ProcesoOtrosController.getProcesoOtrosByIds);
router.post('/procesos-otros', ProcesoOtrosController.createProcesoOtros);
router.delete('/procesos-otros/:idProceso/:idOtro', ProcesoOtrosController.deleteProcesoOtros);

module.exports = router;
