const createCotizacionService = require('../dependencies/CotizacionDependency');

class CotizacionController {
  static cotizacionService = createCotizacionService();

  static async getAllCotizaciones(req, res) {
    try {
      const cotizaciones = await CotizacionController.cotizacionService.getAllCotizaciones();
      res.status(200).json(cotizaciones);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener cotizaciones', error });
    }
  }

  static async getCotizacionById(req, res) {
    try {
      const id = Number(req.params.id);
      const cotizacion = await CotizacionController.cotizacionService.getCotizacionById(id);
      if (!cotizacion) return res.status(404).json({ message: 'Cotización no encontrada' });
      res.status(200).json(cotizacion);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener cotización', error });
    }
  }

  static async createCotizacion(req, res) {
    try {
      const nuevaCotizacion = await CotizacionController.cotizacionService.createCotizacion(req.body);
      res.status(201).json(nuevaCotizacion);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear cotización', error });
    }
  }

  static async updateCotizacion(req, res) {
    try {
      const id = Number(req.params.id);
      await CotizacionController.cotizacionService.updateCotizacion(id, req.body);
      res.status(200).json({ message: 'Cotización actualizada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar cotización', error });
    }
  }

  static async deleteCotizacion(req, res) {
    try {
      const id = Number(req.params.id);
      await CotizacionController.cotizacionService.deleteCotizacion(id);
      res.status(200).json({ message: 'Cotización eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar cotización', error });
    }
  }
}

module.exports = CotizacionController;
