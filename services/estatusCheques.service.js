const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class estatusChequesService {
  constructor() {}

  async create(data) {
    const estatus = await models.EstatusCheques.create(data);
    return estatus;
  }

  async find() {
    const rta = await models.EstatusCheques.findAll();
    return rta;
  }

  async findOne(id) {
    const estatus = await models.EstatusCheques.findByPk(id);
    if(!estatus) {
      throw boom.notFound('Estatus not found');
    }
    return estatus;
  }

  async update(id, changes) {
    const estatus = await this.findOne(id);
    const rta = await estatus.update(changes);
    return rta;
  }

  async delete(id) {
    const estatus = await this.findOne(id);
    await estatus.destroy();
    return { id };
  }
}

module.exports = estatusChequesService;
