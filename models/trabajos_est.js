const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const db =require("./index");


class Trabajo_estudiantes extends Model {}
Trabajo_estudiantes.init({
    id_Trabajo_estudiantes: DataTypes.BIGINT,
    Dirreccion_trabajo_estudiante: DataTypes.STRING,
    Estudiantes_Cedula_est: DataTypes.BIGINT,
    Trabajo_id_tra: DataTypes.BIGINT,
}, { sequelize, modelName: 'Trabajo_estudiantes' });

sequelize.sync()
  .then((id_Trabajo_estudiantes,Dirreccion_trabajo_estudiante,Estudiantes_Cedula_est,Trabajo_id_tra) => Trabajo_estudiantes.create({
    id_Trabajo_estudiantes: id_Trabajo_estudiantes,
    Dirreccion_trabajo_estudiante: Dirreccion_trabajo_estudiante,
    Estudiantes_Cedula_est:Estudiantes_Cedula_est,
    Trabajo_id_tra:Trabajo_id_tra
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

module.exports=Trabajo_estudiantes;