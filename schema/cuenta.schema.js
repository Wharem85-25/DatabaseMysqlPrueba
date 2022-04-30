const Joi = require('joi');

const id = Joi.number().integer();
const saldo = Joi.number().precision(2);
const interesGanado = Joi.number().precision(2);
const montoReserva = Joi.number().precision(2);
const clienteId = Joi.number().integer();
const productoId = Joi.number().integer();

const createCuentaSchema = Joi.object({
  saldo: saldo.required(),
  interesGanado: interesGanado.required(),
  montoReserva: montoReserva.required(),
  clienteId: clienteId.required(),
  productoId: productoId.required(),
});

const updateCuentaSchema = Joi.object({
  saldo: saldo,
  interesGanado: interesGanado,
  montoReserva: montoReserva,
  clienteId: clienteId,
  productoId: productoId
});

const getCuentaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCuentaSchema, updateCuentaSchema, getCuentaSchema };
