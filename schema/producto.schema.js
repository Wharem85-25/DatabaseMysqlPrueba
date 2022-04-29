const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string();
const tasa_interes = Joi.number().precision(2);
const maneja_cheques = Joi.boolean();
const moneda = Joi.string();
const moneda_id = Joi.number().integer();

const createProductoSchema = Joi.object({
  nombre: nombre.required(),
  tasa_interes: tasa_interes.required(),
  maneja_cheques: maneja_cheques.required(),
  moneda: {
    moneda: moneda.required(),
  }
});

const updateProductoSchema = Joi.object({
  nombre: nombre,
  tasa_interes: tasa_interes,
  maneja_cheque: maneja_cheques,
  moneda_id: moneda_id
});

const getProductoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductoSchema, updateProductoSchema, getProductoSchema };

