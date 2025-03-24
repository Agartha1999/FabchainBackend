class ComprobanteService {
    constructor(comprobanteRepository) {
      this.comprobanteRepository = comprobanteRepository;
    }
  
    async getAllComprobantes() {
      return await this.comprobanteRepository.getAllComprobantes();
    }
  
    async getComprobanteById(id) {
      return await this.comprobanteRepository.getComprobanteById(id);
    }
  
    async createComprobante(data) {
      return await this.comprobanteRepository.createComprobante(data);
    }
  
    async updateComprobante(id, data) {
      return await this.comprobanteRepository.updateComprobante(id, data);
    }
  
    async deleteComprobante(id) {
      return await this.comprobanteRepository.deleteComprobante(id);
    }
  }
  
  module.exports = ComprobanteService;
  