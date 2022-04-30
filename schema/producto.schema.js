const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();
const tasa_interes = Joi.number().precision(2);
const maneja_datos = Joi.boolean();
const monedaId = Joi.number().integer();

const createProductoSchema = Joi.object({
  nombre: nombre.required(),
  tasa_interes: tasa_interes.required(),
  maneja_datos: maneja_datos.required(),
  monedaId: monedaId.required()
});

const updateProductoSchema = Joi.object({
  nombre: nombre,
  tasa_interes: tasa_interes,
  maneja_datos: maneja_datos,
  monedaId: monedaId
});

const getProductoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductoSchema, updateProductoSchema, getProductoSchema };

