const TallerRepository = require('../repositories/TallerRepository');
const TallerService = require('../services/TallerService');

const createTallerService = () => {
  const tallerRepository = new TallerRepository();
  return new TallerService(tallerRepository);
};

module.exports = createTallerService;
