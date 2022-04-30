const express = require('express');
const ProductoService = require('../services/producto.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductoSchema, updateProductoSchema, getProductoSchema } = require('../schema/producto.schema');

const router = express.Router();
const service = new ProductoService();

router.get('/', async (req, res, next) => {
  try {
    const productos = await service.find();
    res.json(productos);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProductoSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const productos = await service.findOne(id);
    res.json(productos);
  } catch (error) {
    next(error);
  }
});


router.post('/',
  validatorHandler(createProductoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProducto = await service.create(body);
      res.status(201).json(newProducto);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getProductoSchema, 'params'),
  validatorHandler(updateProductoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const producto = await service.update(id, body);
      res.json(producto);
    } catch (error) {
      next(error);
    }
  })

router.delete('/:id',
  validatorHandler(getProductoSchema, 'params'),
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
