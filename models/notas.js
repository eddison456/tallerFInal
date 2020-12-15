const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const db =require("./index");


class notas extends Model {}
notas.init({
    Id_not: DataTypes.BIGINT,
    nota: DataTypes.BIGINT,
    Trabajo_estudiantes_id_Trabajo_estudiantes: DataTypes.BIGINT
}, { sequelize, modelName: 'notas' });

sequelize.sync()
  .then((Id_not,nota,Trabajo_estudiantes_id_Trabajo_estudiantes) => notas.create({
    Id_not: Id_not,
    nota: nota,
    Trabajo_estudiantes_id_Trabajo_estudiantes:Trabajo_estudiantes_id_Trabajo_estudiantes
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

module.exports=notas;