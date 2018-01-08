const fs = require('fs');


//Leer un archivo

archivo = fs.readFileSync('./texto.txt');

console.log(archivo);
