const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class TransaccionService {
  constructor() {}

  async create(data) {
    const newTrans = await models.Transaccion.create(data);
    return newTrans;
  }

  async find() {
    const rta = await models.Transaccion.findAll({
      include: ['codigoTransaccion', 'origen', 'tipoTransaccion', 'cuenta']
    });
    return rta;
  }

  async findOne(id) {
    const trans = await models.Transaccion.findByPk(id, {
      include: ['codigoTransaccion', 'origen', 'tipoTransaccion', 'cuenta']
    });
    if(!trans) {
      throw boom.notFound('transaccion not found');
    }
    return trans;
  }

  async update(id, changes) {
    const trans = await this.findOne(id);
    const rta = await trans.update(changes);
    return rta;
  }

  async delete(id) {
    const trans = await this.findOne(id);
    await trans.destroy();
    return { id };
  }
}

module.exports = TransaccionService;
