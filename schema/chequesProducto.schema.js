const Joi = require('joi');

const id = Joi.number().integer();
const cantidad = Joi.number().precision(2);
const chequeraId = Joi.number().integer();
const productoId = Joi.number().integer();
const tipoChequeraId = Joi.number().integer();

const createChequesProductoSchema = Joi.object({
  cantidad: cantidad.required(),
  chequeraId: chequeraId.required(),
  productoId: productoId.required(),
  tipoChequeraId: tipoChequeraId.required()
})

const updateChequesProductoSchema = Joi.object({
  cantidad: cantidad,
  chequeraId: chequeraId,
  productoId: productoId,
  tipoChequeraId: tipoChequeraId
})

const getChequesProductoSchema = Joi.object({
  id: id.required(),
})

module.exports = { createChequesProductoSchema, updateChequesProductoSchema, getChequesProductoSchema }
