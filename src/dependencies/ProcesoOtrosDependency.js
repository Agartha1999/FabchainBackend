const ProcesoOtrosRepository = require('../repositories/ProcesoOtrosRepository');
const ProcesoOtrosService = require('../services/ProcesoOtrosService');

const createProcesoOtrosService = () => {
  const procesoOtrosRepository = new ProcesoOtrosRepository();
  return new ProcesoOtrosService(procesoOtrosRepository);
};

module.exports = createProcesoOtrosService;
