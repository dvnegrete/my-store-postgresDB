const { Sequelize } = require("sequelize");
//const dbType = "mysql";

const { config } = require("../config/config");
const setupModels = require("./../db/models");

const USER = encodeURIComponent(config.dbUsers);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI,{
  dialect:"mysql",
  login: true,
});

//aqui creamos la conexion a la BD
setupModels(sequelize);

//Sincronizamos. Cuando el modelo esta configurado el lee el schema y lo crea. Crea la tabla en e este caso
sequelize.sync();

module.exports = sequelize;
