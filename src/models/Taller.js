'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Taller extends Model {
    static associate(models) {
      Taller.belongsTo(models.ClienteTaller, {
        foreignKey: 'idClienteTaller',
        as: 'clienteTaller'
      });
    }
  }

  Taller.init({
    idTaller: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idClienteTaller: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente_taller',
        key: 'idClienteTaller'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contacto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('Pendiente', 'En Proceso', 'Completado'),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Taller',
    tableName: 'taller',
    timestamps: false,
  });

  return Taller;
};
