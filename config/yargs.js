const argv = require('yargs')
        .option('b', {
            alias: 'base',
            demandOption: true,
            type: 'number',
            describe : 'Es la base de la tabla de multiplicar'
        })
        .option('h', {
            alias: 'hasta',
            demandOption: true,
            type: 'number',
            describe : 'Hasta que numero se quiere multiplicar'
        })
        .option('l', {
            alias: 'listar',
            demandOption: false,
            type: 'boolean', 
            default: false,
            describe : 'Mustra la tabla en consola la tabla'
        })
        .check((argv) => {
            if (isNaN(argv.base )){
                throw 'La base tiene que ser un número'
            }
            if (isNaN( argv.hasta )){
                throw 'Hasta tiene que ser un número'
            }
            return true;
        })
        .argv;

module.exports = argv