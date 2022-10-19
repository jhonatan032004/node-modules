console.clear();
const express = require('express');
const servidor = express();
const os = require('os');
const fs = require('fs');
const path = require('path');
const util = require('util');
const v8 = require('v8');
// const chalk = require('chalk');


const port = 3000;
servidor.get('/', (req,res)=>{
    // console.log(req.params.idcuenta);
    // res.send("tu cuenta personal");
    res.send(`
    <div class="container">
        <div class="primero divs">${os.homedir}</div>
        <!-- el modulo path sirve para trabajar con rutas de archivos y directorios -->
        <div class="segundo divs">${path.basename(`${os.homedir}`)}</div> <!-- devuelve la ultima porcion de una ruta (la base) -->
        <div class="tercero divs">${path.dirname(`${os.homedir}`)}</div> <!-- devuelve la ruta de un archivo (en este caso la ruta del directorio de inicio) -->
        <div class="cuarto divs">${util.format('el computador %s inicio el servidor', `${os.hostname}`)}</div>
        <div class="quinto divs">${path.join('/route1', 'folder1', '/route2', 'archive1')}</div> <!--Convierte en una ruta valida-->
        <div class="sexto divs">${v8.getHeapCodeStatistics().code_and_metadata_size}</div>
    <style>
    *{margin:0;}
    .container{width:100%;height:80vh;display:grid;grid-template-rows: auto auto auto auto auto auto;grid-template-columns:auto auto auto}
    .divs{grid-column:2/3;text-align:center;}
    </style>
    <script>
    </script>
    `);
});

servidor.listen(port, ()=>{
    console.log(util.log('success'));
    console.log(v8.getHeapCodeStatistics())
});