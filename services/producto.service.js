const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres');

class ProductoService {
  constructor() {}

  async create(data) {
    const newProducto = await models.Producto.create(data);
    return newProducto
  }

  async find() {
    const rta = await models.Producto.findAll();
    return rta;
  }

  async findOne(id) {
    const producto = await models.Producto.findByPk(id);
    if(!producto) {
      throw new boom.NotFound('Producto not found');
    }
    return producto;
  }

  async update(id, changes) {
    const producto = await this.findOne(id);
    const rta = await producto.update(changes);
    return rta;
  }

  async delete(id) {
    const producto = await this.findOne(id);
    await producto.destroy();
    return { id };
  }
}

module.exports = ProductoService;
