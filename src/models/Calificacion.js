'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Calificacion extends Model {
    static associate(models) {
      // Asociaciones futuras (si las hay)
    }
  }

  Calificacion.init({
    idEntrega: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    calificacion: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Calificacion',
    tableName: 'calificacion',
    timestamps: false,
  });

  return Calificacion;
};
