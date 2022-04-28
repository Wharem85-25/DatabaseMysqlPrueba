const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string();

const createTipoTransaccionSchema = Joi.object({
  nombre: nombre.required(),
});

const updateTipoTransaccionSchema = Joi.object({
  nombre: nombre,
});

const getTipoTransaccionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTipoTransaccionSchema, updateTipoTransaccionSchema, getTipoTransaccionSchema };
