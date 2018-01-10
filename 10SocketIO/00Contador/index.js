// Socket.IO
//   1)  Eventos connection y disconnect
//   2)  Puedes crear tus propios Eventos
//   3)  emit(): cuando se comunican mensajes a todos los clientes conectados
//   4)  broadcast.emit(): cuando comunicas un mensaje a todos los clientes excepto a quien lo emite
//   5)  Los 4 puntos anteriones funcionan en el servidor y en el cliente

'use strict'

var http = require('http').createServer(server),
    fs = require('fs'),
    io = require('socket.io')(http),
    conexions = 0

function server(req, res) {
  fs.readFile('index.html', (err, data) => {
    if(err) {
      res.writeHead(500, {'Content-Type': 'text/html'})
      return res.end('<h1>Error Interno del Servidor</h1>')
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/html'})
      return res.end(data, 'utf-8')
    }
  })
}

http.listen(3001, 'localhost')

console.log('Server running at http://localhost:3001/')

io.on('connection', (socket) => {
  socket.emit('hello', {message: 'Hola mundo con Socket.IO'})

  socket.on('otro evento que me invente', (data) => {
    console.log(data)
  })
  
})
