'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ProcesoManufactura extends Model {
    static associate(models) {
      // Relación con Proceso
      ProcesoManufactura.belongsTo(models.Proceso, {
        foreignKey: 'idProceso',
        as: 'proceso'
      });

      // Relación con Manufactura
      ProcesoManufactura.belongsTo(models.ManufacturaMetalMecanica, {
        foreignKey: 'idManufactura',
        as: 'manufactura'
      });
    }
  }

  ProcesoManufactura.init({
    idProceso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idManufactura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    sequelize,
    modelName: 'ProcesoManufactura',
    tableName: 'proceso_manufactura',
    timestamps: false,
  });

  return ProcesoManufactura;
};
