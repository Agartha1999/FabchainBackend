const ProcesoManufacturaRepository = require('../repositories/ProcesoManufacturaRepository');
const ProcesoManufacturaService = require('../services/ProcesoManufacturaService');

const createProcesoManufacturaService = () => {
  const procesoManufacturaRepository = new ProcesoManufacturaRepository();
  return new ProcesoManufacturaService(procesoManufacturaRepository);
};

module.exports = createProcesoManufacturaService;
