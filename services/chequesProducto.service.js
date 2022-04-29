const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class ChequesProductoService {
constructor() {}

  async create(data) {
    const newChequera = await models.ChequesProducto.create(data, {
      include: ['tipo_chequera']
    });
    return newChequera;
  }

  async find() {
    const rta = await models.ChequesProducto.findAll({
      include: ['tipo_chequera']
    });
    return rta;
  }

  async findOne(id) {
    const chequera = await models.ChequesProducto.findByPk(id);
    if(!chequera) {
      throw boom.notFount('Cheques producto not found');
    }
    return chequera;
  }

  async update(id, changes) {
    const chequesProducto = await this.findOne(id);
    const rta = await chequesProducto.update(changes);
    return rta;
  }

  async delete(id) {
    const chequera = await this.findOne(id);
    await chequera.destroy();
    return { id };
  }
}

module.exports = ChequesProductoService;
