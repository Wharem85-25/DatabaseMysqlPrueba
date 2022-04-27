const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string();
const tasa_interes = Joi.number().double();
const maneja_cheques = Joi.string();

const createProductoSchema = Joi.object({
  nombre: nombre.required(),
  tasa_interes: tasa_interes.required(),
  maneja_cheques: maneja_cheques.required(),
});

const updateProductoSchema = Joi.object({
  nombre: nombre,
  tasa_interes: tasa_interes,
  maneja_cheque: maneja_cheques,
});

const getProductoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductoSchema, updateProductoSchema, getProductoSchema };
