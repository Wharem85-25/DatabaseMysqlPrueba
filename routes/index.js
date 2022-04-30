const express = require('express');
const clienteRouter = require('./cliente.router');
const productosRouter = require('./producto.router');
const chequeraRouter = require('./chequera.router');
const transaccionesRouter = require('./transacciones.router');
const codigoTransaccionRouter = require('./codigoTransaccion.router');
const estatusChequesRouter = require('./estatusCheques.router');
const monedaRouter = require('./moneda.router');
const nacionalidadRouter = require('./nacionalidad.router');
const origenRouter = require('./origen.router');
const tipoTransaccionRouter = require('./tipoTransaccion.router');
const tipoChequeraRouter = require('./tipoChequera.router');
const cuentaRouter = require('./cuenta.router');
const chequesProductoRouter = require('./chequesProducto.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v2', router);
  router.use('/cliente', clienteRouter);
  router.use('/producto', productosRouter);
  router.use('/chequera', chequeraRouter);
  router.use('/transacciones', transaccionesRouter);
  router.use('/codigoTransaccion', codigoTransaccionRouter);
  router.use('/estatusCheques', estatusChequesRouter);
  router.use('/moneda', monedaRouter);
  router.use('/nacionalidad', nacionalidadRouter);
  router.use('/origen', origenRouter);
  router.use('/tipoTransaccion', tipoTransaccionRouter);
  router.use('/tipoChequera', tipoChequeraRouter);
  router.use('/cuenta', cuentaRouter);
  router.use('/chequesProducto', chequesProductoRouter);
}

module.exports = routerApi;
