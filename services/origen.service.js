const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class OrigenService {
  constructor() {}

  async create(data) {
    const newOrigen = await models.Origen.create(data);
    return newOrigen;
  }

  async find() {
    const rta = await models.Origen.findAll();
    return rta;
  }

  async findOne(id) {
    const origen = await this.findByPk(id);
    if(!origen) {
      throw boom.notFound('Origen not found');
    }
    return origen;
  }

  async update(id, changes) {
    const origen = await this.findOne(id);
    const rta = await origen.updtate(changes);
    return rta;
  }

  async delete(id) {
    const origen = await this.findOne(id);
    await origen.destroy();
    return { id };
  }
}

module.exports = OrigenService;
