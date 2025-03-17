const createUsuarioService = require('../dependencies/UsuarioDependency');

class UsuarioController {
  static usuarioService = createUsuarioService();

  static async getAllUsuarios(req, res) {
    try {
      const usuarios = await UsuarioController.usuarioService.getAllUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
  }

  static async getUsuarioById(req, res) {
    try {
      const id = Number(req.params.id);
      const usuario = await UsuarioController.usuarioService.getUsuarioById(id);
      if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuario', error });
    }
  }

  static async createUsuario(req, res) {
    try {
      const nuevoUsuario = await UsuarioController.usuarioService.createUsuario(req.body);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear usuario', error });
    }
  }

  static async updateUsuario(req, res) {
    try {
      const id = Number(req.params.id);
      await UsuarioController.usuarioService.updateUsuario(id, req.body);
      res.status(200).json({ message: 'Usuario actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar usuario', error });
    }
  }

  static async deleteUsuario(req, res) {
    try {
      const id = Number(req.params.id);
      await UsuarioController.usuarioService.deleteUsuario(id);
      res.status(200).json({ message: 'Usuario eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar usuario', error });
    }
  }
}

module.exports = UsuarioController;