const { Model, DataTypes, Sequelize } = require('sequelize');

const TIPO_TRANSACCION_TABLE = 'tipo_transaccion';

const TipoTransaccionSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  tipo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  }
}

class TipoTransaccion extends Model {
  static associate(models) {
    this.hasMany(models.Transaccion, {
      as: 'transaccion',
      foreignKey: 'tipoTransaccionId'
    })
    this.hasMany(models.CodigoTransaccion, {
      as: 'codigoTransaccion',
      foreignKey: 'tipoTransaccionId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPO_TRANSACCION_TABLE,
      modelName: 'TipoTransaccion',
      timestamps: false,
    }
  }
}

module.exports = { TIPO_TRANSACCION_TABLE, TipoTransaccionSchema, TipoTransaccion }
