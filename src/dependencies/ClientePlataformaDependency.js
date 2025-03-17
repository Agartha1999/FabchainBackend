const ClientePlataformaRepository = require('../repositories/ClientePlataformaRepository');
const ClientePlataformaService = require('../services/ClientePlataformaService');

const createClientePlataformaService = () => {
  const clientePlataformaRepository = new ClientePlataformaRepository();
  return new ClientePlataformaService(clientePlataformaRepository);
};

module.exports = createClientePlataformaService;
