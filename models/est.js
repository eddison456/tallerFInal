const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const db =require("./index");


class Estudiantes extends Model {}
Estudiantes.init({
    Cedula_est: DataTypes.BIGINT,
    Nombre_est: DataTypes.STRING,
    Apellido_est: DataTypes.STRING,
    Correo_est: DataTypes.STRING,
    numero_est: DataTypes.BIGINT,
}, { sequelize, modelName: 'Estudiantes' });

sequelize.sync()
  .then((Cedula_est,Nombre_est,Apellido_est,Correo_est,numero_est) => Estudiantes.create({
    Cedula_est: Cedula_est,
    Nombre_est: Nombre_est,
    Apellido_est: Apellido_est,
    Correo_est:Correo_est,
    numero_est:numero_est
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

module.exports=Estudiantes;