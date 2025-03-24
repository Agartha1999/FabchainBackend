const express = require('express');
const CalificacionController = require('../controllers/CalificacionControllers');

const router = express.Router();

router.get('/calificacion', CalificacionController.getAllCalificaciones);
router.get('/calificacion/:id', CalificacionController.getCalificacionById);
router.post('/calificacion', CalificacionController.createCalificacion);
router.put('/calificacion/:id', CalificacionController.updateCalificacion);
router.delete('/calificacion/:id', CalificacionController.deleteCalificacion);

module.exports = router;
