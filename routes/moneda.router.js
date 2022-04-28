const express = require('express');
const MoneadaService = require('../services/moneda.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createMonedaSchema, updateMonedaSchema, getMonedaSchema } = require('../schema/moneda.schema');

const router = express.Router();
const service = new MoneadaService();

router.get('/', async (req, res, next) => {
  try {
    const moneda = await service.find();
    res.json(moneda);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getMonedaSchema, 'params'),
  validatorHandler(updateMonedaSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const moneda = await service.findOne(id);
    res.json(moneda);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createMonedaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMoneda = await service.create(body);
      res.status(201).json(newMoneda);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getMonedaSchema, 'params'),
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
  validatorHandler(getMonedaSchema, 'params'),
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
