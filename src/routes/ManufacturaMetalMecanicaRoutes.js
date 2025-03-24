const express = require('express');
const ManufacturaMetalMecanicaController = require('../controllers/ManufacturaMetalMecanicaControllers');

const router = express.Router();

router.get('/manufacturas', ManufacturaMetalMecanicaController.getAllManufacturas);
router.get('/manufactura/:id', ManufacturaMetalMecanicaController.getManufacturaById);
router.post('/manufacturas', ManufacturaMetalMecanicaController.createManufactura);
router.put('/manufactura/:id', ManufacturaMetalMecanicaController.updateManufactura);
router.delete('/manufactura/:id', ManufacturaMetalMecanicaController.deleteManufactura);

module.exports = router;
