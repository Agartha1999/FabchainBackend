class CalificacionService {
    constructor(calificacionRepository) {
      this.calificacionRepository = calificacionRepository;
    }
  
    async getAllCalificaciones() {
      return await this.calificacionRepository.getAllCalificaciones();
    }
  
    async getCalificacionById(id) {
      return await this.calificacionRepository.getCalificacionById(id);
    }
  
    async createCalificacion(data) {
      return await this.calificacionRepository.createCalificacion(data);
    }
  
    async updateCalificacion(id, data) {
      return await this.calificacionRepository.updateCalificacion(id, data);
    }
  
    async deleteCalificacion(id) {
      return await this.calificacionRepository.deleteCalificacion(id);
    }
  }
  
  module.exports = CalificacionService;
  