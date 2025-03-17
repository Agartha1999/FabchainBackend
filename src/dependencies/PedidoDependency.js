const PedidoRepository = require('../repositories/PedidoRepository');
const PedidoService = require('../services/PedidoService');

const createPedidoService = () => {
  const pedidoRepository = new PedidoRepository();
  return new PedidoService(pedidoRepository);
};

module.exports = createPedidoService;
