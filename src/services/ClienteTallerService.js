class ClienteTallerService {
    constructor(clienteTallerRepository) {
      this.clienteTallerRepository = clienteTallerRepository;
    }
  
    async getAllClientesTaller() {
      return await this.clienteTallerRepository.getAllClientesTaller();
    }
  
    async getClienteTallerById(id) {
      return await this.clienteTallerRepository.getClienteTallerById(id);
    }
  
    async createClienteTaller(clienteData) {
      // Validación básica para evitar duplicados en RUC o DNI
      if (clienteData.ruc || clienteData.dni) {
        const clientes = await this.getAllClientesTaller();
        if (clientes.some(cliente => cliente.ruc === clienteData.ruc || cliente.dni === clienteData.dni)) {
          throw new Error('El RUC o DNI ya está registrado.');
        }
      }
      return await this.clienteTallerRepository.createClienteTaller(clienteData);
    }
  
    async updateClienteTaller(id, updatedData) {
      return await this.clienteTallerRepository.updateClienteTaller(id, updatedData);
    }
  
    async deleteClienteTaller(id) {
      return await this.clienteTallerRepository.deleteClienteTaller(id);
    }
  }
  
  module.exports = ClienteTallerService;