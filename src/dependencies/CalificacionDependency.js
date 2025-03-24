const CalificacionRepository = require('../repositories/CalificacionRepository');
const CalificacionService = require('../services/CalificacionService');

const createCalificacionService = () => {
  const calificacionRepository = new CalificacionRepository();
  return new CalificacionService(calificacionRepository);
};

module.exports = createCalificacionService;
