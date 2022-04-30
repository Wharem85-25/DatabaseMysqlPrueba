const express = require('express');
const TipoChequeraService = require('../services/tipoChequera.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createTipoChequeraSchema, updateTipoChequeraSchema, getTipoChequeraSchema } = require('../schema/tipoChequera.schema');

const router = express.Router();
const service = new TipoChequeraService();

router.get('/', async (req, res, next) => {
  try {
    const tipo = await service.find();
    res.json(tipo);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getTipoChequeraSchema, 'params'),
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
  validatorHandler(createTipoChequeraSchema, 'body'),
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
  validatorHandler(getTipoChequeraSchema, 'params'),
  validatorHandler(updateTipoChequeraSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const tipo = await service.update(id, body);
      res.json(tipo);
    } catch (error) {
      next(error);
    }
  })

router.delete('/:id',
  validatorHandler(getTipoChequeraSchema, 'params'),
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
