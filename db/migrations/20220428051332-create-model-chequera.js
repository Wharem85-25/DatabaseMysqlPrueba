'use strict';

const { CHEQUERA_TABLE, ChequeraSchema } = require('../models/chequera.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CHEQUERA_TABLE, ChequeraSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CHEQUERA_TABLE);
  }
};
