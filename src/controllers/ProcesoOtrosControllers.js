const createProcesoOtrosService = require('../dependencies/ProcesoOtrosDependency');

class ProcesoOtrosController {
  static procesoOtrosService = createProcesoOtrosService();

  static async getAllProcesosOtros(req, res) {
    try {
      const procesosOtros = await ProcesoOtrosController.procesoOtrosService.getAllProcesosOtros();
      res.status(200).json(procesosOtros);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener procesos de otros', error });
    }
  }

  static async getProcesoOtrosByIds(req, res) {
    try {
      const { idProceso, idOtro } = req.params;
      const procesoOtros = await ProcesoOtrosController.procesoOtrosService.getProcesoOtrosByIds(idProceso, idOtro);
      if (!procesoOtros) return res.status(404).json({ message: 'Relación no encontrada' });
      res.status(200).json(procesoOtros);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la relación', error });
    }
  }

  static async createProcesoOtros(req, res) {
    try {
      const nuevaRelacion = await ProcesoOtrosController.procesoOtrosService.createProcesoOtros(req.body);
      res.status(201).json(nuevaRelacion);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la relación', error });
    }
  }

  static async deleteProcesoOtros(req, res) {
    try {
      const { idProceso, idOtro } = req.params;
      await ProcesoOtrosController.procesoOtrosService.deleteProcesoOtros(idProceso, idOtro);
      res.status(200).json({ message: 'Relación eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la relación', error });
    }
  }
}

module.exports = ProcesoOtrosController;
