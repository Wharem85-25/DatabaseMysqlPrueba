const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class TipoChequeraService {
  constructor() {}

  async create(data) {
    const newTipo = await models.TipoChequera.create(data);
    return newTipo;
  }

  async find() {
    const rta = await models.TipoChequera.findAll();
    return rta;
  }

  async findOne(id) {
    const tipo = await this.findByPk(id);
    if(!tipo) {
      throw boom.notFound('Tipo chequera not found');
    }
    return tipo;
  }

  async update(id, changes) {
    const tipo = await this.findOne(id);
    const rta = await tipo.updtate(changes);
    return rta;
  }

  async delete(id) {
    const tipo = await this.findOne(id);
    await tipo.destroy();
    return { id };
  }
}

module.exports = TipoChequeraService;
