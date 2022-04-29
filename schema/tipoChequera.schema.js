const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string();

const createTipoChequeraSchema = Joi.object({
  nombre: nombre.required(),
});

const updateTipoChequeraSchema = Joi.object({
  nombre: nombre,
});

const getTipoChequeraSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTipoChequeraSchema, updateTipoChequeraSchema, getTipoChequeraSchema };
