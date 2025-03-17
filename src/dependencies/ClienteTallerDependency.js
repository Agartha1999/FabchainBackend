const ClienteTallerRepository = require('../repositories/ClienteTallerRepository');
const ClienteTallerService = require('../services/ClienteTallerService');

const createClienteTallerService = () => {
  const clienteTallerRepository = new ClienteTallerRepository();
  return new ClienteTallerService(clienteTallerRepository);
};

module.exports = createClienteTallerService;
