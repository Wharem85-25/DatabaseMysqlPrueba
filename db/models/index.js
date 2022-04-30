const { Cliente, ClienteSchema } = require('./cliente.model');
const { Chequera, ChequeraSchema } = require('./chequera.model');
const { Producto, ProductoSchema } = require('./producto.model');
const { Transaccion, TransaccionSchema } = require('./transaccion.model');
const { CodigoTransaccion, CodigoTransSchema } = require('./codigoTrans.model');
const { ChequesProductoSchema, ChequesProducto } = require('./chequesProducto.model')
const { EstatusCheques, EstatusChequesSchema } = require('./estatusCheques.model')
const { Moneda, MonedaSchema } = require('./moneda.model')
const { Nacionalidad, NacionalidadSchema } = require('./nacionalidad.model')
const { Origen, OrigenSchema } = require('./origen.model')
const { TipoTransaccion, TipoTransaccionSchema } = require('./tipoTransaccion.model')
const { CuentaSchema, Cuenta } = require('./cuenta.model')
const { TipoChequera, TipoChequeraSchema } = require('./tipoChequera.model')

function setupModels(sequelize) {
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Chequera.init(ChequeraSchema, Chequera.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  Transaccion.init(TransaccionSchema, Transaccion.config(sequelize));
  CodigoTransaccion.init(CodigoTransSchema, CodigoTransaccion.config(sequelize));
  ChequesProducto.init(ChequesProductoSchema, ChequesProducto.config(sequelize));
  EstatusCheques.init(EstatusChequesSchema, EstatusCheques.config(sequelize));
  Moneda.init(MonedaSchema, Moneda.config(sequelize));
  Nacionalidad.init(NacionalidadSchema, Nacionalidad.config(sequelize));
  Origen.init(OrigenSchema, Origen.config(sequelize));
  TipoTransaccion.init(TipoTransaccionSchema, TipoTransaccion.config(sequelize));
  Cuenta.init(CuentaSchema, Cuenta.config(sequelize));
  TipoChequera.init(TipoChequeraSchema, TipoChequera.config(sequelize));


  Cliente.associate(sequelize.models);
  Producto.associate(sequelize.models);
  ChequesProducto.associate(sequelize.models);
  CodigoTransaccion.associate(sequelize.models);
  Moneda.associate(sequelize.models);
  Nacionalidad.associate(sequelize.models);
  Origen.associate(sequelize.models);
  Cuenta.associate(sequelize.models);
  TipoChequera.associate(sequelize.models);
  EstatusCheques.associate(sequelize.models);
  Chequera.associate(sequelize.models);
  Transaccion.associate(sequelize.models);
  TipoTransaccion.associate(sequelize.models);
}

module.exports = setupModels;
