const database = require('../models');

class UsuarioRepository {
  async getAllUsuarios() {
    return await database.Usuario.findAll();
  }

  async getUsuarioById(id) {
    return await database.Usuario.findByPk(id);
  }

  async createUsuario(usuarioData) {
    return await database.Usuario.create(usuarioData);
  }

  async updateUsuario(id, updatedData) {
    return await database.Usuario.update(updatedData, {
      where: { idUsuario: id }
    });
  }

  async deleteUsuario(id) {
    const usuario = await database.Usuario.findByPk(id);
    if (!usuario) throw new Error('Usuario no encontrado');
    await usuario.destroy();
    return { message: 'Usuario eliminado con éxito' };
  }

  async getByEmail(email) {
    return await database.Usuario.findOne({ where: { email } });
  }
}

module.exports = UsuarioRepository;
