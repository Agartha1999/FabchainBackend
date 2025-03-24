'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Impresion extends Model {
    static associate(models) {
      // Asociaciones pueden ser agregadas aquí
    }
  }

  Impresion.init({
    idImpresion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    materiales: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tipoImpresora: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    detallarHerramientas: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Impresion',
    tableName: 'impresion',
    timestamps: false,
  });

  return Impresion;
};
