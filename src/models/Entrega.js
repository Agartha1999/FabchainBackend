'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Entrega extends Model {
    static associate(models) {
      // Relación con Pedido
      Entrega.belongsTo(models.Pedido, {
        foreignKey: 'idPedido',
        as: 'pedido'
      });
    }
  }

  Entrega.init({
    idEntrega: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idPedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaEntrega: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    detalles: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    estado: {
      type: DataTypes.ENUM('Pendiente', 'En Proceso', 'Completado'),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Entrega',
    tableName: 'entrega',
    timestamps: false,
  });

  return Entrega;
};
