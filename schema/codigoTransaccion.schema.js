const Joi = require('joi');

const id = Joi.string().uuid();
const codigo_transaccion = Joi.string();
const descripcion = Joi.string();

const createCodigoTransaccionSchema = Joi.object({
  codigo_transaccion: codigo_transaccion.required(),
  descripcion: descripcion.required(),
});

const updateCodigoTransaccionSchema = Joi.object({
  codigo_transaccion: codigo_transaccion,
  descripcion: descripcion,
});

const getCodigoTransaccionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCodigoTransaccionSchema, updateCodigoTransaccionSchema, getCodigoTransaccionSchema };
