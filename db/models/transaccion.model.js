const { Model, DataTypes, Sequelize } = require('sequelize');

const { CODIGO_TRANSACCION_TABLE } = require('./codigoTrans.model');
const { CUENTA_TABLE } = require('./cuenta.model')
const { ORIGEN_TABLE } = require('./origen.model')
const { TIPO_TRANSACCION_TABLE } = require('./tipoTransaccion.model')

const TRANSACCIONES_TABLE = 'transaccion';

const TransaccionSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  mondo: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  no_cheque: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  usuario: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  codigoTransId: {
    field: 'codigo_transaccion_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: CODIGO_TRANSACCION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  cuentaId: {
    field: 'cuenta_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: CUENTA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  origenId: {
    field: 'origen_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: ORIGEN_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
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
}

class Transaccion extends Model {
  static associate(models) {
    this.belongsTo(models.Cuenta, {
      as: 'cuenta'
    })
    this.belongsTo(models.Origen, {
      as: 'origen'
    })
    this.belongsTo(models.TipoTransaccion, {
      as: 'tipoTransaccion'
    })
    console.log('hola')
    this.belongsTo(models.CodigoTransaccion, {
      as: 'codigoTransaccion'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACCIONES_TABLE,
      modelName: 'Transaccion',
      timestamps: false
    }
  }
}

module.exports = { TRANSACCIONES_TABLE, TransaccionSchema, Transaccion}
