class ProcesoImpresionService {
    constructor(procesoImpresionRepository) {
      this.procesoImpresionRepository = procesoImpresionRepository;
    }
  
    async getAllProcesosImpresion() {
      return await this.procesoImpresionRepository.getAllProcesosImpresion();
    }
  
    async getProcesoImpresionByIds(idProceso, idImpresion) {
      return await this.procesoImpresionRepository.getProcesoImpresionByIds(idProceso, idImpresion);
    }
  
    async createProcesoImpresion(data) {
      return await this.procesoImpresionRepository.createProcesoImpresion(data);
    }
  
    async deleteProcesoImpresion(idProceso, idImpresion) {
      return await this.procesoImpresionRepository.deleteProcesoImpresion(idProceso, idImpresion);
    }
  }
  
  module.exports = ProcesoImpresionService;
  