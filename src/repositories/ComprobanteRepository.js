const database = require('../models');

class ComprobanteRepository {
  async getAllComprobantes() {
    return await database.Comprobante.findAll();
  }

  async getComprobanteById(id) {
    return await database.Comprobante.findByPk(id);
  }

  async createComprobante(data) {
    return await database.Comprobante.create(data);
  }

  async updateComprobante(id, data) {
    return await database.Comprobante.update(data, {
      where: { idComprobante: id }
    });
  }

  async deleteComprobante(id) {
    const comprobante = await database.Comprobante.findByPk(id);
    if (!comprobante) throw new Error('Comprobante no encontrado');
    await comprobante.destroy();
    return { message: 'Comprobante eliminado con éxito' };
  }
}

module.exports = ComprobanteRepository;
