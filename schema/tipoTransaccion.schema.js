const Joi = require('joi');

const id = Joi.number().integer();
const tipo = Joi.string();

const createTipoTransaccionSchema = Joi.object({
  tipo: tipo.required(),
});

const updateTipoTransaccionSchema = Joi.object({
  tipo: tipo,
});

const getTipoTransaccionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTipoTransaccionSchema, updateTipoTransaccionSchema, getTipoTransaccionSchema };
