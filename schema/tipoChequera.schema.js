const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();

const createTipoChequeraSchema = Joi.object({
  tipo: nombre.required(),
});

const updateTipoChequeraSchema = Joi.object({
  tipo: nombre,
});

const getTipoChequeraSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTipoChequeraSchema, updateTipoChequeraSchema, getTipoChequeraSchema };
