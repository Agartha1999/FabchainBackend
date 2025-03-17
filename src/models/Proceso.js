'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Proceso extends Model {
    static associate(models) {
      // Agrega las relaciones necesarias si las hay en el futuro
    }
  }

  Proceso.init({
    idProceso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    detallarHerramientas: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Proceso',
    tableName: 'proceso',
    timestamps: false,
  });

  return Proceso;
};
