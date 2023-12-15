// crear el servidor de Express JS- posterior a la configuracion se agrega el script al package.json

// sintaxis de Common JS
/* const express = require('express'); */

// version de Imports 

import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//conectar la base de datos 
db.authenticate()
    .then(() => console.log('BD conectada'))
    .catch(error => console.log(error))

//definir puerto
const port = process.env.PORT || 4000;

//Habilitar el PUG
app.set('view engine','pug')

//obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.nombreSitio = 'Agencia de viajes';
    res.locals.actualYear = year.getFullYear();
    next();

})
//agregar body parser para leer datos en el POST del formulario
app.use(express.urlencoded({extended:true}));

//Definir la carpeta Public
app.use(express.static('public'))


//agregar el router
app.use('/',router);

//arrancar el servidor con .listen
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}` )
})