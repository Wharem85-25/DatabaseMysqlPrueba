const express = require('express');
const OrigenService = require('../services/origen.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createOrigenSchema, updateOrigenSchema, getOrigenSchema } = require('../schema/origen.schema');

const router = express.Router();
const service = new OrigenService();

router.get('/', async (req, res, next) => {
  try {
    const origen = await service.find();
    res.json(origen);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getOrigenSchema, 'params'),
  validatorHandler(updateOrigenSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const origen = await service.findOne(id);
    res.json(origen);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createOrigenSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrigen = await service.create(body);
      res.status(201).json(newOrigen);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getOrigenSchema, 'params'),
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
  validatorHandler(getOrigenSchema, 'params'),
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
