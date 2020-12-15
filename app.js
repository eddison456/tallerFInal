const express = require("express");
const bodyParse = require("body-parser");
const itemRoute   = require("./routes/item.route")

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : true}));

// rutas

app.use('/api/items',itemRoute);

app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message =  error.message;
    const data = error.data;
    res.status(status).json({message,data});
}
);


module.exports = app;