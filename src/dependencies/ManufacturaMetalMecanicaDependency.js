const ManufacturaMetalMecanicaRepository = require('../repositories/ManufacturaMetalMecanicaRepository');
const ManufacturaMetalMecanicaService = require('../services/ManufacturaMetalMecanicaService');

const createManufacturaMetalMecanicaService = () => {
  const manufacturaRepository = new ManufacturaMetalMecanicaRepository();
  return new ManufacturaMetalMecanicaService(manufacturaRepository);
};

module.exports = createManufacturaMetalMecanicaService;
