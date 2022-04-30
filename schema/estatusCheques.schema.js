const Joi = require('joi');

const id = Joi.number().integer();
const estatus = Joi.boolean();

const createEstatusChequeraSchema = Joi.object({
  estatus: estatus.required(),
});

const updateEstatusChequeraSchema = Joi.object({
  estatus: estatus,
});

const getEstatusChequeraSchema = Joi.object({
  id: id.required(),
});

module.exports = { createEstatusChequeraSchema, updateEstatusChequeraSchema, getEstatusChequeraSchema };
