const createProcesoManufacturaService = require('../dependencies/ProcesoManufacturaDependency');

class ProcesoManufacturaController {
  static procesoManufacturaService = createProcesoManufacturaService();

  static async getAllProcesosManufactura(req, res) {
    try {
      const procesosManufactura = await ProcesoManufacturaController.procesoManufacturaService.getAllProcesosManufactura();
      res.status(200).json(procesosManufactura);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener procesos de manufactura', error });
    }
  }

  static async getProcesoManufacturaByIds(req, res) {
    try {
      const { idProceso, idManufactura } = req.params;
      const procesoManufactura = await ProcesoManufacturaController.procesoManufacturaService.getProcesoManufacturaByIds(idProceso, idManufactura);
      if (!procesoManufactura) return res.status(404).json({ message: 'Relación no encontrada' });
      res.status(200).json(procesoManufactura);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la relación', error });
    }
  }

  static async createProcesoManufactura(req, res) {
    try {
      const nuevaRelación = await ProcesoManufacturaController.procesoManufacturaService.createProcesoManufactura(req.body);
      res.status(201).json(nuevaRelación);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la relación', error });
    }
  }

  static async deleteProcesoManufactura(req, res) {
    try {
      const { idProceso, idManufactura } = req.params;
      await ProcesoManufacturaController.procesoManufacturaService.deleteProcesoManufactura(idProceso, idManufactura);
      res.status(200).json({ message: 'Relación eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la relación', error });
    }
  }
}

module.exports = ProcesoManufacturaController;
