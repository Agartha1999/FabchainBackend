'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ClienteTaller extends Model {
    static associate(models) {
      // Relación con la tabla Usuario
      ClienteTaller.belongsTo(models.Usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
      });
    }
  }

  ClienteTaller.init({
    idClienteTaller: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ruc: {
      type: DataTypes.STRING(11),
      allowNull: true,
      unique: true,
    },
    dni: {
      type: DataTypes.STRING(8),
      allowNull: true,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'ClienteTaller',
    tableName: 'cliente_taller',
    timestamps: false,
  });

  return ClienteTaller;
};
