const Joi = require('joi');

const id = Joi.string().uuid();
const cheque_inicial = Joi.string();
const cheque_final = Joi.string();
const arreglo_cheques = Joi.string();
const cuenta = Joi.string();

const createChequeraSchema = Joi.object({
  cheque_inicial: cheque_inicial.required(),
  cheque_final: cheque_final.required(),
  arreglo_cheques: arreglo_cheques.required(),
  cuenta: cuenta.required()
});

const updateChequeraSchema = Joi.object({
  cheque_inicial: cheque_inicial,
  cheque_final: cheque_final,
  arreglo_cheques: arreglo_cheques,
  cuenta: cuenta
});

const getChequeraSchema = Joi.object({
  id: id.required(),
});

module.exports = { createChequeraSchema, updateChequeraSchema, getChequeraSchema };
