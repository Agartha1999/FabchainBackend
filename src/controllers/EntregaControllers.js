const createEntregaService = require('../dependencies/EntregaDependency');

class EntregaController {
  static entregaService = createEntregaService();

  static async getAllEntregas(req, res) {
    try {
      const entregas = await EntregaController.entregaService.getAllEntregas();
      res.status(200).json(entregas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener entregas', error });
    }
  }

  static async getEntregaById(req, res) {
    try {
      const id = Number(req.params.id);
      const entrega = await EntregaController.entregaService.getEntregaById(id);
      if (!entrega) return res.status(404).json({ message: 'Entrega no encontrada' });
      res.status(200).json(entrega);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener entrega', error });
    }
  }

  static async createEntrega(req, res) {
    try {
      const nuevaEntrega = await EntregaController.entregaService.createEntrega(req.body);
      res.status(201).json(nuevaEntrega);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear entrega', error });
    }
  }

  static async updateEntrega(req, res) {
    try {
      const id = Number(req.params.id);
      await EntregaController.entregaService.updateEntrega(id, req.body);
      res.status(200).json({ message: 'Entrega actualizada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar entrega', error });
    }
  }

  static async deleteEntrega(req, res) {
    try {
      const id = Number(req.params.id);
      await EntregaController.entregaService.deleteEntrega(id);
      res.status(200).json({ message: 'Entrega eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar entrega', error });
    }
  }
}

module.exports = EntregaController;
