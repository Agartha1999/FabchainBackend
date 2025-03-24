'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ProcesoOtros extends Model {
    static associate(models) {
      // Relación con Proceso
      ProcesoOtros.belongsTo(models.Proceso, {
        foreignKey: 'idProceso',
        as: 'proceso'
      });

      // Relación con Otros
      ProcesoOtros.belongsTo(models.Otros, {
        foreignKey: 'idOtro',
        as: 'otros'
      });
    }
  }

  ProcesoOtros.init({
    idProceso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idOtro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    sequelize,
    modelName: 'ProcesoOtros',
    tableName: 'proceso_otros',
    timestamps: false,
  });

  return ProcesoOtros;
};
