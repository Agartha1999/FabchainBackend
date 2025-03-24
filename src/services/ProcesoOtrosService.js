class ProcesoOtrosService {
    constructor(procesoOtrosRepository) {
      this.procesoOtrosRepository = procesoOtrosRepository;
    }
  
    async getAllProcesosOtros() {
      return await this.procesoOtrosRepository.getAllProcesosOtros();
    }
  
    async getProcesoOtrosByIds(idProceso, idOtro) {
      return await this.procesoOtrosRepository.getProcesoOtrosByIds(idProceso, idOtro);
    }
  
    async createProcesoOtros(data) {
      return await this.procesoOtrosRepository.createProcesoOtros(data);
    }
  
    async deleteProcesoOtros(idProceso, idOtro) {
      return await this.procesoOtrosRepository.deleteProcesoOtros(idProceso, idOtro);
    }
  }
  
  module.exports = ProcesoOtrosService;
  