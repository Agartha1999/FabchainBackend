const createPedidoService = require('../dependencies/PedidoDependency');

class PedidoController {
  static pedidoService = createPedidoService();

  static async getAllPedidos(req, res) {
    try {
      const pedidos = await PedidoController.pedidoService.getAllPedidos();
      res.status(200).json(pedidos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener pedidos', error });
    }
  }

  static async getPedidoById(req, res) {
    try {
      const id = Number(req.params.id);
      const pedido = await PedidoController.pedidoService.getPedidoById(id);
      if (!pedido) return res.status(404).json({ message: 'Pedido no encontrado' });
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener pedido', error });
    }
  }

  static async createPedido(req, res) {
    try {
      const nuevoPedido = await PedidoController.pedidoService.createPedido(req.body);
      res.status(201).json(nuevoPedido);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear pedido', error });
    }
  }

  static async updatePedido(req, res) {
    try {
      const id = Number(req.params.id);
      await PedidoController.pedidoService.updatePedido(id, req.body);
      res.status(200).json({ message: 'Pedido actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar pedido', error });
    }
  }

  static async deletePedido(req, res) {
    try {
      const id = Number(req.params.id);
      await PedidoController.pedidoService.deletePedido(id);
      res.status(200).json({ message: 'Pedido eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar pedido', error });
    }
  }
}

module.exports = PedidoController;
