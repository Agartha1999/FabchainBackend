const express = require('express');
const CotizacionController = require('../controllers/CotizacionControllers');
const router = express.Router();

router.get('/cotizaciones', CotizacionController.getAllCotizaciones);
router.get('/cotizacion/:id', CotizacionController.getCotizacionById);
router.post('/cotizaciones', CotizacionController.createCotizacion);
router.put('/cotizacion/:id', CotizacionController.updateCotizacion);
router.delete('/cotizacion/:id', CotizacionController.deleteCotizacion);

module.exports = router;
