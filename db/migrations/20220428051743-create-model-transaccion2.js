'use strict';

const { TRANSACCIONES_TABLE, TransaccionSchema } = require('../models/transaccion.model');

module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(TRANSACCIONES_TABLE, TransaccionSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TRANSACCIONES_TABLE);
  }
};
