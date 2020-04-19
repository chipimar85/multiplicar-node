const opts = {
    base: {
        demand: true, // obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}



const argv = require('yargs')
    // command, por cada command tenemos nombre del comando, descripción para la ayuda y objeto de flags que puede recibir ese comando
    .command('listar', 'Imprime en consola la tabla de multplicar', opts)
    .command('crear', 'Crea un fichero con formato tabla-base-al-limite con la tabla de multiplicar de la base del 1 al limite', opts)
    // .help()
    .argv;


module.exports = {
    argv
}