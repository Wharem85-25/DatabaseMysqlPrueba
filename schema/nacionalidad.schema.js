const Joi = require('joi');

const id = Joi.string().uuid();
const pais = Joi.string();

const createNacionalidadSchema = Joi.object({
  pais: pais.required(),
});

const updateNacionalidadSchema = Joi.object({
  pais: pais,
});

const getNacionalidadSchema = Joi.object({
  id: id.required(),
});

module.exports = { createNacionalidadSchema, updateNacionalidadSchema, getNacionalidadSchema };
