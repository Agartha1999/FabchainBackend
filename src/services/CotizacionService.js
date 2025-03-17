class CotizacionService {
    constructor(cotizacionRepository) {
      this.cotizacionRepository = cotizacionRepository;
    }
  
    async getAllCotizaciones() {
      return await this.cotizacionRepository.getAllCotizaciones();
    }
  
    async getCotizacionById(id) {
      return await this.cotizacionRepository.getCotizacionById(id);
    }
  
    async createCotizacion(cotizacionData) {
      return await this.cotizacionRepository.createCotizacion(cotizacionData);
    }
  
    async updateCotizacion(id, updatedData) {
      return await this.cotizacionRepository.updateCotizacion(id, updatedData);
    }
  
    async deleteCotizacion(id) {
      return await this.cotizacionRepository.deleteCotizacion(id);
    }
  }
  
  module.exports = CotizacionService;
  