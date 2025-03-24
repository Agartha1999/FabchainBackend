const ComprobanteRepository = require('../repositories/ComprobanteRepository');
const ComprobanteService = require('../services/ComprobanteService');

const createComprobanteService = () => {
  const comprobanteRepository = new ComprobanteRepository();
  return new ComprobanteService(comprobanteRepository);
};

module.exports = createComprobanteService;
