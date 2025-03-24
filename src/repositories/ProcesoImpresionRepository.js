const database = require('../models');

class ProcesoImpresionRepository {
  async getAllProcesosImpresion() {
    return await database.ProcesoImpresion.findAll({
      include: [
        {
          model: database.Proceso,
          as: 'proceso'
        },
        {
          model: database.Impresion,
          as: 'impresion'
        }
      ]
    });
  }

  async getProcesoImpresionByIds(idProceso, idImpresion) {
    return await database.ProcesoImpresion.findOne({
      where: {
        idProceso: idProceso,
        idImpresion: idImpresion
      },
      include: [
        {
          model: database.Proceso,
          as: 'proceso'
        },
        {
          model: database.Impresion,
          as: 'impresion'
        }
      ]
    });
  }

  async createProcesoImpresion(data) {
    return await database.ProcesoImpresion.create(data);
  }

  async deleteProcesoImpresion(idProceso, idImpresion) {
    const procesoImpresion = await database.ProcesoImpresion.findOne({
      where: { idProceso, idImpresion }
    });
    if (!procesoImpresion) throw new Error('Relación no encontrada');
    await procesoImpresion.destroy();
    return { message: 'Relación eliminada con éxito' };
  }
}

module.exports = ProcesoImpresionRepository;
