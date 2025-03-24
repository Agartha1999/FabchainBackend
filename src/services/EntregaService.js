class EntregaService {
    constructor(entregaRepository) {
      this.entregaRepository = entregaRepository;
    }
  
    async getAllEntregas() {
      return await this.entregaRepository.getAllEntregas();
    }
  
    async getEntregaById(id) {
      return await this.entregaRepository.getEntregaById(id);
    }
  
    async createEntrega(data) {
      return await this.entregaRepository.createEntrega(data);
    }
  
    async updateEntrega(id, data) {
      return await this.entregaRepository.updateEntrega(id, data);
    }
  
    async deleteEntrega(id) {
      return await this.entregaRepository.deleteEntrega(id);
    }
  }
  
  module.exports = EntregaService;
  