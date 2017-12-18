'use strict'

var http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra')

function serverUpload(req, res) {
  if(req.method.toLowerCase() == 'get' && req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`
      <h3>Uploader de archivo en Node.js</h3>
      <form action="/upload" enctype="multipart/form-data" method="POST">
        <div><input type="file" name="upload" required></div>
        <div><input type="submit" name="Subir archivo"></div>
      </form>
    `)
  }

  if(req.method.toLowerCase() == 'post' && req.url == '/upload'){
    let form = new formidable.IncomingForm()

    form
      .parse(req, (err, fields, files) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(`
          <h3>Archivo subido</h3>
          <br>
          <code>${util.inspect({files: files})}</code>
        `)
      })
      .on('progress', (bytesReceived, byteExpected) => {
        let percentCompleted = (bytesReceived / byteExpected) * 100
        console.log(percentCompleted.toFixed(2))
      })
      .on('error', (err) => {
        console.log(err)
      })
      .on('end', function (fields, files) {
        // Ubicación temporal del archivo que se sube
        let tempPath = this.openedFiles[0].path,
        // El nombre del archivo subido
            fileName = this.openedFiles[0].name,
        // Nueva Ubicación
            newLocation = './upload/' + fileName

        fse.copy(tempPath, newLocation, function (err) {
          return (err) ? console.log(err) : console.log('El archivo se subió con éxito :)')
        })
      })

    return
  }
}

http
	.listen(3000, 'localhost')

console.log('Server running at http://localhost:3000/')
