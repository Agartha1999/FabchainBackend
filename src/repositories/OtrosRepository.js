const database = require('../models');

class OtrosRepository {
  async getAllOtros() {
    return await database.Otros.findAll();
  }

  async getOtrosById(id) {
    return await database.Otros.findByPk(id);
  }

  async createOtros(data) {
    return await database.Otros.create(data);
  }

  async updateOtros(id, data) {
    return await database.Otros.update(data, {
      where: { idOtro: id }
    });
  }

  async deleteOtros(id) {
    const otros = await database.Otros.findByPk(id);
    if (!otros) throw new Error('Otro no encontrado');
    await otros.destroy();
    return { message: 'Otro eliminado con éxito' };
  }
}

module.exports = OtrosRepository;
