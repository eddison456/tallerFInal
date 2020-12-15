const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const db =require("./index");


class Trabajo extends Model {}
Trabajo.init({
    id_tra: DataTypes.BIGINT,
    Nombre_tra: DataTypes.STRING,
    Dirrecion_tra: DataTypes.STRING,
    materia_ID_mat:DataTypes.BIGINT
}, { sequelize, modelName: 'Trabajo' });

sequelize.sync()
  .then((id_tra,Nombre_tra,Dirrecion_tra,materia_ID_mat) => Trabajo.create({
    id_tra: id_tra,
    Nombre_tra: Nombre_tra,
    Dirrecion_tra: Dirrecion_tra,
    materia_ID_mat: materia_ID_mat
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

module.exports=Trabajo;