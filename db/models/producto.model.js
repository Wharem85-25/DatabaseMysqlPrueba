const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCTO_TABLE = 'cliente';

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
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  }
}

class Producto extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTO_TABLE,
      modelName: 'Producto',
      timeStamps: false,
    }
  }
}

module.exports = { PRODUCTO_TABLE, ProductoSchema, Producto };
