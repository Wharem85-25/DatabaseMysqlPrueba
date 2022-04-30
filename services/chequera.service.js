const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom')

class ChequeraService {
  constructor() {}

  async create(data) {
    const newChequera = await models.Chequera.create(data);
    return newChequera;
  }

  async find() {
    const rta = await models.Chequera.findAll();
    return rta;
  }

  async findOne(id) {
    const chequera = await models.Chequera.findByPk(id);
    if(!chequera) {
      throw boom.notFount('chequera not found');
    }
    return chequera;
  }

  async update(id, changes) {
    const chequera = await this.findOne(id);
    const rta = await chequera.update(changes);
    return rta;
  }

  async delete(id) {
    const chequera = await this.findOne(id);
    await chequera.destroy();
    return { id };
  }
}

module.exports = ChequeraService;
