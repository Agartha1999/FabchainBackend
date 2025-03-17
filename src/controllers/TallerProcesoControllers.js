const createTallerProcesoService = require('../dependencies/TallerProcesoDependency');

class TallerProcesoController {
  static tallerProcesoService = createTallerProcesoService();

  static async getAllTallerProcesos(req, res) {
    try {
      const tallerProcesos = await TallerProcesoController.tallerProcesoService.getAllTallerProcesos();
      res.status(200).json(tallerProcesos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener procesos de taller', error });
    }
  }

  static async getTallerProcesoById(req, res) {
    try {
      const { idTaller, idProceso } = req.params;
      const tallerProceso = await TallerProcesoController.tallerProcesoService.getTallerProcesoById(idTaller, idProceso);
      if (!tallerProceso) return res.status(404).json({ message: 'Proceso de taller no encontrado' });
      res.status(200).json(tallerProceso);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener proceso de taller', error });
    }
  }

  static async createTallerProceso(req, res) {
    try {
      const nuevoTallerProceso = await TallerProcesoController.tallerProcesoService.createTallerProceso(req.body);
      res.status(201).json(nuevoTallerProceso);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear proceso de taller', error });
    }
  }

  static async updateTallerProceso(req, res) {
    try {
      const { idTaller, idProceso } = req.params;
      await TallerProcesoController.tallerProcesoService.updateTallerProceso(idTaller, idProceso, req.body);
      res.status(200).json({ message: 'Proceso de taller actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar proceso de taller', error });
    }
  }

  static async deleteTallerProceso(req, res) {
    try {
      const { idTaller, idProceso } = req.params;
      await TallerProcesoController.tallerProcesoService.deleteTallerProceso(idTaller, idProceso);
      res.status(200).json({ message: 'Proceso de taller eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar proceso de taller', error });
    }
  }
}

module.exports = TallerProcesoController;
