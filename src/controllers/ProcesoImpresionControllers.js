const createProcesoImpresionService = require('../dependencies/ProcesoImpresionDependency');

class ProcesoImpresionController {
  static procesoImpresionService = createProcesoImpresionService();

  static async getAllProcesosImpresion(req, res) {
    try {
      const procesosImpresion = await ProcesoImpresionController.procesoImpresionService.getAllProcesosImpresion();
      res.status(200).json(procesosImpresion);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener procesos de impresión', error });
    }
  }

  static async getProcesoImpresionByIds(req, res) {
    try {
      const { idProceso, idImpresion } = req.params;
      const procesoImpresion = await ProcesoImpresionController.procesoImpresionService.getProcesoImpresionByIds(idProceso, idImpresion);
      if (!procesoImpresion) return res.status(404).json({ message: 'Relación no encontrada' });
      res.status(200).json(procesoImpresion);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la relación', error });
    }
  }

  static async createProcesoImpresion(req, res) {
    try {
      const nuevaRelación = await ProcesoImpresionController.procesoImpresionService.createProcesoImpresion(req.body);
      res.status(201).json(nuevaRelación);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la relación', error });
    }
  }

  static async deleteProcesoImpresion(req, res) {
    try {
      const { idProceso, idImpresion } = req.params;
      await ProcesoImpresionController.procesoImpresionService.deleteProcesoImpresion(idProceso, idImpresion);
      res.status(200).json({ message: 'Relación eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la relación', error });
    }
  }
}

module.exports = ProcesoImpresionController;
