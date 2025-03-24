'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Otros extends Model {
    static associate(models) {
      // Relación con Proceso
     
    }
  }

  Otros.init({
    idOtro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcionPersonalizada: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    detallarHerramientas: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Otros',
    tableName: 'otros',
    timestamps: false,
  });

  return Otros;
};
