const express = require('express');
const ChequesProductoService = require('../services/chequesProducto.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createChequesProductoSchema, updateChequesProductoSchema, getChequesProductoSchema } = require('../schema/chequesProducto.schema');

const router = express.Router();
const service = new ChequesProductoService();

router.get('/', async (req, res, next) => {
  try {
    const chequesProducto = await service.find();
    res.json(chequesProducto);
  } catch (error) {
    next(error);
  }
});

router.get('/columnsName', async (req, res, next) => {
  try {
    const cheques = await service.getColumnsName();
    res.json(cheques);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getChequesProductoSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const cheques = await service.findOne(id);
    res.json(cheques);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createChequesProductoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newChequesProducto = await service.create(body);
      res.status(201).json(newChequesProducto);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getChequesProductoSchema, 'params'),
  validatorHandler(updateChequesProductoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const cheques = await service.update(id, body);
      res.json(cheques);
    } catch (error) {
      next(error);
    }
  })

router.delete('/:id',
  validatorHandler(getChequesProductoSchema, 'params'),
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
