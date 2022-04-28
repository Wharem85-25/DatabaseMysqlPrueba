'use strict';

// const { TRANSACCIONES_TABLE, TransaccionSchema } = require('../models/transaccion.model');
const { CodigoTransSchema, CODIGO_TRANSACCION_TABLE } = require('../models/codigoTrans.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CODIGO_TRANSACCION_TABLE, CodigoTransSchema);
    // await queryInterface.createTable(TRANSACCIONES_TABLE, TransaccionSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CODIGO_TRANSACCION_TABLE);
    // await queryInterface.dropTable(TRANSACCIONES_TABLE);
  }
};
