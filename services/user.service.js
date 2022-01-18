const boom = require('@hapi/boom');
const { use } = require('express/lib/application');
const { ne } = require('faker/lib/locales');
const { models } = require("./../libs/sequelize")

class UserService {
  constructor() {
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const response = await models.User.findAll();
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound("user not found");
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const resolve = await user.update(changes);
    return resolve;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
