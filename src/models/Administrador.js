'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Administrador extends Model {
    static associate(models) {
      // Relación con Usuario
      Administrador.belongsTo(models.Usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
      });
    }
  }

  Administrador.init({
    idAdministrador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Administrador',
    tableName: 'administrador',
    timestamps: false,
  });

  return Administrador;
};
