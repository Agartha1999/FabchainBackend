const createPagoService = require('../dependencies/PagoDependency');

class PagoController {
  static pagoService = createPagoService();

  static async getAllPagos(req, res) {
    try {
      const pagos = await PagoController.pagoService.getAllPagos();
      res.status(200).json(pagos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener pagos', error });
    }
  }

  static async getPagoById(req, res) {
    try {
      const id = Number(req.params.id);
      const pago = await PagoController.pagoService.getPagoById(id);
      if (!pago) return res.status(404).json({ message: 'Pago no encontrado' });
      res.status(200).json(pago);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener pago', error });
    }
  }

  static async createPago(req, res) {
    try {
      const nuevoPago = await PagoController.pagoService.createPago(req.body);
      res.status(201).json(nuevoPago);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear pago', error });
    }
  }

  static async updatePago(req, res) {
    try {
      const id = Number(req.params.id);
      await PagoController.pagoService.updatePago(id, req.body);
      res.status(200).json({ message: 'Pago actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar pago', error });
    }
  }

  static async deletePago(req, res) {
    try {
      const id = Number(req.params.id);
      await PagoController.pagoService.deletePago(id);
      res.status(200).json({ message: 'Pago eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar pago', error });
    }
  }
}

module.exports = PagoController;
