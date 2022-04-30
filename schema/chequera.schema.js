const Joi = require('joi');

const id = Joi.number().integer();
const cheque_inicial = Joi.number().precision(2);
const cheque_final = Joi.number().precision(2);
const arreglo_cheques = Joi.string();
const estatusChequesId = Joi.number().integer();
const clienteId = Joi.number().integer();
const cuentaId = Joi.number().integer();

const createChequeraSchema = Joi.object({
  cheque_inicial: cheque_inicial.required(),
  cheque_final: cheque_final.required(),
  arreglo_cheques: arreglo_cheques.required(),
  estatusChequesId: estatusChequesId.required(),
  clienteId: clienteId.required(),
  cuentaId: cuentaId.required()
});

const updateChequeraSchema = Joi.object({
  cheque_inicial: cheque_inicial,
  cheque_final: cheque_final,
  arreglo_cheques: arreglo_cheques,
  estatusChequesId: estatusChequesId,
  clienteId: clienteId,
  cuentaId: cuentaId
});

const getChequeraSchema = Joi.object({
  id: id.required(),
});

module.exports = { createChequeraSchema, updateChequeraSchema, getChequeraSchema };
