const { body }=require("express-validator");
const  item_contro = require("../controllers/item_contro")
const router = express.Router();


router.post(
    "/Est",
    [
        body("Cedula_est")
        .exists()
        .withMessage("EL Numero ES REQUERIDO")
        .matches(/[0-9]+$/) 
        .withMessage("EL VALOR solo son numeros")
        .trim()
        .escape(),
        body("Nombre_est")
        .exists()
        .withMessage("EL Nombre ES REQUERIDO")
        .matches(/[a-zA-Z]+$/) 
        .withMessage("EL VALOR solo son letras")
        .trim()
        .escape(),
        body("Apellido_est")
        .exists()
        .withMessage("EL Apellido ES REQUERIDO")
        .matches(/[a-zA-Z]+$/) 
        .withMessage("EL VALOR solo son letras")
        .trim()
        .escape(),
        body("Correo_est")
        .exists()
        .withMessage("EL Apellido ES REQUERIDO")
        .matches(/[\w\d]+[@][\w]+[.][\w]+$/) 
        .withMessage("EL VALOR solo son letras")
        .trim()
        .escape(),
        body("numero_est")
        .exists()
        .withMessage("EL Numero ES REQUERIDO")
        .matches(/[0-9]+$/) 
        .withMessage("EL VALOR solo son numeros")
        .trim()
        .escape(),


    ],item_contro.Estudiantes);


    router.post(
        "/mat",
        [
            
            body("Nombre_mat")
            .exists()
            .withMessage("EL Nombre ES REQUERIDO")
            .matches(/[a-zA-Z]+$/) 
            .withMessage("EL VALOR solo son letras")
            .trim()
            .escape()
    
        ],item_contro.materia);

    
    router.post(
            "/Trab",
            [
                
                body("Nombre_tra")
                .exists()
                .withMessage("EL Nombre ES REQUERIDO")
                .matches(/[a-zA-Z]+$/) 
                .withMessage("EL VALOR solo son letras")
                .trim()
                .escape(),
                body("Dirrecion_tra")
                .exists()
                .withMessage("EL dirrecion ES REQUERIDO")
                .matches(/[a-zA-Z]+$/) 
                .withMessage("EL VALOR solo son letras")
                .trim()
                .escape(),
                body("materia_ID_mat")
                .exists()
                .withMessage("EL Nombre de la materia ES REQUERIDO")
                .matches(/[0-9]+$/) 
                .withMessage("EL VALOR solo son numero")
                .trim()
                .escape()
        
        
            ],item_contro.Trabajo);

     router.post(
                "/Trab_est",
                [
                    
                    body("Dirreccion_trabajo_estudiante")
                    .exists()
                    .withMessage("EL dirrecion ES REQUERIDO")
                    .matches(/[a-zA-Z0-9]+$/) 
                    .withMessage("no se reconoce dirrecion")
                    .trim()
                    .escape(),
                    body("Estudiantes_Cedula_est")
                    .exists()
                    .withMessage("la cedula  ES REQUERIDO")
                    .matches(/[0-9]+$/) 
                    .withMessage("EL VALOR solo son numero")
                    .trim()
                    .escape(),
                    body("Trabajo_id_tra")
                    .exists()
                    .withMessage("id de ltrabajo  ES REQUERIDO")
                    .matches(/[0-9]+$/) 
                    .withMessage("EL VALOR solo son numero")
                    .trim()
                    .escape()
            
            
                ],item_contro.Trabajo_estudiantes);

                router.post(
                    "/not",
                    [
                        
                        body("nota")
                        .exists()
                        .withMessage("la nota ES REQUERIDO")
                        .matches(/[0-9]+$/) 
                        .withMessage("no se la nota")
                        .trim()
                        .escape(),
                        body("Trabajo_estudiantes_id_Trabajo_estudiantes")
                        .exists()
                        .withMessage("se pide trabajoO")
                        .matches(/[0-9]+$/) 
                        .withMessage("EL VALOR solo son numero")
                        .trim()
                        .escape()
                
                    ],item_contro.notas);                