const { models } = require('./../libs/sequelize');

// const getConnection = require('../libs/postgres');

class UsersService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const rta = await models.Producto.findAll();
    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    }
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UsersService;
