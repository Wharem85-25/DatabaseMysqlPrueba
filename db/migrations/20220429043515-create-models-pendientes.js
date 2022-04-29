'use strict';

const { CLIENTE_TABLE, ClienteSchema } = require('../models/cliente.model');
const { PRODUCTO_TABLE, ProductoSchema } = require('../models/producto.model');
const { CodigoTransSchema, CODIGO_TRANSACCION_TABLE } = require('../models/codigoTrans.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema);
    await queryInterface.createTable(PRODUCTO_TABLE, ProductoSchema);
    await queryInterface.createTable(CODIGO_TRANSACCION_TABLE, CodigoTransSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CLIENTE_TABLE);
    await queryInterface.dropTable(PRODUCTO_TABLE);
    await queryInterface.dropTable(CODIGO_TRANSACCION_TABLE);
  }
};
