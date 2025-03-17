const createAdministradorService = require('../dependencies/AdministradorDependency');

class AdministradorController {
  static administradorService = createAdministradorService();

  static async getAllAdministradores(req, res) {
    try {
      const administradores = await AdministradorController.administradorService.getAllAdministradores();
      res.status(200).json(administradores);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener administradores', error });
    }
  }

  static async getAdministradorById(req, res) {
    try {
      const id = Number(req.params.id);
      const administrador = await AdministradorController.administradorService.getAdministradorById(id);
      if (!administrador) return res.status(404).json({ message: 'Administrador no encontrado' });
      res.status(200).json(administrador);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener administrador', error });
    }
  }

  static async createAdministrador(req, res) {
    try {
      const nuevoAdministrador = await AdministradorController.administradorService.createAdministrador(req.body);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear administrador', error });
    }
  }

  static async updateAdministrador(req, res) {
    try {
      const id = Number(req.params.id);
      await AdministradorController.administradorService.updateAdministrador(id, req.body);
      res.status(200).json({ message: 'Administrador actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar administrador', error });
    }
  }

  static async deleteAdministrador(req, res) {
    try {
      const id = Number(req.params.id);
      await AdministradorController.administradorService.deleteAdministrador(id);
      res.status(200).json({ message: 'Administrador eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar administrador', error });
    }
  }
}

module.exports = AdministradorController;
