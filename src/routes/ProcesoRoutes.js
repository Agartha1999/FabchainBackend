const express = require('express');
const ProcesoController = require('../controllers/ProcesoControllers');
const router = express.Router();

router.get('/procesos', ProcesoController.getAllProcesos);
router.get('/proceso/:id', ProcesoController.getProcesoById);
router.post('/procesos', ProcesoController.createProceso);
router.put('/proceso/:id', ProcesoController.updateProceso);
router.delete('/proceso/:id', ProcesoController.deleteProceso);

module.exports = router;
