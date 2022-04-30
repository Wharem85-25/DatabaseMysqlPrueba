const { Model, DataTypes, Sequelize } = require('sequelize');

const { MONEDA_TABLE } = require('./moneda.model')

const PRODUCTO_TABLE = 'producto';

const ProductoSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  tasa_interes: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  maneja_datos: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  monedaId: {
    field: 'moneda_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MONEDA_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class Producto extends Model {
  static associate(models) {
    this.hasMany(models.Cuenta, {
      as: 'cuenta',
      foreignKey: 'productoId'
    })
    this.hasMany(models.ChequesProducto, {
      as: 'chequesProducto',
      foreignKey: 'productoId'
    })
    this.belongsTo(models.Moneda, {
      as: 'moneda',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTO_TABLE,
      modelName: 'Producto',
      timestamps: false,
    }
  }
}

module.exports = { PRODUCTO_TABLE, ProductoSchema, Producto };
