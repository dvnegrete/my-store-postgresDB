const { config } = require("../config/config");

const USER = encodeURIComponent(config.dbUsers);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  develompent : {
    url: URI,
    dialect: "postgres",
  },
  production : {
    url: URI,
    dialect: "postgres",
  },
}
