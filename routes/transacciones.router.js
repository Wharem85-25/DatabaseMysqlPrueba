const express = require('express');
const TransaccionService = require('../services/transacciones.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createTransaccionSchema, updateTransaccionSchema, getTransaccionSchema } = require('../schema/transacciones.schema');

const router = express.Router();
const service = new TransaccionService();

router.get('/', async (req, res, next) => {
  try {
    const transacciones = await service.find();
    res.json(transacciones);
  } catch (error) {
    next(error);
  }
});

router.get('/columnsName', async (req, res, next) => {
  try {
    const transaccion = await service.getColumnsName();
    res.json(transaccion);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getTransaccionSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const transacciones = await service.findOne(id);
    res.json(transacciones);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createTransaccionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTransaccion = await service.create(body);
      res.status(201).json(newTransaccion);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getTransaccionSchema, 'params'),
  validatorHandler(updateTransaccionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const transaccion = await service.update(id, body);
      res.json(transaccion);
    } catch (error) {
      next(error);
    }
  })

router.delete('/:id',
  validatorHandler(getTransaccionSchema, 'params'),
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
