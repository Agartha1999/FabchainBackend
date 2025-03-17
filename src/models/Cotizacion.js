'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Cotizacion extends Model {
    static associate(models) {
      // Relación con Pedido
      Cotizacion.belongsTo(models.Pedido, {
        foreignKey: 'idPedido',
        as: 'pedido'
      });
    }
  }

  Cotizacion.init({
    idPedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    precioUnitario: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    precioTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Cotizacion',
    tableName: 'cotizacion',
    timestamps: false,
  });

  return Cotizacion;
};
