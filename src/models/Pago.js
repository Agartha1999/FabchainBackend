'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Pago extends Model {
    static associate(models) {
      // Asociaciones
      Pago.belongsTo(models.Taller, {
        foreignKey: 'idTaller',
        as: 'taller'
      });

      Pago.belongsTo(models.Pedido, {
        foreignKey: 'idPedido',
        as: 'pedido'
      });
    }
  }

  Pago.init({
    idPago: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idTaller: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idPedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM('Pendiente', 'Completado', 'Cancelado'),
      allowNull: false,
    },
    fechaPago: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    metodoPago: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Pago',
    tableName: 'pago',
    timestamps: false,
  });

  return Pago;
};
