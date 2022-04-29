const Joi = require('joi');

const id = Joi.string().uuid();
const monto = Joi.number().precision(2);
const fecha = Joi.date();
const no_cheque = Joi.number().integer();
const usuario = Joi.string();
const codigo_transaccion_id = Joi.number().integer();
const codigo_transaccion = Joi.number().integer();
const descripcion = Joi.string();
const origen = Joi.string();
const origen_id = Joi.number().integer();
const tipo_transaccion = Joi.string();
const tipo_transaccion_id = Joi.number().integer();

const createTransaccionSchema = Joi.object({
  monto: monto.required(),
  codigo_transaccion: codigo_transaccion.required(),
  fecha: fecha.required(),
  no_cheque: no_cheque.required(),
  usuario: usuario.required(),
  codigo: {
    codigo_transaccion: codigo_transaccion.required(),
    descripcion: descripcion,
  },
  origen: {
    origen: origen.required(),
  },
  tipo_transaccion: {
    tipo_transaccion: tipo_transaccion.required(),
  }
});

const updateTransaccionSchema = Joi.object({
  monto: monto,
  fecha: fecha,
  no_cheque: no_cheque,
  usuario: usuario,
  codigo_transaccion_id: codigo_transaccion_id,
  origen_id: origen_id,
  tipo_transaccion_id: tipo_transaccion_id
});

const getTransaccionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTransaccionSchema, updateTransaccionSchema, getTransaccionSchema };
