const { Model, DataTypes, Sequelize} = require ("sequelize");
//son utencilios que usaremos.

//definir cual sera el nombre de la tabla
const USER_TABLE = "users";

//definir la estructura de la base de datos. Aqui es donde se dice agnostico, por que lo usa en varios tipos de BD
const UserSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique:true
  },
  password: {
    //no permitir que sea nulo
    allowNull: false,
    type: DataTypes.STRING
  },
  //este tiene que ver con la integracion de JS con SQL
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    //el naming con JS es camelCase, pero en SQL nombre de la variable con un guion bajo o espacio
    field: "create_at",
    // El valor por defecto, cuando se inserto con sequelize
    defaultValue: Sequelize.NOW
  }
}

//el Model es quien tiene todas las formas del lenguaje de SQL, para las consultas, etc.
class User extends Model {
  //aqui se crearan los metodos estaticos mas adelante
  //es decir que no se necesita una declaracion para acceder a los metodos
  static associate() {
    //associate
  }

  //aqui van lo datos de la conexion, que lo tenemos con el nombre sequelize
  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false
    }
  }
}

module.exports = { User, USER_TABLE, UserSchema };
