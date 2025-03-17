const database = require('../models');

class ClienteTallerRepository {
  async getAllClientesTaller() {
    return await database.ClienteTaller.findAll({
      include: [
        {
          model: database.Usuario,
          as: 'usuario'
        }
      ]
    });
  }

  async getClienteTallerById(id) {
    return await database.ClienteTaller.findByPk(id, {
      include: [
        {
          model: database.Usuario,
          as: 'usuario'
        }
      ]
    });
  }

  async createClienteTaller(clienteData) {
    return await database.ClienteTaller.create(clienteData);
  }

  async updateClienteTaller(id, updatedData) {
    return await database.ClienteTaller.update(updatedData, {
      where: { idClienteTaller: id }
    });
  }

  async deleteClienteTaller(id) {
    const cliente = await database.ClienteTaller.findByPk(id);
    if (!cliente) throw new Error('Cliente de taller no encontrado');
    await cliente.destroy();
    return { message: 'Cliente de taller eliminado con éxito' };
  }
}

module.exports = ClienteTallerRepository;
