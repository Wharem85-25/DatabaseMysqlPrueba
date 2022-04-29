const { Model, DataTypes, Sequelize } = require('sequelize');

const { CLIENTE_TABLE } = require('./cliente.model');
const { ESTATUS_CHEQUES_TABLE } = require('./estatusCheques.model')
const { CUENTA_TABLE } = require('./cuenta.model')

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
  },
  clienteId: {
    field: 'cliente_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model:  CLIENTE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  estatusChequesId: {
    field: 'estatus_cheques_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: ESTATUS_CHEQUES_TABLE,
      key: 'id',
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
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class Chequera extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente, {
      as: 'cliente',
    })
    this.belongsTo(models.Cuenta, {
      as: 'cuenta',
    })
    this.hasMany(models.ChequesProducto, {
      as: 'chequesProducto',
      foreignKey: 'chequeraId'
    });
    console.log('hola')
    this.belongsTo(models.EstatusCheques, {
      as: 'estatusCheques'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHEQUERA_TABLE,
      modelName: 'Chequera',
      timestamps: false,
    }
  }
}


module.exports = { CHEQUERA_TABLE, ChequeraSchema, Chequera };
