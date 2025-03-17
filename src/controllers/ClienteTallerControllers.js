const createClienteTallerService = require('../dependencies/ClienteTallerDependency');

class ClienteTallerController {
  static clienteTallerService = createClienteTallerService();

  static async getAllClientesTaller(req, res) {
    try {
      const clientes = await ClienteTallerController.clienteTallerService.getAllClientesTaller();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener clientes de taller', error });
    }
  }

  static async getClienteTallerById(req, res) {
    try {
      const id = Number(req.params.id);
      const cliente = await ClienteTallerController.clienteTallerService.getClienteTallerById(id);
      if (!cliente) return res.status(404).json({ message: 'Cliente de taller no encontrado' });
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener cliente de taller', error });
    }
  }

  static async createClienteTaller(req, res) {
    try {
      const nuevoCliente = await ClienteTallerController.clienteTallerService.createClienteTaller(req.body);
      res.status(201).json(nuevoCliente);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear cliente de taller', error });
    }
  }

  static async updateClienteTaller(req, res) {
    try {
      const id = Number(req.params.id);
      await ClienteTallerController.clienteTallerService.updateClienteTaller(id, req.body);
      res.status(200).json({ message: 'Cliente de taller actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar cliente de taller', error });
    }
  }

  static async deleteClienteTaller(req, res) {
    try {
      const id = Number(req.params.id);
      await ClienteTallerController.clienteTallerService.deleteClienteTaller(id);
      res.status(200).json({ message: 'Cliente de taller eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar cliente de taller', error });
    }
  }
}

module.exports = ClienteTallerController;