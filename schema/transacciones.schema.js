const Joi = require('joi');

const id = Joi.number().integer();
const mondo = Joi.number().precision(2);
const fecha = Joi.date();
const no_cheque = Joi.number().integer();
const usuario = Joi.string();
const codigoTransaccionId = Joi.number().integer();
const origenId = Joi.number().integer();
const tipoTransaccionId = Joi.number().integer();
const cuentaId = Joi.number().integer();

const createTransaccionSchema = Joi.object({
  mondo: mondo.required(),
  fecha: fecha.required(),
  no_cheque: no_cheque.required(),
  usuario: usuario.required(),
  codigoTransaccionId: codigoTransaccionId.required(),
  origenId: origenId.required(),
  tipoTransaccionId: tipoTransaccionId.required(),
  cuentaId: cuentaId.required()
});

const updateTransaccionSchema = Joi.object({
  mondo: mondo,
  fecha: fecha,
  no_cheque: no_cheque,
  usuario: usuario,
  codigoTransaccionId: codigoTransaccionId,
  origenId: origenId,
  tipoTransaccionId: tipoTransaccionId,
  cuentaId: cuentaId
});

const getTransaccionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTransaccionSchema, updateTransaccionSchema, getTransaccionSchema };
