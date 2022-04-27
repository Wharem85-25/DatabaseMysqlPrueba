const { Cliente, ClienteSchema } = require('./cliente.model');
const { Chequera, ChequeraSchema } = require('./chequera.model');
const { Producto, ProductoSchema } = require('./producto.model');
const { Transaccion, TransaccionSchema } = require('./transaccion.model');

function setupModels(sequelize) {
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Chequera.init(ChequeraSchema, Chequera.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  Transaccion.init(TransaccionSchema, Transaccion.config(sequelize));
}

module.exports = setupModels;
