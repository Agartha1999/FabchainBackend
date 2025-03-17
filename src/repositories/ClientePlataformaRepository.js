const database = require('../models');

class ClientePlataformaRepository {
  async getAllClientesPlataforma() {
    return await database.ClientePlataforma.findAll({
      include: [
        { model: database.Usuario, as: 'usuario' }
      ]
    });
  }

  async getClientePlataformaById(id) {
    return await database.ClientePlataforma.findByPk(id, {
      include: [
        { model: database.Usuario, as: 'usuario' }
      ]
    });
  }

  async createClientePlataforma(clientePlataformaData) {
    return await database.ClientePlataforma.create(clientePlataformaData);
  }

  async updateClientePlataforma(id, updatedData) {
    return await database.ClientePlataforma.update(updatedData, {
      where: { idCliente: id }
    });
  }

  async deleteClientePlataforma(id) {
    const clientePlataforma = await database.ClientePlataforma.findByPk(id);
    if (!clientePlataforma) throw new Error('Cliente plataforma no encontrado');
    await clientePlataforma.destroy();
    return { message: 'Cliente plataforma eliminado con éxito' };
  }
}

module.exports = ClientePlataformaRepository;
