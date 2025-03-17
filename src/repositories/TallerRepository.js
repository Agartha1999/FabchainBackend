const database = require('../models');

class TallerRepository {
  async getAllTalleres() {
    return await database.Taller.findAll({
      include: [
        {
          model: database.ClienteTaller,
          as: 'clienteTaller'
        }
      ]
    });
  }

  async getTallerById(id) {
    return await database.Taller.findByPk(id, {
      include: [
        {
          model: database.ClienteTaller,
          as: 'clienteTaller'
        }
      ]
    });
  }

  async createTaller(tallerData) {
    return await database.Taller.create(tallerData);
  }

  async updateTaller(id, updatedData) {
    return await database.Taller.update(updatedData, {
      where: { idTaller: id }
    });
  }

  async deleteTaller(id) {
    const taller = await database.Taller.findByPk(id);
    if (!taller) throw new Error('Taller no encontrado');
    await taller.destroy();
    return { message: 'Taller eliminado con éxito' };
  }
}

module.exports = TallerRepository;
