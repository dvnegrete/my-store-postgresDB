const { Pool } = require("pg");

const { config } = require("./../config/config");

//proteger usuario y contraseña
const USER = encodeURIComponent(config.dbUsers);
const PASSWORD = encodeURIComponent(config.dbPassword);

//con la URL que generar el provedor de nube aqui la indicamos:
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
