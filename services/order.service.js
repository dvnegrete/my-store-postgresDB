const boom = require('@hapi/boom');

const sequelize = require("../libs/sequelize");

class OrderService {

  constructor(){
  }
  async create(data) {
    return data;
  }

  async find() {
    const consult = "SELECT * FROM tasks";
    const response = await this.pool.query(consult)
    return response.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
