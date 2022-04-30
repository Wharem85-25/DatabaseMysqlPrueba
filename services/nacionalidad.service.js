const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class NacionalidadService {
  constructor() {}

  async create(data) {
    const newNacionalidad = await models.Nacionalidad.create(data);
    return newNacionalidad;
  }

  async find() {
    const rta = await models.Nacionalidad.findAll();
    return rta;
  }

  async findOne(id) {
    const nacionalidad = await models.Nacionalidad.findByPk(id);
    if(!nacionalidad) {
      throw boom.notFound('Nacionalidad not found');
    }
    return nacionalidad;
  }

  async update(id, changes) {
    const nacionalidad = await this.findOne(id);
    const rta = await nacionalidad.update(changes);
    return rta;
  }

  async delete(id) {
    const nacionalidad = await this.findOne(id);
    await nacionalidad.destroy();
    return { id };
  }
}

module.exports = NacionalidadService;
