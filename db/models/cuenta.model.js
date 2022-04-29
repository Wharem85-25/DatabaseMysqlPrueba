const { Model, DataTypes, Sequelize } = require('sequelize');

const { CLIENTE_TABLE } = require('./cliente.model');
const { PRODUCTO_TABLE } = require('./producto.model')

const CUENTA_TABLE = 'cuenta';

const CuentaSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  saldo: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  interesGanado: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  montoReserva: {
    allowNull: false,
    type: DataTypes.DOUBLE,
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
      model: CLIENTE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  productoId: {
    field: 'producto_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: PRODUCTO_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class Cuenta extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente, {
      as: 'cliente',
    })
    this.belongsTo(models.Producto, {
      as: 'producto',
    })
    this.hasMany(models.Chequera, {
      as: 'chequera',
      foreignKey: 'cuentaId'
    })
    this.hasMany(models.Transaccion, {
      as: 'transaccion',
      foreignKey: 'cuentaId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUENTA_TABLE,
      modelName: 'Cuenta',
      timestamps: false,
    }
  }
}

module.exports = { CUENTA_TABLE, CuentaSchema, Cuenta };
