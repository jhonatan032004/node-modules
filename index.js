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
    ${os.homedir}
    <br>
    ${util.format('el computador %s inicio el servidor', `${os.hostname}`)}
    <br>
    <!-- el modulo path sirve para trabajar con rutas de archivos y directorios -->
    ${path.basename(`${os.homedir}`)} <!-- devuelve la ultima porcion de una ruta (la base) -->
    <br>
    ${path.dirname(`${os.homedir}`)} <!-- devuelve la ruta de un archivo (en este caso la ruta del directorio de inicio) -->
    <br>
    ${path.join('/route1', 'folder1', '/route2', 'archive1')} <!--Convierte en una ruta valida-->
    <br>
    ${v8.getHeapCodeStatistics().code_and_metadata_size}
    <style>
    </style>
    <script>
    </script>
    `);
});

servidor.listen(port, ()=>{
    console.log(util.log('success'));
    console.log(v8.getHeapCodeStatistics())
});