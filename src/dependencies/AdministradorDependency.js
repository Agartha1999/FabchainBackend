const AdministradorRepository = require('../repositories/AdministradorRepository');
const AdministradorService = require('../services/AdministradorService');

const createAdministradorService = () => {
  const administradorRepository = new AdministradorRepository();
  return new AdministradorService(administradorRepository);
};

module.exports = createAdministradorService;
