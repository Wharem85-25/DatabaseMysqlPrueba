const { Model, DataTypes, Sequelize } = require('sequelize');

const ORIGEN_TABLE = 'origen';

const OrigenSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  tipo: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  }
}

class Origen extends Model {
  static associate(models) {
    this.hasMany(models.Transaccion, {
      as: 'transaccion',
      foreignKey: 'origenId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORIGEN_TABLE,
      modelName: 'Origen',
      timestamps: false,
    }
  }
}

module.exports = { ORIGEN_TABLE, OrigenSchema, Origen };
