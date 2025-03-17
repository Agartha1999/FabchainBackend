const express = require('express');
const PedidoController = require('../controllers/PedidoControllers');
const router = express.Router();

router.get('/pedidos', PedidoController.getAllPedidos);
router.get('/pedido/:id', PedidoController.getPedidoById);
router.post('/pedidos', PedidoController.createPedido);
router.put('/pedido/:id', PedidoController.updatePedido);
router.delete('/pedido/:id', PedidoController.deletePedido);

module.exports = router;
