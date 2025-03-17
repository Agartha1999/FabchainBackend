class TallerService {
    constructor(tallerRepository) {
      this.tallerRepository = tallerRepository;
    }
  
    async getAllTalleres() {
      return await this.tallerRepository.getAllTalleres();
    }
  
    async getTallerById(id) {
      return await this.tallerRepository.getTallerById(id);
    }
  
    async createTaller(tallerData) {
      return await this.tallerRepository.createTaller(tallerData);
    }
  
    async updateTaller(id, updatedData) {
      return await this.tallerRepository.updateTaller(id, updatedData);
    }
  
    async deleteTaller(id) {
      return await this.tallerRepository.deleteTaller(id);
    }
  }
  
  module.exports = TallerService;
  