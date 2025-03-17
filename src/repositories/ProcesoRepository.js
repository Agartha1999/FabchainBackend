const database = require('../models');

class ProcesoRepository {
  async getAllProcesos() {
    return await database.Proceso.findAll();
  }

  async getProcesoById(id) {
    return await database.Proceso.findByPk(id);
  }

  async createProceso(procesoData) {
    return await database.Proceso.create(procesoData);
  }

  async updateProceso(id, updatedData) {
    return await database.Proceso.update(updatedData, {
      where: { idProceso: id }
    });
  }

  async deleteProceso(id) {
    const proceso = await database.Proceso.findByPk(id);
    if (!proceso) throw new Error('Proceso no encontrado');
    await proceso.destroy();
    return { message: 'Proceso eliminado con éxito' };
  }
}

module.exports = ProcesoRepository;
