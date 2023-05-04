const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, hasta = 10 ,listar = false ) => {
    try{
        let tabla = "";

        tabla += `------  Tabla del ${base}  ------\n`;
        
        for (let i = 1; i <= hasta; i++) {
            tabla += `${base} x ${i} = ${i * base}\n`;
        }
        
        if(listar){
            console.log( colors.blue(tabla) );
        }
        
        fs.writeFileSync(`./public/tabla-del-${base}.txt`, tabla);

        return `Archivo creado: tabla-del-${base}.txt`;

    }catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo
}