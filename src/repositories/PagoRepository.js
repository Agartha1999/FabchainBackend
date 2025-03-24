const database = require('../models');

class PagoRepository {
  async getAllPagos() {
    return await database.Pago.findAll({
      include: [
        {
          model: database.Taller,
          as: 'taller'
        },
        {
          model: database.Pedido,
          as: 'pedido'
        }
      ]
    });
  }

  async getPagoById(id) {
    return await database.Pago.findByPk(id, {
      include: [
        {
          model: database.Taller,
          as: 'taller'
        },
        {
          model: database.Pedido,
          as: 'pedido'
        }
      ]
    });
  }

  async createPago(data) {
    return await database.Pago.create(data);
  }

  async updatePago(id, data) {
    return await database.Pago.update(data, {
      where: { idPago: id }
    });
  }

  async deletePago(id) {
    const pago = await database.Pago.findByPk(id);
    if (!pago) throw new Error('Pago no encontrado');
    await pago.destroy();
    return { message: 'Pago eliminado con éxito' };
  }
}

module.exports = PagoRepository;
