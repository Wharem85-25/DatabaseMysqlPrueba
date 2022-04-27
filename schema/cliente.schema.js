const Joi = require('joi');

const id = Joi.string().uuid();
const nombre = Joi.string();
const fecha_nacimiento = Joi.date();
const actividad_economica = Joi.string();
const ingresos_mensuales = Joi.double();

const createClienteSchema = Joi.object({
  nombre: nombre.required(),
  fecha_nacimiento: fecha_nacimiento.required(),
  actividad_economica: actividad_economica.required(),
  ingresos_mensuales: ingresos_mensuales.required(),
});

const updateClienteSchema = Joi.object({
  nombre: nombre,
  fecha_nacimiento: fecha_nacimiento,
  actividad_economica: actividad_economica,
  ingresos_mensuales: ingresos_mensuales,
});

const getClienteSchema = Joi.object({
  id: id.required(),
});

module.exports = { createClienteSchema, updateClienteSchema, getClienteSchema };
