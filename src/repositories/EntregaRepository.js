const database = require('../models');

class EntregaRepository {
  async getAllEntregas() {
    return await database.Entrega.findAll({
      include: [
        {
          model: database.Pedido,
          as: 'pedido'
        }
      ]
    });
  }

  async getEntregaById(id) {
    return await database.Entrega.findByPk(id, {
      include: [
        {
          model: database.Pedido,
          as: 'pedido'
        }
      ]
    });
  }

  async createEntrega(data) {
    return await database.Entrega.create(data);
  }

  async updateEntrega(id, data) {
    return await database.Entrega.update(data, {
      where: { idEntrega: id }
    });
  }

  async deleteEntrega(id) {
    const entrega = await database.Entrega.findByPk(id);
    if (!entrega) throw new Error('Entrega no encontrada');
    await entrega.destroy();
    return { message: 'Entrega eliminada con éxito' };
  }
}

module.exports = EntregaRepository;
