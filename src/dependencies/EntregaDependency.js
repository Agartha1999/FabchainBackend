const EntregaRepository = require('../repositories/EntregaRepository');
const EntregaService = require('../services/EntregaService');

const createEntregaService = () => {
  const entregaRepository = new EntregaRepository();
  return new EntregaService(entregaRepository);
};

module.exports = createEntregaService;
