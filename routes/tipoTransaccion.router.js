const express = require('express');
const TipoTransaccionService = require('../services/tipoTransaccion.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createTipoTransaccionSchema, updateTipoTransaccionSchema, getTipoTransaccionSchema } = require('../schema/tipoTransaccion.schema');

const router = express.Router();
const service = new TipoTransaccionService();

router.get('/', async (req, res, next) => {
  try {
    const tipo = await service.find();
    res.json(tipo);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getTipoTransaccionSchema, 'params'),
  validatorHandler(updateTipoTransaccionSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const tipo = await service.findOne(id);
    res.json(tipo);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createTipoTransaccionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTipo = await service.create(body);
      res.status(201).json(newTipo);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getTipoTransaccionSchema, 'params'),
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
  validatorHandler(getTipoTransaccionSchema, 'params'),
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
