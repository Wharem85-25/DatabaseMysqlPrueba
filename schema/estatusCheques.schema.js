const Joi = require('joi');

const id = Joi.string().uuid();
const estatus = Joi.string();

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
