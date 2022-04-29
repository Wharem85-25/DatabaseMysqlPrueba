const Joi = require('joi');

const id = Joi.string().uuid();
const cantidad = Joi.number().precision(2);
const nombre = Joi.string();
const tipo_chequera_id = Joi.number().integer();

const createChequesProductoSchema = Joi.object({
  cantidad: cantidad.required(),
  tipo_chequera: {
    nombre: nombre.required(),
  }
})

const updateChequesProductoSchema = Joi.object({
  cantidad: cantidad,
  tipo_chequera_id: tipo_chequera_id
})

const getChequesProductoSchema = Joi.object({
  id: id.required(),
})

module.exports = { createChequesProductoSchema, updateChequesProductoSchema, getChequesProductoSchema }
