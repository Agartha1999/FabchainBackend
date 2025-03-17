const database = require('../models');

class TallerProcesoRepository {
  async getAllTallerProcesos() {
    return await database.TallerProceso.findAll({
      include: [
        { model: database.Taller, as: 'taller' },
        { model: database.Proceso, as: 'proceso' }
      ]
    });
  }

  async getTallerProcesoById(idTaller, idProceso) {
    return await database.TallerProceso.findOne({
      where: { idTaller, idProceso },
      include: [
        { model: database.Taller, as: 'taller' },
        { model: database.Proceso, as: 'proceso' }
      ]
    });
  }

  async createTallerProceso(tallerProcesoData) {
    return await database.TallerProceso.create(tallerProcesoData);
  }

  async updateTallerProceso(idTaller, idProceso, updatedData) {
    return await database.TallerProceso.update(updatedData, {
      where: { idTaller, idProceso }
    });
  }

  async deleteTallerProceso(idTaller, idProceso) {
    const tallerProceso = await database.TallerProceso.findOne({
      where: { idTaller, idProceso }
    });
    if (!tallerProceso) throw new Error('Proceso de taller no encontrado');
    await tallerProceso.destroy();
    return { message: 'Proceso de taller eliminado con éxito' };
  }
}

module.exports = TallerProcesoRepository;
