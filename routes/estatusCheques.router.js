const express = require('express');
const EstatusChequesService = require('../services/estatusCheques.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createEstatusChequeraSchema, updateEstatusChequeraSchema, getEstatusChequeraSchema } = require('../schema/estatusCheques.schema');

const router = express.Router();
const service = new EstatusChequesService();

router.get('/', async (req, res, next) => {
  try {
    const estatus = await service.find();
    res.json(estatus);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getEstatusChequeraSchema, 'params'),
  validatorHandler(updateEstatusChequeraSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const estatus = await service.findOne(id);
    res.json(estatus);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createEstatusChequeraSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEstatus = await service.create(body);
      res.status(201).json(newEstatus);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getEstatusChequeraSchema, 'params'),
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
  validatorHandler(getEstatusChequeraSchema, 'params'),
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
