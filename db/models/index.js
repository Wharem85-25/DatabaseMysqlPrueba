const { Cliente, ClienteSchema } = require('./cliente.model');
const { Chequera, ChequeraSchema } = require('./chequera.model');
const { Producto, ProductoSchema } = require('./producto.model');
const { Transaccion, TransaccionSchema } = require('./transaccion.model');
const { CodigoTransacion, CodigoTransSchema } = require('./codigoTrans.model');

function setupModels(sequelize) {
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Chequera.init(ChequeraSchema, Chequera.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  Transaccion.init(TransaccionSchema, Transaccion.config(sequelize));
  CodigoTransacion.init(CodigoTransSchema, CodigoTransacion.config(sequelize));

  Transaccion.associate(sequelize.models);
}

module.exports = setupModels;
