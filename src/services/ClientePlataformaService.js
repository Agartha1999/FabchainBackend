class ClientePlataformaService {
    constructor(clientePlataformaRepository) {
      this.clientePlataformaRepository = clientePlataformaRepository;
    }
  
    async getAllClientesPlataforma() {
      return await this.clientePlataformaRepository.getAllClientesPlataforma();
    }
  
    async getClientePlataformaById(id) {
      return await this.clientePlataformaRepository.getClientePlataformaById(id);
    }
  
    async createClientePlataforma(clientePlataformaData) {
      return await this.clientePlataformaRepository.createClientePlataforma(clientePlataformaData);
    }
  
    async updateClientePlataforma(id, updatedData) {
      return await this.clientePlataformaRepository.updateClientePlataforma(id, updatedData);
    }
  
    async deleteClientePlataforma(id) {
      return await this.clientePlataformaRepository.deleteClientePlataforma(id);
    }
  }
  
  module.exports = ClientePlataformaService;
  