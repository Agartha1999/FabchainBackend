const createProcesoService = require('../dependencies/ProcesoDependency');

class ProcesoController {
  static procesoService = createProcesoService();

  static async getAllProcesos(req, res) {
    try {
      const procesos = await ProcesoController.procesoService.getAllProcesos();
      res.status(200).json(procesos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener procesos', error });
    }
  }

  static async getProcesoById(req, res) {
    try {
      const id = Number(req.params.id);
      const proceso = await ProcesoController.procesoService.getProcesoById(id);
      if (!proceso) return res.status(404).json({ message: 'Proceso no encontrado' });
      res.status(200).json(proceso);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener proceso', error });
    }
  }

  static async createProceso(req, res) {
    try {
      const nuevoProceso = await ProcesoController.procesoService.createProceso(req.body);
      res.status(201).json(nuevoProceso);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear proceso', error });
    }
  }

  static async updateProceso(req, res) {
    try {
      const id = Number(req.params.id);
      await ProcesoController.procesoService.updateProceso(id, req.body);
      res.status(200).json({ message: 'Proceso actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar proceso', error });
    }
  }

  static async deleteProceso(req, res) {
    try {
      const id = Number(req.params.id);
      await ProcesoController.procesoService.deleteProceso(id);
      res.status(200).json({ message: 'Proceso eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar proceso', error });
    }
  }
}

module.exports = ProcesoController;
