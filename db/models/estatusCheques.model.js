const { Model, DataTypes, Sequelize } = require('sequelize');

const ESTATUS_CHEQUES_TABLE = 'estatus_cheques';

const EstatusChequesSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  estatus: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  }
}

class EstatusCheques extends Model {
  static associate(models) {
    this.hasMany(models.Chequera, {
      as: 'chequera',
      foreignKey: 'estatusChequesId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ESTATUS_CHEQUES_TABLE,
      modelName: 'EstatusCheques',
      timestamps: false,
    }
  }
}


module.exports = { ESTATUS_CHEQUES_TABLE, EstatusChequesSchema, EstatusCheques }
