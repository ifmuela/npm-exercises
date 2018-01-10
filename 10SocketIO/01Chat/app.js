'use strict'

var express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3001,
    publicDir = express.static(`${__dirname}/public`)

app
  .use(publicDir)
  .get('/', (req, res) => {
    res.sendFile(`${publicDir}/index.html`)
  })

http.listen(port, () => {
  console.log('Iniciando Express y Socket.IO en puerto localhost:%d', port);
})

io.on('connection', (socket) => {
  socket.broadcast.emit('new user', {message: 'Ha entrado un nuevo usuario al chat'})

  socket.on('new message', (message) => {
    io.emit('user says', message)
  })

  socket.on('disconnet', () => {
    console.log('Ha salido un usuario del chat')
    socket.broadcast.emit('bye user', {message: 'Ha salido un nuevo usuario al chat'})
  })
})
