const database = require('../models');

class CalificacionRepository {
  async getAllCalificaciones() {
    return await database.Calificacion.findAll();
  }

  async getCalificacionById(id) {
    return await database.Calificacion.findByPk(id);
  }

  async createCalificacion(data) {
    return await database.Calificacion.create(data);
  }

  async updateCalificacion(id, data) {
    return await database.Calificacion.update(data, {
      where: { idEntrega: id }
    });
  }

  async deleteCalificacion(id) {
    const calificacion = await database.Calificacion.findByPk(id);
    if (!calificacion) throw new Error('Calificación no encontrada');
    await calificacion.destroy();
    return { message: 'Calificación eliminada con éxito' };
  }
}

module.exports = CalificacionRepository;
