class TallerProcesoService {
    constructor(tallerProcesoRepository) {
      this.tallerProcesoRepository = tallerProcesoRepository;
    }
  
    async getAllTallerProcesos() {
      return await this.tallerProcesoRepository.getAllTallerProcesos();
    }
  
    async getTallerProcesoById(idTaller, idProceso) {
      return await this.tallerProcesoRepository.getTallerProcesoById(idTaller, idProceso);
    }
  
    async createTallerProceso(tallerProcesoData) {
      return await this.tallerProcesoRepository.createTallerProceso(tallerProcesoData);
    }
  
    async updateTallerProceso(idTaller, idProceso, updatedData) {
      return await this.tallerProcesoRepository.updateTallerProceso(idTaller, idProceso, updatedData);
    }
  
    async deleteTallerProceso(idTaller, idProceso) {
      return await this.tallerProcesoRepository.deleteTallerProceso(idTaller, idProceso);
    }
  }
  
  module.exports = TallerProcesoService;