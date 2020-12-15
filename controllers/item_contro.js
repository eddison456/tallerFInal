const {validationResult} = require("express-validator");
const Items = require("../models/items");
const est = require("../models/est")
const notas=require("../models/notas")
const trabajo=require("../models/trabajos")
const trabajo_est=require("../models/trabajos_est")
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



exports.Est =(req,res,next)=>{
  
    const errors = validationResult(req);
    console.log("entre")
    if(!errors.isEmpty()){
        console.log("entre a lerro 1"+ errors)
        const error = new Error("validation fails......");
        error.statusCode = 422;
        error.data=errors.array();
        throw error;
     }
     
     const Cedula_est= req.body.Cedula_est;
     const Nombre_est= req.body.Nombre_est;
     const Apellido_est=req.body.Apellido_est;
     const Correo_est=req.body.Correo_est;
     const numero_est=req.body.numero_est;
    
     sequelize.transaction(async t=>{
         return await est.create({Cedula_est,Nombre_est,Apellido_est,Correo_est,numero_est})
     }).then(data=>{
         console.log("entre aqui")
       res.status(201).json({status:'succes',messge:'dato guardado'});
     }).catch(error=>{
         res.status(500).json({status:'fail',messge:'dato no guardado'});
     });

     
};


exports.mat=async (req,res,next)=>{
    const errors = validationResult(req);
    console.log("entre")
    if(!errors.isEmpty()){
        console.log("entre a lerro 1"+ errors);
        const error = new Error("validation fails......");
        error.statusCode = 422;
        error.data=errors.array();
        throw error;
     }
     
     const ID_mat= req.body.ID_mat;
     const Nombre_mat= req.body.Nombre_mat;
     
     sequelize.transaction(async t=>{
         return await Items.create({ID_mat,Nombre_mat})
     }).then(data=>{
         res.status(201).json({status:'succees',messege:'datos guardados'});
     }).catch(error=>{
         res.status(505).json({status:'fail',messege:'fail'})
     })

     
};

exports.Tra=(req,res,next)=>{
    const errors = validationResult(req);
    console.log("entre")
    if(!errors.isEmpty()){
        console.log("entre a lerro 1"+ errors)
        const error = new Error("validation fails......");
        error.statusCode = 422;
        error.data=errors.array();
        throw error;
     }
     
     const id_tra= req.body.id_tra;
     const Nombre_tra= req.body.Nombre_tra;
     const Dirrecion_tra= req.body.Dirrecion_tra;
     const materia_ID_mat= req.body.materia_ID_mat;

     sequelize.transaction(async t=>{
         return await trabajo.crate({id_tra,Nombre_tra,Dirrecion_tra,materia_ID_mat})
     }).then(data=>{
       res.status(201).json({status:'succes',messge:'dato guardado'});
     }).catch(error=>{
         res.status(500).json({status:'fail',messge:'dato no guardado'});
     });
};

exports.Trabajo_estudiantes=(req,res,next)=>{
    const errors = validationResult(req);
    console.log("entre")
    if(!errors.isEmpty()){
        console.log("entre a lerro 1"+ errors)
        const error = new Error("validation fails......");
        error.statusCode = 422;
        error.data=errors.array();
        throw error;
     }
     
     const id_Trabajo_estudiantes= req.body.id_Trabajo_estudiantes;
     const Dirreccion_trabajo_estudiante= req.body.Dirreccion_trabajo_estudiante;
     const Estudiantes_Cedula_est= req.body.Estudiantes_Cedula_est;
     const Trabajo_id_tra= req.body.Trabajo_id_tra;

     sequelize.transaction(async t=>{
         return await trabajo_est.crate({id_Trabajo_estudiantes,Dirreccion_trabajo_estudiante,Estudiantes_Cedula_est,Trabajo_id_tra})
     }).then(data=>{
       res.status(201).json({status:'succes',messge:'dato guardado'});
     }).catch(error=>{
         res.status(500).json({status:'fail',messge:'dato no guardado'});
     });
};

exports.not=(req,res,next)=>{
    const errors = validationResult(req);
    console.log("entre")
    if(!errors.isEmpty()){
        console.log("entre a lerro 1"+ errors)
        const error = new Error("validation fails......");
        error.statusCode = 422;
        error.data=errors.array();
        throw error;
     }
     
     const Id_not= req.body.Id_not;
     const nota= req.body.nota;
     const Trabajo_estudiantes_id_Trabajo_estudiantes= req.body.Trabajo_estudiantes_id_Trabajo_estudiantes;
   

     sequelize.transaction(async t=>{
         return await notas.crate({Id_not,nota,Estudiantes_Cedula_est,Trabajo_estudiantes_id_Trabajo_estudiantes})
     }).then(data=>{
       res.status(201).json({status:'succes',messge:'dato guardado'});
     }).catch(error=>{
         res.status(500).json({status:'fail',messge:'dato no guardado'});
     });
};