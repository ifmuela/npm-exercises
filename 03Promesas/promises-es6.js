'use strict'

var fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-promises-es6.txt',
    promise = new Promise((resolve, reject) => {
      fs.access(file, fs.constants.R_OK | fs.constants.W_OK, (err) => {
        return (err) ? reject(new Error('El archivo no existe')) : resolve(true)
      })
    })

promise
      .then((resolved) => {
        console.log('El archivo existe')
        return new Promise((resolve, reject) => {
          fs.readFile(file, (err, data) => {
            return (err) ? reject(new Error('El archivo no se pudo leer')) : resolve(data)
          })
        })
      })
      .then((resolved) => {
        console.log('El archivo se a leido')
        return new Promise((resolve, reject) => {
          fs.writeFile(newFile, resolved, (err) => {
            return (err) ? reject(new Error('El archivo no se pudo copiar')) : resolve('El archivo se ha copiado con éxito')
          })
        })
      })
      .then((resolve) => { console.log('El archivo se copio correctamente') })
      .catch((err) => { return console.log(err.message) })
