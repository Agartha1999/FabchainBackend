'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ManufacturaMetalMecanica extends Model {
    static associate(models) {
      // Asociaciones pueden ser agregadas aquí si es necesario
    }
  }

  ManufacturaMetalMecanica.init({
    idManufactura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    herramientas: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    procesosEspeciales: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    detallarHerramientas: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'ManufacturaMetalMecanica',
    tableName: 'manufacturametalmecanica',
    timestamps: false,
  });

  return ManufacturaMetalMecanica;
};
