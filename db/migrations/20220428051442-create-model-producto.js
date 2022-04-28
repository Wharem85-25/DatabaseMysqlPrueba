'use strict';

const { PRODUCTO_TABLE, ProductoSchema } = require('../models/producto.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCTO_TABLE, ProductoSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCTO_TABLE);
  }
};
