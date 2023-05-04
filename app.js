const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

crearArchivo( argv.base, argv.hasta, argv.listar )
    .then( nombreArchivo => console.log(nombreArchivo .bgGreen))
    .catch( err => console.log(err) .brightRed);