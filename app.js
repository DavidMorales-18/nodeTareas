const argv = require('./config/yargs').argv; //se llamara al documento yargs de config y solo quiero el argv
const tareas = require('./controlador/tareas-por-hacer') //importar el modulo que se utiliza voy a exttraer todo el objeto

let comando = argv._[0]; //esta en la posicion cero 
switch (comando) {
    case 'crear':
        /*  let tarea = tareas.crear(argv.descripcion);
         console.log(tarea); */
        let tarea = tareas.crear(argv.descripcion); //llamarle a tarea donde resive como parametro la descrpcion y el argv,me devuelve una tarea
        console.log(tarea);
        break;
    case 'listar':
        let lista = tareas.getLista();
        console.log("============== TAREAS =============".green);
        for (let tarea of lista) {
            console.log(`Desripcion: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado}\n`);
        }
        console.log("========================= +++++++ ========================");
        break;
    case 'actualizar':
        let resp = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(resp);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}
/* 
npm init : todo lo necesario 
Intalacion de librerias : colores y yargs
a)  npm i colors yargs --save


node app --help : me ayuda a listar todo lo que tengo en mi napp
Comandos:
  app crear     Crear una tarea
  app listar    Listar una tarea
  app actuliza  Actualiza una tarea
  app borrar    Borrar una tarea
  
node app crear --help  : la ayuda para ver loq ue esta dentro de crear

Crear una tarea

Options:
  --help             Muestra ayuda                                    [booleano]
  --version          Muestra número de versión                        [booleano]
  --descripcion, -d  Descripcion de las tarea                        [requerido]
  --completado, -c   Marca completado o pendiente una tarea
*/