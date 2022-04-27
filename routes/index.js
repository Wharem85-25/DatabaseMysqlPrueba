const express = require('express');
const clienteRouter = require('./cliente.router');
const productosRouter = require('./producto.router');
const chequeraRouter = require('./chequera.router');
const transaccionesRouter = require('./transacciones.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/cliente', clienteRouter);
  router.use('/producto', productosRouter);
  router.use('chequera', chequeraRouter);
  router.use('/transacciones', transaccionesRouter);
}

module.exports = routerApi;
