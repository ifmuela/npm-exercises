// Single thread
'use strict'

function sigleThread() {

	process.argv[2] = 'Aprendiendo Node.js'
	process.argv[3] = 19
	process.argv[4] = null
	process.argv[5] = true

	console.log('----------------------------------------------')
	console.log('Id del proceso............' + process.pid)
	console.log('Titulo....................' + process.title)
	console.log('Directori de Node.........' + process.execPath)
	console.log('Directorio actual.........' + process.cwd())
	console.log('Version de Node...........' + process.version)
	console.log('Version de dependencias...' + process.versions)
	console.log('Plataforma (S.O.).........' + process.platform)
	console.log('Arquitectura (S.O.).......' + process.arch)
	console.log('Tiempo activo de Node.....' + process.uptime())
	console.log('Argumentos del proceso....' + process.argv)
	console.log('----------------------------------------------')

	var i = 0
	for (i in process.argv) {
		console.log(process.argv[i])
	}
}

sigleThread()