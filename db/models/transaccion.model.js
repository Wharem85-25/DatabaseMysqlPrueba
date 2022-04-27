const { Model, DataTypes, Sequelize } = require('sequelize');

const TRANSACCIONES_TABLE = 'transaccion';

const TransaccionSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  cuenta: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  mondo: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  codigo_transaccion: {
    allowNull: false,
    type: DataTypes.INTEGER,
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
  }
}

class Transaccion extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACCIONES_TABLE,
      modelName: 'Transaccion',
      timeStamp: false
    }
  }
}

module.exports = { TRANSACCIONES_TABLE, TransaccionSchema, Transaccion}
