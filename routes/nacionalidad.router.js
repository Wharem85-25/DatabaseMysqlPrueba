const express = require('express');
const NacionalidadService = require('../services/nacionalidad.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createNacionalidadSchema, updateNacionalidadSchema, getNacionalidadSchema } = require('../schema/nacionalidad.schema');

const router = express.Router();
const service = new NacionalidadService();

router.get('/', async (req, res, next) => {
  try {
    const nacionalidad = await service.find();
    res.json(nacionalidad);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getNacionalidadSchema, 'params'),
  validatorHandler(updateNacionalidadSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const nacionalidad = await service.findOne(id);
    res.json(nacionalidad);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createNacionalidadSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newNacionalidad = await service.create(body);
      res.status(201).json(newNacionalidad);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getNacionalidadSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  })

router.delete('/:id',
  validatorHandler(getNacionalidadSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  })

module.exports = router;
