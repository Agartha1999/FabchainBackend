const database = require('../models');

class ProcesoOtrosRepository {
  async getAllProcesosOtros() {
    return await database.ProcesoOtros.findAll({
      include: [
        {
          model: database.Proceso,
          as: 'proceso'
        },
        {
          model: database.Otros,
          as: 'otros'
        }
      ]
    });
  }

  async getProcesoOtrosByIds(idProceso, idOtro) {
    return await database.ProcesoOtros.findOne({
      where: {
        idProceso: idProceso,
        idOtro: idOtro
      },
      include: [
        {
          model: database.Proceso,
          as: 'proceso'
        },
        {
          model: database.Otros,
          as: 'otros'
        }
      ]
    });
  }

  async createProcesoOtros(data) {
    return await database.ProcesoOtros.create(data);
  }

  async deleteProcesoOtros(idProceso, idOtro) {
    const procesoOtros = await database.ProcesoOtros.findOne({
      where: { idProceso, idOtro }
    });
    if (!procesoOtros) throw new Error('Relación no encontrada');
    await procesoOtros.destroy();
    return { message: 'Relación eliminada con éxito' };
  }
}

module.exports = ProcesoOtrosRepository;
