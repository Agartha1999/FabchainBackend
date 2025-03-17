const express = require('express');
const TallerController = require('../controllers/TallerControllers');
const router = express.Router();

router.get('/talleres', TallerController.getAllTalleres);
router.get('/taller/:id', TallerController.getTallerById);
router.post('/talleres', TallerController.createTaller);
router.put('/taller/:id', TallerController.updateTaller);
router.delete('/taller/:id', TallerController.deleteTaller);

module.exports = router;
