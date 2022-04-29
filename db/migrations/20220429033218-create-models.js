'use strict';

const { ESTATUS_CHEQUES_TABLE, EstatusChequesSchema } = require('./../models/estatusCheques.model');
const { MONEDA_TABLE, MonedaSchema } = require('../models/moneda.model');
const { NACIONALIDAD_TABLE, NacionalidadSchema } = require('../models/nacionalidad.model');
const { ORIGEN_TABLE, OrigenSchema } = require('../models/origen.model');
const { TIPO_TRANSACCION_TABLE, TipoTransaccionSchema } =require('../models/tipoTransaccion.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ESTATUS_CHEQUES_TABLE, EstatusChequesSchema);
    await queryInterface.createTable(MONEDA_TABLE, MonedaSchema);
    await queryInterface.createTable(ORIGEN_TABLE, OrigenSchema);
    await queryInterface.createTable(NACIONALIDAD_TABLE, NacionalidadSchema);
    await queryInterface.createTable(TIPO_TRANSACCION_TABLE, TipoTransaccionSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ESTATUS_CHEQUES_TABLE)
    await queryInterface.dropTable(MONEDA_TABLE)
    await queryInterface.dropTable(ORIGEN_TABLE)
    await queryInterface.dropTable(NACIONALIDAD_TABLE)
    await queryInterface.dropTable(TIPO_TRANSACCION_TABLE)
  }
};
