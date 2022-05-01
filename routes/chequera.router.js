const express = require('express');
const ChequeraService = require('../services/chequera.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createChequeraSchema, updateChequeraSchema, getChequeraSchema } = require('../schema/chequera.schema');

const router = express.Router();
const service = new ChequeraService();

router.get('/', async (req, res, next) => {
  try {
    const chequeras = await service.find();
    res.json(chequeras);
  } catch (error) {
    next(error);
  }
});

router.get('/columnsName', async (req, res, next) => {
  try {
    const chequeras = await service.getColumnsName();
    res.json(chequeras);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getChequeraSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const chequeras = await service.findOne(id);
    res.json(chequeras);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createChequeraSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newChequera = await service.create(body);
      res.status(201).json(newChequera);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getChequeraSchema, 'params'),
  validatorHandler(updateChequeraSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const chequera = await service.update(id, body);
      res.json(chequera);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getChequeraSchema, 'params'),
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
