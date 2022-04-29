const { Model, DataTypes, Sequelize } = require('sequelize');

const TIPO_CHEQUERA_TABLE = 'tipo_chequera';

const TipoChequeraSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  tipo: {
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

class TipoChequera extends Model {
  static associate(models) {
    this.hasMany(models.ChequesProducto, {
      as: 'chequesProducto',
      foreignKey: 'tipoChequeraId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPO_CHEQUERA_TABLE,
      modelName: 'TipoChequera',
      timestamps: false,
    }
  }
}

module.exports = { TIPO_CHEQUERA_TABLE, TipoChequeraSchema, TipoChequera }
