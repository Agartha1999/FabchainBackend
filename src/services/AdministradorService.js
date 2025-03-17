class AdministradorService {
    constructor(administradorRepository) {
      this.administradorRepository = administradorRepository;
    }
  
    async getAllAdministradores() {
      return await this.administradorRepository.getAllAdministradores();
    }
  
    async getAdministradorById(id) {
      return await this.administradorRepository.getAdministradorById(id);
    }
  
    async createAdministrador(administradorData) {
      return await this.administradorRepository.createAdministrador(administradorData);
    }
  
    async updateAdministrador(id, updatedData) {
      return await this.administradorRepository.updateAdministrador(id, updatedData);
    }
  
    async deleteAdministrador(id) {
      return await this.administradorRepository.deleteAdministrador(id);
    }
  }
  
  module.exports = AdministradorService;