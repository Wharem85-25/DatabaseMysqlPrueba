const Joi = require('joi');

const id = Joi.number().integer();
const codigo_transaccion = Joi.string();
const descripcion = Joi.string();
const tipoTransaccionId = Joi.number().integer();

const createCodigoTransaccionSchema = Joi.object({
  codigo_transaccion: codigo_transaccion.required(),
  descripcion: descripcion.required(),
  tipoTransaccionId: tipoTransaccionId.required(),
});

const updateCodigoTransaccionSchema = Joi.object({
  codigo_transaccion: codigo_transaccion,
  descripcion: descripcion,
  tipoTransaccionId: tipoTransaccionId
});

const getCodigoTransaccionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCodigoTransaccionSchema, updateCodigoTransaccionSchema, getCodigoTransaccionSchema };
