const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const db =require("./index");


class materia extends Model {}
materia.init({
    ID_mat: DataTypes.BIGINT,
    Nombre_mat: DataTypes.STRING
}, { sequelize, modelName: 'materia' });

sequelize.sync()
  .then((ID_mat,Nombre_mat) => materia.create({
    ID_mat: ID_mat,
    Nombre_mat: Nombre_mat
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

module.exports=materia;