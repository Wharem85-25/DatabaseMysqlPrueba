const Joi = require('joi');

const id = Joi.string().uuid();
const saldo = Joi.number().precision(2);
const interersGanado = Joi.number().precision(2);
const montoReserva = Joi.number().precision(2);
const cliente = Joi.string();
const cliente_id = Joi.number().integer();
const producto = Joi.string();
const producto_id = Joi.number().integer();

const createCuentaSchema = Joi.object({
  saldo: saldo.required(),
  interersGanado: interersGanado.required(),
  montoReserva: montoReserva.required(),
  cliente: {
    nombre: cliente.required()
  },
  producto: {
    nombre: producto.required(),
  }
});

const updateCuentaSchema = Joi.object({
  saldo: saldo,
  interersGanado: interersGanado,
  montoReserva: montoReserva,
  cliente_id: cliente_id,
  producto_id: producto_id
});

const getCuentaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCuentaSchema, updateCuentaSchema, getCuentaSchema };
