class ManufacturaMetalMecanicaService {
    constructor(manufacturaRepository) {
      this.manufacturaRepository = manufacturaRepository;
    }
  
    async getAllManufacturas() {
      return await this.manufacturaRepository.getAllManufacturas();
    }
  
    async getManufacturaById(id) {
      return await this.manufacturaRepository.getManufacturaById(id);
    }
  
    async createManufactura(data) {
      return await this.manufacturaRepository.createManufactura(data);
    }
  
    async updateManufactura(id, data) {
      return await this.manufacturaRepository.updateManufactura(id, data);
    }
  
    async deleteManufactura(id) {
      return await this.manufacturaRepository.deleteManufactura(id);
    }
  }
  
  module.exports = ManufacturaMetalMecanicaService;
  