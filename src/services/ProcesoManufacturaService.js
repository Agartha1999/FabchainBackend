
class ProcesoManufacturaService {
    constructor(procesoManufacturaRepository) {
      this.procesoManufacturaRepository = procesoManufacturaRepository;
    }
  
    async getAllProcesosManufactura() {
      return await this.procesoManufacturaRepository.getAllProcesosManufactura();
    }
  
    async getProcesoManufacturaByIds(idProceso, idManufactura) {
      return await this.procesoManufacturaRepository.getProcesoManufacturaByIds(idProceso, idManufactura);
    }
  
    async createProcesoManufactura(data) {
      return await this.procesoManufacturaRepository.createProcesoManufactura(data);
    }
  
    async deleteProcesoManufactura(idProceso, idManufactura) {
      return await this.procesoManufacturaRepository.deleteProcesoManufactura(idProceso, idManufactura);
    }
  }
  
  module.exports = ProcesoManufacturaService;
  