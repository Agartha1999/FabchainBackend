const TallerProcesoRepository = require('../repositories/TallerProcesoRepository');
const TallerProcesoService = require('../services/TallerProcesoService');

const createTallerProcesoService = () => {
  const tallerProcesoRepository = new TallerProcesoRepository();
  return new TallerProcesoService(tallerProcesoRepository);
};

module.exports = createTallerProcesoService;
