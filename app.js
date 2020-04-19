// requireds

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs.js').argv;
const colors = require('colors');
// const fs = require('express'); paquete expansión de node
// const fs = require('./fs'); archivos que nosotros creamos en el proyecto

let comando = argv._[0];
let base = argv.base; // || argv.b;
let limite = argv.limite; // || argv.l;
console.log(base);

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(base, limite)
            .then(tabla => console.log(`Tabla de ${ base }\n${ tabla }\n`))
            .catch(err => console.log(err))
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}.`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no soportado');

}
console.log(argv);
// let param = argv[2];
// let base = param.split('=')[1];

// console.log(process.argv);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo}.`))
//     .catch(err => console.log(err));