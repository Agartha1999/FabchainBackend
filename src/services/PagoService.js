class PagoService {
    constructor(pagoRepository) {
      this.pagoRepository = pagoRepository;
    }
  
    async getAllPagos() {
      return await this.pagoRepository.getAllPagos();
    }
  
    async getPagoById(id) {
      return await this.pagoRepository.getPagoById(id);
    }
  
    async createPago(data) {
      return await this.pagoRepository.createPago(data);
    }
  
    async updatePago(id, data) {
      return await this.pagoRepository.updatePago(id, data);
    }
  
    async deletePago(id) {
      return await this.pagoRepository.deletePago(id);
    }
  }
  
  module.exports = PagoService;
  