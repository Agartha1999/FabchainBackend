const createOtrosService = require('../dependencies/OtrosDependency');

class OtrosController {
  static otrosService = createOtrosService();

  static async getAllOtros(req, res) {
    try {
      const otros = await OtrosController.otrosService.getAllOtros();
      res.status(200).json(otros);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener otros', error });
    }
  }

  static async getOtrosById(req, res) {
    try {
      const id = Number(req.params.id);
      const otros = await OtrosController.otrosService.getOtrosById(id);
      if (!otros) return res.status(404).json({ message: 'Otro no encontrado' });
      res.status(200).json(otros);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener otro', error });
    }
  }

  static async createOtros(req, res) {
    try {
      const nuevoOtro = await OtrosController.otrosService.createOtros(req.body);
      res.status(201).json(nuevoOtro);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear otro', error });
    }
  }

  static async updateOtros(req, res) {
    try {
      const id = Number(req.params.id);
      await OtrosController.otrosService.updateOtros(id, req.body);
      res.status(200).json({ message: 'Otro actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar otro', error });
    }
  }

  static async deleteOtros(req, res) {
    try {
      const id = Number(req.params.id);
      await OtrosController.otrosService.deleteOtros(id);
      res.status(200).json({ message: 'Otro eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar otro', error });
    }
  }
}

module.exports = OtrosController;
