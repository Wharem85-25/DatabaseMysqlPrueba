const Joi = require('joi');

const id = Joi.string().uuid();
const cuenta = Joi.string();
const monto = Joi.number().precision(2);
const codigo_transaccion = Joi.number().integer();
const fecha = Joi.date();
const no_cheque = Joi.number().integer();
const usuario = Joi.string();

const createTransaccionSchema = Joi.object({
  cuenta: cuenta.required(),
  monto: monto.required(),
  codigo_transaccion: codigo_transaccion.required(),
  fecha: fecha.required(),
  no_cheque: no_cheque.required(),
  usuario: usuario.required(),
});

const updateTransaccionSchema = Joi.object({
  cuenta: cuenta,
  monto: monto,
  codigo_transaccion: codigo_transaccion,
  fecha: fecha,
  no_cheque: no_cheque,
  usuario: usuario,
});

const getTransaccionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTransaccionSchema, updateTransaccionSchema, getTransaccionSchema };
