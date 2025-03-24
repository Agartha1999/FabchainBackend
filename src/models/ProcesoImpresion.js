'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ProcesoImpresion extends Model {
    static associate(models) {
      // Relación con Proceso
      ProcesoImpresion.belongsTo(models.Proceso, {
        foreignKey: 'idProceso',
        as: 'proceso'
      });

      // Relación con Impresion
      ProcesoImpresion.belongsTo(models.Impresion, {
        foreignKey: 'idImpresion',
        as: 'impresion'
      });
    }
  }

  ProcesoImpresion.init({
    idProceso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idImpresion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    sequelize,
    modelName: 'ProcesoImpresion',
    tableName: 'proceso_impresion',
    timestamps: false,
  });

  return ProcesoImpresion;
};
