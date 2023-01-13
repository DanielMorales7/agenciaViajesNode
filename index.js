// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

// conectar DB
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error))

const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//creamos nuestro middleware ** Obtener año actual
app.use( (req, res, next) => {
    
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';

    return next();
});

// Agregar body parser para leer los datos del formulario

app.use(express.urlencoded({extended:true}));

//dar permiso a express a ingresar en la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router); // desde la páfina principal puedes visitar todos los demás routes 

app.listen(port, () => {

    console.log(`El servidor está funcionando en el puerto ${port}`)

});