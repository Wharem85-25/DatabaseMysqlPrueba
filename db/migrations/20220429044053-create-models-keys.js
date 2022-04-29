'use strict';

const { TRANSACCIONES_TABLE, TransaccionSchema } = require('../models/transaccion.model');
const { CUENTA_TABLE, CuentaSchema } = require('./../models/cuenta.model');
const { TIPO_CHEQUERA_TABLE, TipoChequeraSchema } = require('../models/tipoChequera.model')
const { CHEQUERA_TABLE, ChequeraSchema } = require('../models/chequera.model');
const { CHEQUES_PRODUCTO_TABLE, ChequesProductoSchema  } = require('./../models/chequesProducto.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CUENTA_TABLE, CuentaSchema);
    await queryInterface.createTable(TIPO_CHEQUERA_TABLE, TipoChequeraSchema);
    await queryInterface.createTable(CHEQUERA_TABLE, ChequeraSchema);
    await queryInterface.createTable(TRANSACCIONES_TABLE, TransaccionSchema);
    await queryInterface.createTable(CHEQUES_PRODUCTO_TABLE, ChequesProductoSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TRANSACCIONES_TABLE);
    await queryInterface.dropTable(CUENTA_TABLE);
    await queryInterface.dropTable(TIPO_CHEQUERA_TABLE);
    await queryInterface.dropTable(CHEQUERA_TABLE);
    await queryInterface.dropTable(CHEQUES_PRODUCTO_TABLE)
  }
};
