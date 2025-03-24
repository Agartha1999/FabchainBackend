const PagoRepository = require('../repositories/PagoRepository');
const PagoService = require('../services/PagoService');

const createPagoService = () => {
  const pagoRepository = new PagoRepository();
  return new PagoService(pagoRepository);
};

module.exports = createPagoService;
