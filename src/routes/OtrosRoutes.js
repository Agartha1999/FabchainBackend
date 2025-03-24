const express = require('express');
const OtrosController = require('../controllers/OtrosControllers');

const router = express.Router();

router.get('/otros', OtrosController.getAllOtros);
router.get('/otro/:id', OtrosController.getOtrosById);
router.post('/otros', OtrosController.createOtros);
router.put('/otro/:id', OtrosController.updateOtros);
router.delete('/otro/:id', OtrosController.deleteOtros);

module.exports = router;
