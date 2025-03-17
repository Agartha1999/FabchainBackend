const createTallerService = require('../dependencies/TallerDependency');

class TallerController {
  static tallerService = createTallerService();

  static async getAllTalleres(req, res) {
    try {
      const talleres = await TallerController.tallerService.getAllTalleres();
      res.status(200).json(talleres);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener talleres', error });
    }
  }

  static async getTallerById(req, res) {
    try {
      const id = Number(req.params.id);
      const taller = await TallerController.tallerService.getTallerById(id);
      if (!taller) return res.status(404).json({ message: 'Taller no encontrado' });
      res.status(200).json(taller);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener taller', error });
    }
  }

  static async createTaller(req, res) {
    try {
      const nuevoTaller = await TallerController.tallerService.createTaller(req.body);
      res.status(201).json(nuevoTaller);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear taller', error });
    }
  }

  static async updateTaller(req, res) {
    try {
      const id = Number(req.params.id);
      await TallerController.tallerService.updateTaller(id, req.body);
      res.status(200).json({ message: 'Taller actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar taller', error });
    }
  }

  static async deleteTaller(req, res) {
    try {
      const id = Number(req.params.id);
      await TallerController.tallerService.deleteTaller(id);
      res.status(200).json({ message: 'Taller eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar taller', error });
    }
  }
}

module.exports = TallerController;
