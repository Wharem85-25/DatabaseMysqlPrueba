const express = require('express');
const CodigoTransaccionService = require('../services/codigoTransaccion.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createCodigoTransaccionSchema, updateCodigoTransaccionSchema, getCodigoTransaccionSchema } = require('../schema/codigoTransaccion.schema');

const router = express.Router();
const service = new CodigoTransaccionService();

router.get('/', async (req, res, next) => {
  try {
    const codigo = await service.find();
    res.json(codigo);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCodigoTransaccionSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const codigoTrans = await service.findOne(id);
    res.json(codigoTrans);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createCodigoTransaccionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCodigoTrans = await service.create(body);
      res.status(201).json(newCodigoTrans);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getCodigoTransaccionSchema, 'params'),
  validatorHandler(updateCodigoTransaccionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const codigo = await service.update(id, body);
      res.json(codigo);
    } catch (error) {
      next(error);
    }
  })


router.delete('/:id',
  validatorHandler(getCodigoTransaccionSchema, 'params'),
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
