const CotizacionRepository = require('../repositories/CotizacionRepository');
const CotizacionService = require('../services/CotizacionService');

const createCotizacionService = () => {
  const cotizacionRepository = new CotizacionRepository();
  return new CotizacionService(cotizacionRepository);
};

module.exports = createCotizacionService;
