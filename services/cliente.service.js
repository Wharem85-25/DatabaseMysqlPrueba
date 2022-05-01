const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

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

  async getColumnsName() {
    const rta = await models.Cliente.rawAttributes;
    return Object.keys(rta);
  }

  async findOne(id) {
    const cliente = await models.Cliente.findByPk(id, {
      include: ['nacionalidad']
    });
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
