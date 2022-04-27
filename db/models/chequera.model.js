const { Model, DataTypes, Sequelize } = require('sequelize');

const CHEQUERA_TABLE = 'chequera';

const ChequeraSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  cheque_inicial: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cheque_final: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  arreglo_cheques: {
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

class Chequera extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHEQUERA_TABLE,
      modelName: 'Chequera',
      timeStamps: false,
    }
  }
}


module.exports = { CHEQUERA_TABLE, ChequeraSchema, Chequera };
