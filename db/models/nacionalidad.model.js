const { Model, DataTypes, Sequelize } = require('sequelize');

const NACIONALIDAD_TABLE = 'nacionalidad';

const NacionalidadSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  pais: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  }
}

class Nacionalidad extends Model {
  static associate(models) {
    this.hasMany(models.Cliente, {
      as: 'cliente',
      foreignKey: 'nacionalidadId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: NACIONALIDAD_TABLE,
      modelName: 'Nacionalidad',
      timestamps: false
    }
  }
}

module.exports = { NACIONALIDAD_TABLE, NacionalidadSchema, Nacionalidad }
