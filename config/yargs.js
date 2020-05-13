//crear, autulizar y borrar

const descripcion = { //como se va a utlilizar en todos los comandos 
    demand: true, //obligatorio 
    alias: 'd',
    desc: 'Descripcion de las tarea' //no indica aue es esto 
}
const completado = { // como se va a utlilizar en todos los comandos 
    defaul: true,
    alias: 'c',
    desc: 'Marca completado o pendiente una tarea'
}
const argv = require('yargs') //la libreria 
    .command('crear', 'Crear una tarea', {
        //crear una tarea y los aparametros 
        descripcion


    })
    .command('listar', 'Listar una tarea', {
        //crear una tarea y los aparametros 
        descripcion,
        completado
    })
    .command('actualizar', 'Actualiza una tarea', {
        //crear una tarea y los aparametros 
        descripcion,
        completado

    })
    .command('borrar', 'borrar una tarea', {
        //crear una tarea y los aparametros 
        descripcion

    })
    //.help() ------> //depligue la ayuda 
    .argv;


module.exports = {
        argv //exportar dodne se encuentran mis comandos 
    }
    //el comando : ( node app listar --help ) me ayuda a ver las obciones del programa
    //el cmando (node app listar,actualizar,crear.. --help) me aydua a ver individualemnte
