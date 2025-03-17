const ProcesoRepository = require('../repositories/ProcesoRepository');
const ProcesoService = require('../services/ProcesoService');

const createProcesoService = () => {
  const procesoRepository = new ProcesoRepository();
  return new ProcesoService(procesoRepository);
};

module.exports = createProcesoService;
