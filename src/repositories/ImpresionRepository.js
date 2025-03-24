const database = require('../models');

class ImpresionRepository {
  async getAllImpresiones() {
    return await database.Impresion.findAll();
  }

  async getImpresionById(id) {
    return await database.Impresion.findByPk(id);
  }

  async createImpresion(data) {
    return await database.Impresion.create(data);
  }

  async updateImpresion(id, data) {
    return await database.Impresion.update(data, {
      where: { idImpresion: id }
    });
  }

  async deleteImpresion(id) {
    const impresion = await database.Impresion.findByPk(id);
    if (!impresion) throw new Error('Impresión no encontrada');
    await impresion.destroy();
    return { message: 'Impresión eliminada con éxito' };
  }
}

module.exports = ImpresionRepository;
