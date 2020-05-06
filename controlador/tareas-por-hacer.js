const fs = require('fs'); //libreria de fs

let tareasPorHacer = []; //vector de tareas 

const cargarBD = () => {
    try {
        tareasPorHacer = require('../modelo/data.json') ///salimos de un nivel y cogemos Json
    } catch (err) { //manejar excepciones 
        tareasPorHacer = []; //inicializamos por vacio
    }
}


const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer); // formato JSON ... Tiene una interfas JSON (estrinficar en un formato JSON)
    fs.writeFile('modelo/data.json', data, (err) => { //Se creara el archivo data.json en la direccion propuesta
        if (err) throw new Error('No se puedo guardar la DATA', err);
    });

}

const crear = (descripcion) => { //funcionalidad crear una tarea (funcion fecha)
    cargarBD();
    let tarea = {
        descripcion, //descripcion = descripcion pero se deja asi solo con descripcion 
        completado: false // no va estar completado 
    }
    tareasPorHacer.push(tarea); //insertar en mi vector de tareas a mi obejto 
    guardarDB();
    return tarea; //retornamos la tarea que se realizo
}

const getLista = () => { //obtenga la lista de tareas
    cargarBD();
    return tareasPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarBD();

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }

    return false;
}
const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}



module.exports = {
    crear,
    getLista,
    actualizar,
    borrar

}