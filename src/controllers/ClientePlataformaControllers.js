const createClientePlataformaService = require('../dependencies/ClientePlataformaDependency');

class ClientePlataformaController {
  static clientePlataformaService = createClientePlataformaService();

  static async getAllClientesPlataforma(req, res) {
    try {
      const clientesPlataforma = await ClientePlataformaController.clientePlataformaService.getAllClientesPlataforma();
      res.status(200).json(clientesPlataforma);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener clientes plataforma', error });
    }
  }

  static async getClientePlataformaById(req, res) {
    try {
      const id = Number(req.params.id);
      const clientePlataforma = await ClientePlataformaController.clientePlataformaService.getClientePlataformaById(id);
      if (!clientePlataforma) return res.status(404).json({ message: 'Cliente plataforma no encontrado' });
      res.status(200).json(clientePlataforma);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener cliente plataforma', error });
    }
  }

  static async createClientePlataforma(req, res) {
    try {
      const nuevoClientePlataforma = await ClientePlataformaController.clientePlataformaService.createClientePlataforma(req.body);
      res.status(201).json(nuevoClientePlataforma);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear cliente plataforma', error });
    }
  }

  static async updateClientePlataforma(req, res) {
    try {
      const id = Number(req.params.id);
      await ClientePlataformaController.clientePlataformaService.updateClientePlataforma(id, req.body);
      res.status(200).json({ message: 'Cliente plataforma actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar cliente plataforma', error });
    }
  }

  static async deleteClientePlataforma(req, res) {
    try {
      const id = Number(req.params.id);
      await ClientePlataformaController.clientePlataformaService.deleteClientePlataforma(id);
      res.status(200).json({ message: 'Cliente plataforma eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar cliente plataforma', error });
    }
  }
}

module.exports = ClientePlataformaController;
