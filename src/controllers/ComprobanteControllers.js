const createComprobanteService = require('../dependencies/ComprobanteDependency');

class ComprobanteController {
  static comprobanteService = createComprobanteService();

  static async getAllComprobantes(req, res) {
    try {
      const lista = await ComprobanteController.comprobanteService.getAllComprobantes();
      res.status(200).json(lista);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener comprobantes', error });
    }
  }

  static async getComprobanteById(req, res) {
    try {
      const id = Number(req.params.id);
      const item = await ComprobanteController.comprobanteService.getComprobanteById(id);
      if (!item) return res.status(404).json({ message: 'Comprobante no encontrado' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener comprobante', error });
    }
  }

  static async createComprobante(req, res) {
    try {
      const nueva = await ComprobanteController.comprobanteService.createComprobante(req.body);
      res.status(201).json(nueva);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear comprobante', error });
    }
  }

  static async updateComprobante(req, res) {
    try {
      const id = Number(req.params.id);
      await ComprobanteController.comprobanteService.updateComprobante(id, req.body);
      res.status(200).json({ message: 'Comprobante actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar comprobante', error });
    }
  }

  static async deleteComprobante(req, res) {
    try {
      const id = Number(req.params.id);
      await ComprobanteController.comprobanteService.deleteComprobante(id);
      res.status(200).json({ message: 'Comprobante eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar comprobante', error });
    }
  }
}

module.exports = ComprobanteController;
