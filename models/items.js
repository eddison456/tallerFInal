const{Sequelize,Model}= require("sequelize");
const db = require("./index");
const sequelize = db.sequelize;

class Items extends Model {}
Items.init({
    Cedula_est:{
        type : Sequelize.BIGINT,
        primaryKey  : true,
    
    },
    Nombre_est:{
       type : Sequelize.STRING,
       allowNull : false,
       validate :{
           max:150,
           min:4,
           is:{
               args : /[a-ZA-Z]+$/,
               msg : 'solo se puede letras '
           }
       }     
   },
    Apellido_est:{
    type : Sequelize.STRING,
    allowNull : false,
    validate :{
        max:150,
        min:4,
        is:{
            args : /[a-ZA-Z]+$/,
            msg : 'solo se puede letras '
        }
    }     
},
    Correo_est:{
    type : Sequelize.STRING,
    allowNull : false,
    validate :{
        max:150,
        min:4,
        is:{
            args : /[\w\d]+[@][\w]+[.][\w]+$/,
            msg : 'solo se puede letras '
        }
    }     
},  
    numero_est:{
    type : Sequelize.BIGINT,
    allowNull : false,
    validate :{
        max:150,
        min:4,
        is:{
            args : /[0-9]+$/,
            msg : 'solo NUMEROS'
        }
    } 

},
 createdAt : Sequelize.Date,
 ipdatedAt: Sequelize.Date  
},{

sequelize,
modelname : 'Estudiantes'
},{
    ID_mat:{
        type : Sequelize.BIGINT,
        primaryKey  : true,
        autoIncrement : true    
    },
    Nombre_est:{
       type : Sequelize.STRING,
       allowNull : false,
       validate :{
           max:150,
           min:4,
           is:{
               args : /[a-ZA-Z]+$/,
               msg : 'solo se puede letras '
           }
       }     
   },
 createdAt : Sequelize.Date,
 ipdatedAt: Sequelize.Date  
},{

sequelize,
modelname : 'materia'
},{
    id_tra:{
        type : Sequelize.BIGINT,
        primaryKey  : true,
        autoIncrement : true    
    },
    Nombre_tra:{
       type : Sequelize.STRING,
       allowNull : false,
       validate :{
           max:150,
           min:4,
           is:{
               args : /[a-ZA-Z]+$/,
               msg : 'solo se puede letras '
           }
       }     
   },
    Dirrecion_tra:{
    type : Sequelize.STRING,
    allowNull : false,
    validate :{
        max:150,
        min:4,
        is:{
            args : /[a-ZA-Z0-9]+$/,
            msg : 'dirrecion incorrecta'
        }
    }     
},
materia_ID_mat:{
    type : Sequelize.BIGINT,
    allowNull : false,
    FOREIGNKEY : true,
    validate :{
        max:150,
        min:4,
        is:{
            args : /[0-9]+$/,
            msg : 'id incorrecta'
        }
    }     
},
 createdAt : Sequelize.Date,
 ipdatedAt: Sequelize.Date  
},{

sequelize,
modelname : 'Trabajo'},{

    id_Trabajo_estudiantes:{
        type : Sequelize.BIGINT,
        primaryKey  : true,
        autoIncrement : true    
    },
    Dirreccion_trabajo_estudiante:{
       type : Sequelize.STRING,
       allowNull : false,
       validate :{
           max:150,
           min:4,
           is:{
               args : /[a-ZA-Z0-9]+$/,
               msg : 'dirrecion incorrecta'
           }
       }     
   },
    Estudiantes_Cedula_est:{
    type : Sequelize.BIGINT,
    allowNull : false,
    FOREIGNKEY : true,
    validate :{
        max:150,
        min:4,
        is:{
            args : /[0-9]+$/,
            msg : 'estudiantes incorrecto'
        }
    }     
},
    Trabajo_id_tra:{
    type : Sequelize.BIGINT,
    allowNull : false,
    FOREIGNKEY : true,
    validate :{
        max:150,
        min:4,
        is:{
            args : /[0-9]+$/,
            msg : 'trbajao incorrecto '
        }
    }     
},
 createdAt : Sequelize.Date,
 ipdatedAt: Sequelize.Date  
},{

sequelize,
modelname : 'Trabajo_estudiantes'},{

    Id_not:{
        type : Sequelize.BIGINT,
        primaryKey  : true,
        autoIncrement : true    
    },
    nota:{
       type : Sequelize.BIGINT,
       allowNull : false,
       validate :{
           max:4,
           min:1,
           is:{
               args : /[0-9]+$/,
               msg : 'nota inocrrecta'
           }
       }     
   },
   Trabajo_estudiantes_id_Trabajo_estudiantes:{
    type : Sequelize.BIGINT,
    allowNull : false,
    FOREIGNKEY : true,
    validate :{
        max:150,
        min:4,
        is:{
            args : /[0-9]+$/,
            msg : 'dirrecion incorrecto'
        }
    }     
},
 createdAt : Sequelize.Date,
 ipdatedAt: Sequelize.Date  
},{

sequelize,
modelname : 'notas'},)

module.exports = Items;

module.exports.getAllItems= async()=>{
    return await Items.findAll({attributes:['Cedula_es','Nombre_est','Apellido_est','Correo_est','numero_est']}).then(Estudiantes=>{ return Estudiantes});
}

module.exports.getAllItems= async()=>{
    return await Items.findAll({attributes:['ID_mat','Nombre_mat']}).then(materia=>{ return materia});
}

module.exports.getAllItems= async()=>{
    return await Items.findAll({attributes:['id_tra','Nombre_tra','Dirrecion_tra','materia_ID_mat']}).then(Trabajo=>{ return Trabajo});
}

module.exports.getAllItems= async()=>{
    return await Items.findAll({attributes:['id_Trabajo_estudiantes','Dirreccion_trabajo_estudiante','Estudiantes_Cedula_est','Trabajo_id_tra']}).then(Trabajo_estudiante=>{ return Trabajo_estudiante});
}

module.exports.getAllItems= async()=>{
    return await Items.findAll({attributes:['Id_not','nota','Trabajo_estudiantes_id_Trabajo_estudiantes']}).then(notas=>{ return notas});
}