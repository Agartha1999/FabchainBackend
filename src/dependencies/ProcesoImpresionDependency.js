const ProcesoImpresionRepository = require('../repositories/ProcesoImpresionRepository');
const ProcesoImpresionService = require('../services/ProcesoImpresionService');

const createProcesoImpresionService = () => {
  const procesoImpresionRepository = new ProcesoImpresionRepository();
  return new ProcesoImpresionService(procesoImpresionRepository);
};

module.exports = createProcesoImpresionService;
