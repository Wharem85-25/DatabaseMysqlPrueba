const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class MonedaService {
  constructor() {}

  async create(data) {
    const newMoneda = await models.Moneda.create(data);
    return newMoneda;
  }

  async find() {
    const rta = await models.Moneda.findAll();
    return rta;
  }

  async findOne(id) {
    const moneda = await this.findByPk(id);
    if(!moneda) {
      throw boom.notFound('Moneda not found');
    }
    return moneda;
  }

  async update(id, changes) {
    const moneda = await this.findOne(id);
    const rta = await moneda.updtate(changes);
    return rta;
  }

  async delete(id) {
    const moneda = await this.findOne(id);
    await moneda.destroy();
    return { id };
  }
}

module.exports = MonedaService;
