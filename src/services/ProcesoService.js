class ProcesoService {
    constructor(procesoRepository) {
      this.procesoRepository = procesoRepository;
    }
  
    async getAllProcesos() {
      return await this.procesoRepository.getAllProcesos();
    }
  
    async getProcesoById(id) {
      return await this.procesoRepository.getProcesoById(id);
    }
  
    async createProceso(procesoData) {
      return await this.procesoRepository.createProceso(procesoData);
    }
  
    async updateProceso(id, updatedData) {
      return await this.procesoRepository.updateProceso(id, updatedData);
    }
  
    async deleteProceso(id) {
      return await this.procesoRepository.deleteProceso(id);
    }
  }
  
  module.exports = ProcesoService;
  