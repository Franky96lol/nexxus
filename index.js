//inicializacion de modulos
const express = require('express');
const config = require('./config.js');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rutas
app.use('/',router);

//control de error de ruta
app.use((req , res , next) => res.json({status : false , message : ["*Error404*"]}));


// iniciando servidor
const server = app.listen(config.PORT, function () {
    console.log('Nexxus running on port ' + config.PORT +'...');
});
