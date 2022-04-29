const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class CuentaService {
  constructor() {}

  async create(data) {
    const newCuenta = await models.Cuenta.create(data, {
      include: ['cliente']
    });
    return newCuenta;
  }

  async find() {
    const rta = await models.Cuenta.findAll({
      include: ['cliente', 'producto']
    });
    return rta;
  }

  async findOne(id) {
    const cuenta = await this.findByPk(id);
    if(!cuenta) {
      throw boom.notFound('Cuenta not found');
    }
    return cuenta;
  }

  async update(id, changes) {
    const cuenta = await this.findOne(id);
    const rta = await cuenta.updtate(changes);
    return rta;
  }

  async delete(id) {
    const cuenta = await this.findOne(id);
    await cuenta.destroy();
    return { id };
  }
}

module.exports = CuentaService;
