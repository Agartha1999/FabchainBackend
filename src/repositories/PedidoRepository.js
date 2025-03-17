const database = require('../models');

class PedidoRepository {
  async getAllPedidos() {
    return await database.Pedido.findAll({
      include: [
        { model: database.Proceso, as: 'proceso' },
        { model: database.Taller, as: 'taller' }
      ]
    });
  }

  async getPedidoById(id) {
    return await database.Pedido.findByPk(id, {
      include: [
        { model: database.Proceso, as: 'proceso' },
        { model: database.Taller, as: 'taller' }
      ]
    });
  }

  async createPedido(pedidoData) {
    return await database.Pedido.create(pedidoData);
  }

  async updatePedido(id, updatedData) {
    return await database.Pedido.update(updatedData, {
      where: { idPedido: id }
    });
  }

  async deletePedido(id) {
    const pedido = await database.Pedido.findByPk(id);
    if (!pedido) throw new Error('Pedido no encontrado');
    await pedido.destroy();
    return { message: 'Pedido eliminado con éxito' };
  }
}

module.exports = PedidoRepository;
