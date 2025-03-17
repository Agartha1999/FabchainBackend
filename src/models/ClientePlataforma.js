'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ClientePlataforma extends Model {
    static associate(models) {
      // Relación con Usuario
      ClientePlataforma.belongsTo(models.Usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
      });
    }
  }

  ClientePlataforma.init({
    idCliente: {
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
    ruc: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    dni: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    pasaporte: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'ClientePlataforma',
    tableName: 'cliente_plataforma',
    timestamps: false,
  });

  return ClientePlataforma;
};
