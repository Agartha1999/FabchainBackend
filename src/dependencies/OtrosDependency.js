const OtrosRepository = require('../repositories/OtrosRepository');
const OtrosService = require('../services/OtrosService');

const createOtrosService = () => {
  const otrosRepository = new OtrosRepository();
  return new OtrosService(otrosRepository);
};

module.exports = createOtrosService;
