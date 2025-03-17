const database = require('../models');

class AdministradorRepository {
  async getAllAdministradores() {
    return await database.Administrador.findAll({
      include: [
        { model: database.Usuario, as: 'usuario' }
      ]
    });
  }

  async getAdministradorById(id) {
    return await database.Administrador.findByPk(id, {
      include: [
        { model: database.Usuario, as: 'usuario' }
      ]
    });
  }

  async createAdministrador(administradorData) {
    return await database.Administrador.create(administradorData);
  }

  async updateAdministrador(id, updatedData) {
    return await database.Administrador.update(updatedData, {
      where: { idAdministrador: id }
    });
  }

  async deleteAdministrador(id) {
    const administrador = await database.Administrador.findByPk(id);
    if (!administrador) throw new Error('Administrador no encontrado');
    await administrador.destroy();
    return { message: 'Administrador eliminado con éxito' };
  }
}

module.exports = AdministradorRepository;