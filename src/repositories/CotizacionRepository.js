const database = require('../models');

class CotizacionRepository {
  async getAllCotizaciones() {
    return await database.Cotizacion.findAll({
      include: [
        { model: database.Pedido, as: 'pedido' }
      ]
    });
  }

  async getCotizacionById(id) {
    return await database.Cotizacion.findByPk(id, {
      include: [
        { model: database.Pedido, as: 'pedido' }
      ]
    });
  }

  async createCotizacion(cotizacionData) {
    return await database.Cotizacion.create(cotizacionData);
  }

  async updateCotizacion(id, updatedData) {
    return await database.Cotizacion.update(updatedData, {
      where: { idPedido: id }
    });
  }

  async deleteCotizacion(id) {
    const cotizacion = await database.Cotizacion.findByPk(id);
    if (!cotizacion) throw new Error('Cotización no encontrada');
    await cotizacion.destroy();
    return { message: 'Cotización eliminada con éxito' };
  }
}

module.exports = CotizacionRepository;
