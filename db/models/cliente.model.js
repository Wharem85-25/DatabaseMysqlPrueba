const { Model, DataTypes, Sequelize } = require('sequelize');

const CLIENTE_TABLE = 'cliente';

const ClienteSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fecha_nacimientp: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  actividad_economica: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  ingresos_mensuales: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  }
}

class Cliente extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENTE_TABLE,
      modelName: 'Cliente',
      timeStamps: false,
    }
  }
}

module.exports = { CLIENTE_TABLE, ClienteSchema, Cliente };
