const { Model, DataTypes, Sequelize } = require('sequelize');

const { TIPO_TRANSACCION_TABLE } = require('./tipoTransaccion.model')

const CODIGO_TRANSACCION_TABLE = 'codigo_transaccion';

const CodigoTransSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  codigo_transaccion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  tipoTransaccionId: {
    field: 'tipo_transaccion_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: TIPO_TRANSACCION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
};

class CodigoTransaccion extends Model {
  static associate(models) {
    this.hasOne(models.Transaccion, {
      as: 'transaccion',
      foreignKey: 'codigoTransId'
    })
    this.belongsTo(models.TipoTransaccion, {
      as: 'tipoTransaccion',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CODIGO_TRANSACCION_TABLE,
      modelName: 'Codigo_transaccion',
      timestamps: false,
    }
  }
}

module.exports = { CODIGO_TRANSACCION_TABLE, CodigoTransSchema, CodigoTransaccion }
