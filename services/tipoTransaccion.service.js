const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class TipoTipoTransaccionService {
  constructor() {}

  async create(data) {
    const newTipo = await models.TipoTransaccion.create(data);
    return newTipo;
  }

  async find() {
    const rta = await models.TipoTransaccion.findAll();
    return rta;
  }

  async findOne(id) {
    const tipo = await models.TipoTransaccion.findByPk(id);
    if(!tipo) {
      throw boom.notFound('TipoTransaccion not found');
    }
    return tipo;
  }

  async update(id, changes) {
    const tipo = await this.findOne(id);
    const rta = await tipo.update(changes);
    return rta;
  }

  async delete(id) {
    const tipo = await this.findOne(id);
    await tipo.destroy();
    return { id };
  }
}

module.exports = TipoTipoTransaccionService;
