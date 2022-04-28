'use strict';

const { CLIENTE_TABLE, ClienteSchema } = require('../models/cliente.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CLIENTE_TABLE);
  }
};
