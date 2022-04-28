const { Model, DataTypes, Sequelize } = require('sequelize');

const CODIGO_TRANSACCION_TABLE = 'codigoTransaccion';

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
  }
};

class CodigoTransaccion extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CODIGO_TRANSACCION_TABLE,
      modelName: 'CodigoTransaccion',
      timeStamps: false,
    }
  }
}

module.exports = { CODIGO_TRANSACCION_TABLE, CodigoTransSchema, CodigoTransaccion }
