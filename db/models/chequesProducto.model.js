const { Model, DataTypes, Sequelize } = require('sequelize');

const { CHEQUERA_TABLE } = require('./chequera.model')
const { TIPO_CHEQUERA_TABLE } = require('./tipoChequera.model')
const { PRODUCTO_TABLE } = require('./producto.model')

const CHEQUES_PRODUCTO_TABLE = 'cheques_produto'

const ChequesProductoSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  chequeraId: {
    field: 'chequera_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CHEQUERA_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  tipoChequeraId: {
    field: 'tipo_chequera_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TIPO_CHEQUERA_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  productoId: {
    field: 'producto_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCTO_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class ChequesProducto extends Model {
  static associate(models) {
    this.belongsTo(models.Chequera, {
      as: 'chequera',
    })
    this.belongsTo(models.TipoChequera, {
      as: 'tipoChequera',
    })
    this.belongsTo(models.Producto, {
      as: 'producto',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHEQUES_PRODUCTO_TABLE,
      modelName: 'ChequesProducto',
      timestamps: false
    }
  }
}

module.exports = { CHEQUES_PRODUCTO_TABLE, ChequesProductoSchema, ChequesProducto }
