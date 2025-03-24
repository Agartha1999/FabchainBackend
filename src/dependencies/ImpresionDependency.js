const ImpresionRepository = require('../repositories/ImpresionRepository');
const ImpresionService = require('../services/ImpresionService');

const createImpresionService = () => {
  const impresionRepository = new ImpresionRepository();
  return new ImpresionService(impresionRepository);
};

module.exports = createImpresionService;
