const database = require('../models');

class ManufacturaMetalMecanicaRepository {
  async getAllManufacturas() {
    return await database.ManufacturaMetalMecanica.findAll();
  }

  async getManufacturaById(id) {
    return await database.ManufacturaMetalMecanica.findByPk(id);
  }

  async createManufactura(data) {
    return await database.ManufacturaMetalMecanica.create(data);
  }

  async updateManufactura(id, data) {
    return await database.ManufacturaMetalMecanica.update(data, {
      where: { idManufactura: id }
    });
  }

  async deleteManufactura(id) {
    const manufactura = await database.ManufacturaMetalMecanica.findByPk(id);
    if (!manufactura) throw new Error('Manufactura no encontrada');
    await manufactura.destroy();
    return { message: 'Manufactura eliminada con éxito' };
  }
}

module.exports = ManufacturaMetalMecanicaRepository;
