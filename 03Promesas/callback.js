'use strict'

var fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-callback.txt'

fs.access(file, fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if(err){
    console.log('El archivo no existe')
  }else {
    console.log('El archivo existe')
    fs.readFile(file, (err, data) => {
      if (err) throw err
      else{
        console.log('El archivo se lee exitosamente')
        fs.writeFile(newFile, data, (err) => {
          if (err) throw err;
          console.log('El archivo se a copiado con éxito!')
        })
      }
    })
  }
})
