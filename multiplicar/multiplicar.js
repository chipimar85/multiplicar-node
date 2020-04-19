// requireds
const fs = require('fs');
const colors = require('colors');


// let crearArchivo = async(base) => {
//     let data = '';
//     for (let i = 1; i <= 10; i++) {
//         data += `${base} * ${i} = ${ base * i }\n`;
//     }

//     fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//         if (err) throw err;

//         console.log(`El archivo tabla del ${ base } ha sido creado`);
//     });
// }


// listar tabla de base hasta limite
let listarTabla = (base, limite = 10) => { // el valor por defecto 10 solo tiene sentido si no viene por consola, pq ahí tenemos configurado yargs para que lo tenga

    console.log('=================================================='.green);
    console.log(`               tabla de ${ base }                 `.green);
    console.log('=================================================='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base} o ${limite} no es un numero`.red);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${ base * i }`.yellow);
            data += `${base} * ${i} = ${ base * i }\n`;
        }
        resolve(data);
    })

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base} o ${limite} no es un numero`.red);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }-al-${ limite }.txt`.green);
        });

    });

}


// exports.crearArchivo = crearArchivo;
module.exports = {
    crearArchivo,
    listarTabla
}