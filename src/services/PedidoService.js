class PedidoService {
    constructor(pedidoRepository) {
      this.pedidoRepository = pedidoRepository;
    }
  
    async getAllPedidos() {
      return await this.pedidoRepository.getAllPedidos();
    }
  
    async getPedidoById(id) {
      return await this.pedidoRepository.getPedidoById(id);
    }
  
    async createPedido(pedidoData) {
      return await this.pedidoRepository.createPedido(pedidoData);
    }
  
    async updatePedido(id, updatedData) {
      return await this.pedidoRepository.updatePedido(id, updatedData);
    }
  
    async deletePedido(id) {
      return await this.pedidoRepository.deletePedido(id);
    }
  }
  
  module.exports = PedidoService;
  