const createManufacturaMetalMecanicaService = require('../dependencies/ManufacturaMetalMecanicaDependency');

class ManufacturaMetalMecanicaController {
  static manufacturaService = createManufacturaMetalMecanicaService();

  static async getAllManufacturas(req, res) {
    try {
      const manufacturas = await ManufacturaMetalMecanicaController.manufacturaService.getAllManufacturas();
      res.status(200).json(manufacturas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener manufacturas', error });
    }
  }

  static async getManufacturaById(req, res) {
    try {
      const id = Number(req.params.id);
      const manufactura = await ManufacturaMetalMecanicaController.manufacturaService.getManufacturaById(id);
      if (!manufactura) return res.status(404).json({ message: 'Manufactura no encontrada' });
      res.status(200).json(manufactura);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener manufactura', error });
    }
  }

  static async createManufactura(req, res) {
    try {
      const nuevaManufactura = await ManufacturaMetalMecanicaController.manufacturaService.createManufactura(req.body);
      res.status(201).json(nuevaManufactura);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear manufactura', error });
    }
  }

  static async updateManufactura(req, res) {
    try {
      const id = Number(req.params.id);
      await ManufacturaMetalMecanicaController.manufacturaService.updateManufactura(id, req.body);
      res.status(200).json({ message: 'Manufactura actualizada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar manufactura', error });
    }
  }

  static async deleteManufactura(req, res) {
    try {
      const id = Number(req.params.id);
      await ManufacturaMetalMecanicaController.manufacturaService.deleteManufactura(id);
      res.status(200).json({ message: 'Manufactura eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar manufactura', error });
    }
  }
}

module.exports = ManufacturaMetalMecanicaController;
