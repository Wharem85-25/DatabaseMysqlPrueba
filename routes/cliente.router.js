const express = require('express');
const ClienteService = require('../services/cliente.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createClienteSchema, updateClienteSchema, getClienteSchema } = require('../schema/cliente.schema');

const router = express.Router();
const service = new ClienteService();

router.get('/', async (req, res, next) => {
  try {
    const clientes = await service.find();
    res.json(clientes);
  } catch (error) {
    next(error);
  }
});

router.get('/columnsName', async (req, res, next) => {
  try {
    const cliente = await service.getColumnsName();
    res.json(cliente);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getClienteSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const cliente = await service.findOne(id);
    res.json(cliente);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createClienteSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCliente = await service.create(body);
      res.status(201).json(newCliente);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getClienteSchema, 'params'),
  validatorHandler(updateClienteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const cliente = await service.update(id, body);
      res.json(cliente);
    } catch (error) {
      next(error);
    }
  })

router.delete('/:id',
  validatorHandler(getClienteSchema, 'params'),
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
