const database = require('../models');

class ProcesoManufacturaRepository {
  async getAllProcesosManufactura() {
    return await database.ProcesoManufactura.findAll({
      include: [
        {
          model: database.Proceso,
          as: 'proceso'
        },
        {
          model: database.ManufacturaMetalMecanica,
          as: 'manufactura'
        }
      ]
    });
  }

  async getProcesoManufacturaByIds(idProceso, idManufactura) {
    return await database.ProcesoManufactura.findOne({
      where: {
        idProceso: idProceso,
        idManufactura: idManufactura
      },
      include: [
        {
          model: database.Proceso,
          as: 'proceso'
        },
        {
          model: database.ManufacturaMetalMecanica,
          as: 'manufactura'
        }
      ]
    });
  }

  async createProcesoManufactura(data) {
    return await database.ProcesoManufactura.create(data);
  }

  async deleteProcesoManufactura(idProceso, idManufactura) {
    const procesoManufactura = await database.ProcesoManufactura.findOne({
      where: { idProceso, idManufactura }
    });
    if (!procesoManufactura) throw new Error('Relación no encontrada');
    await procesoManufactura.destroy();
    return { message: 'Relación eliminada con éxito' };
  }
}

module.exports = ProcesoManufacturaRepository;
