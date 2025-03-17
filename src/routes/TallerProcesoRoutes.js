const express = require('express');
const TallerProcesoController = require('../controllers/TallerProcesoControllers');
const router = express.Router();

router.get('/taller-procesos', TallerProcesoController.getAllTallerProcesos);
router.get('/taller-proceso/:idTaller/:idProceso', TallerProcesoController.getTallerProcesoById);
router.post('/taller-procesos', TallerProcesoController.createTallerProceso);
router.put('/taller-proceso/:idTaller/:idProceso', TallerProcesoController.updateTallerProceso);
router.delete('/taller-proceso/:idTaller/:idProceso', TallerProcesoController.deleteTallerProceso);

module.exports = router;
