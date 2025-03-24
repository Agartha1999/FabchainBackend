class OtrosService {
    constructor(otrosRepository) {
      this.otrosRepository = otrosRepository;
    }
  
    async getAllOtros() {
      return await this.otrosRepository.getAllOtros();
    }
  
    async getOtrosById(id) {
      return await this.otrosRepository.getOtrosById(id);
    }
  
    async createOtros(data) {
      return await this.otrosRepository.createOtros(data);
    }
  
    async updateOtros(id, data) {
      return await this.otrosRepository.updateOtros(id, data);
    }
  
    async deleteOtros(id) {
      return await this.otrosRepository.deleteOtros(id);
    }
  }
  
  module.exports = OtrosService;
  