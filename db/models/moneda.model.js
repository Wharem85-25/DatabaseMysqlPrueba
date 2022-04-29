const { Model, DataTypes, Sequelize } = require('sequelize');

const MONEDA_TABLE = 'moneda';

const MonedaSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    field: 'create_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  }
}

class Moneda extends Model {
  static associate(models) {
    this.hasMany(models.Producto, {
      as: 'producto',
      foreignKey: 'monedaId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MONEDA_TABLE,
      modelName: 'Moneda',
      timestamps: false
    }
  }
}

module.exports = { MONEDA_TABLE, MonedaSchema, Moneda };
