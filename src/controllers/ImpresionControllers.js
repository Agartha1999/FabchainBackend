const createImpresionService = require('../dependencies/ImpresionDependency');

class ImpresionController {
  static impresionService = createImpresionService();

  static async getAllImpresiones(req, res) {
    try {
      const impresiones = await ImpresionController.impresionService.getAllImpresiones();
      res.status(200).json(impresiones);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener impresiones', error });
    }
  }

  static async getImpresionById(req, res) {
    try {
      const id = Number(req.params.id);
      const impresion = await ImpresionController.impresionService.getImpresionById(id);
      if (!impresion) return res.status(404).json({ message: 'Impresión no encontrada' });
      res.status(200).json(impresion);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener impresión', error });
    }
  }

  static async createImpresion(req, res) {
    try {
      const nuevaImpresion = await ImpresionController.impresionService.createImpresion(req.body);
      res.status(201).json(nuevaImpresion);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear impresión', error });
    }
  }

  static async updateImpresion(req, res) {
    try {
      const id = Number(req.params.id);
      await ImpresionController.impresionService.updateImpresion(id, req.body);
      res.status(200).json({ message: 'Impresión actualizada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar impresión', error });
    }
  }

  static async deleteImpresion(req, res) {
    try {
      const id = Number(req.params.id);
      await ImpresionController.impresionService.deleteImpresion(id);
      res.status(200).json({ message: 'Impresión eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar impresión', error });
    }
  }
}

module.exports = ImpresionController;
