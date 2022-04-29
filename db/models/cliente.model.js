const { Model, DataTypes, Sequelize } = require('sequelize');

const { NACIONALIDAD_TABLE } = require('./nacionalidad.model')

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
  dpi: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  nacionalidadId: {
    field: 'nacionalidad_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: NACIONALIDAD_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class Cliente extends Model {
  static associate(models) {
    this.belongsTo(models.Nacionalidad, {
      as: 'nacionalidad'
    }),
    this.hasMany(models.Cuenta, {
      as: 'cuenta',
      foreignKey: 'clienteId'
    });
    this.hasMany(models.Chequera, {
      as: 'chequera',
      foreignKey: 'clienteId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENTE_TABLE,
      modelName: 'Cliente',
      timestamps: false,
    }
  }
}

module.exports = { CLIENTE_TABLE, ClienteSchema, Cliente };
