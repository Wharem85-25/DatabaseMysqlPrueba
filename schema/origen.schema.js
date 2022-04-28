const Joi = require('joi');

const id = Joi.string().uuid();
const tipo = Joi.string();

const createOrigenSchema = Joi.object({
  tipo: tipo.required(),
});

const updateOrigenSchema = Joi.object({
  tipo: tipo,
});

const getOrigenSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrigenSchema, updateOrigenSchema, getOrigenSchema };
