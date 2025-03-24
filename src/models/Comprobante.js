'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Comprobante extends Model {
    static associate(models) {
      // Asociaciones
      Comprobante.belongsTo(models.Pago, {
        foreignKey: 'idPago',
        as: 'pago'
      });

      Comprobante.belongsTo(models.Pedido, {
        foreignKey: 'idPedido',
        as: 'pedido'
      });
    }
  }

  Comprobante.init({
    idComprobante: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idPedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaEmision: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    detalles: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    montoTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Comprobante',
    tableName: 'comprobante',
    timestamps: false,
  });

  return Comprobante;
};
