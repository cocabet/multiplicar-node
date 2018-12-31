const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch(comando){
	
	case'listar':
		console.log('Listar');
		listarTabla( argv.base, argv.limite );
		break;

	case'crear':
		console.log('Crear');
		crearArchivo( argv.base, argv.limite )
			.then(archivo => console.log(`Archivo creado:`,colors.magenta(archivo)))
			.catch(e => console.log(e));
		break;

	default:
		console.log('Comando no reconocido'); 	


}
//console.log(process.argv);*Referencia
//let argv2 = process.argv;	*Referencia
//let parametro = argv[2]; 	*Referencia
//let base = parametro.split('=')[1]

/**/