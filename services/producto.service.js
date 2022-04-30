const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class ProductoService {
  constructor() {}

  async create(data) {
    const newProducto = await models.Producto.create(data);
    return newProducto
  }

  async find() {
    const rta = await models.Producto.findAll({
      include: ['moneda']
    });
    return rta;
  }

  async findOne(id) {
    const producto = await models.Producto.findByPk(id, {
      include: ['moneda']
    });
    if(!producto) {
      throw new boom.notFound('Producto not found');
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
