'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Pedido extends Model {
    static associate(models) {
      // Relación con Proceso
      Pedido.belongsTo(models.Proceso, {
        foreignKey: 'idProceso',
        as: 'proceso'
      });
      // Relación con Taller
      Pedido.belongsTo(models.Taller, {
        foreignKey: 'idTaller',
        as: 'taller'
      });
    }
  }

  Pedido.init({
    idPedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idProceso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idTaller: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM('Pendiente', 'En Proceso', 'Completado'),
      allowNull: false,
    },
    fechaSolicitud: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaLimite: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    numeroOrden: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    planoPDF: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    planoCAD3D: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cotizacion: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: 'pedido',
    timestamps: false,
  });

  return Pedido;
};
