class ImpresionService {
    constructor(impresionRepository) {
      this.impresionRepository = impresionRepository;
    }
  
    async getAllImpresiones() {
      return await this.impresionRepository.getAllImpresiones();
    }
  
    async getImpresionById(id) {
      return await this.impresionRepository.getImpresionById(id);
    }
  
    async createImpresion(data) {
      return await this.impresionRepository.createImpresion(data);
    }
  
    async updateImpresion(id, data) {
      return await this.impresionRepository.updateImpresion(id, data);
    }
  
    async deleteImpresion(id) {
      return await this.impresionRepository.deleteImpresion(id);
    }
  }
  
  module.exports = ImpresionService;
  