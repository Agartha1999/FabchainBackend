'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class TallerProceso extends Model {
    static associate(models) {
      // Relación con Taller
      TallerProceso.belongsTo(models.Taller, {
        foreignKey: 'idTaller',
        as: 'taller'
      });
      // Relación con Proceso
      TallerProceso.belongsTo(models.Proceso, {
        foreignKey: 'idProceso',
        as: 'proceso'
      });
    }
  }

  TallerProceso.init({
    idTaller: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    idProceso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'TallerProceso',
    tableName: 'taller_proceso',
    timestamps: false,
  });

  return TallerProceso;
};
