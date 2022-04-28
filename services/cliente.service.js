const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres');

class ClienteService {
  constructor() {}

  async create(data) {
    const newCliente = await models.Cliente.create(data);
    return newCliente;
  }

  async find() {
    const rta = await models.Cliente.findAll();
    return rta;
  }

  async findOne(id) {
    const cliente = await models.Cliente.findByPk(id);
    if(!cliente) {
      throw boom.notFound('Cliente not found');
    }
    return cliente;
  }

  async update(id, changes) {
    const cliente = await this.findOne(id);
    const rta = await cliente.update(changes);
    return rta;
  }

  async delete(id) {
    const cliente = await this.findOne(id);
    await cliente.destroy();
    return { id };
  }
}

module.exports = ClienteService;
