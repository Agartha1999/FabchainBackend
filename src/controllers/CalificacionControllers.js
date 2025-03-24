const createCalificacionService = require('../dependencies/CalificacionDependency');

class CalificacionController {
  static calificacionService = createCalificacionService();

  static async getAllCalificaciones(req, res) {
    try {
      const lista = await CalificacionController.calificacionService.getAllCalificaciones();
      res.status(200).json(lista);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener calificaciones', error });
    }
  }

  static async getCalificacionById(req, res) {
    try {
      const id = Number(req.params.id);
      const item = await CalificacionController.calificacionService.getCalificacionById(id);
      if (!item) return res.status(404).json({ message: 'Calificación no encontrada' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener calificación', error });
    }
  }

  static async createCalificacion(req, res) {
    try {
      const nueva = await CalificacionController.calificacionService.createCalificacion(req.body);
      res.status(201).json(nueva);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear calificación', error });
    }
  }

  static async updateCalificacion(req, res) {
    try {
      const id = Number(req.params.id);
      await CalificacionController.calificacionService.updateCalificacion(id, req.body);
      res.status(200).json({ message: 'Calificación actualizada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar calificación', error });
    }
  }

  static async deleteCalificacion(req, res) {
    try {
      const id = Number(req.params.id);
      await CalificacionController.calificacionService.deleteCalificacion(id);
      res.status(200).json({ message: 'Calificación eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar calificación', error });
    }
  }
}

module.exports = CalificacionController;
