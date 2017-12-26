'use strict'

var express = require('express'),
    router = express.Router()

function error404(req, res, next) {
  let error = new Error(),
      locals = {
        title: 'Error 404',
        description: 'Recurso No Encontrado',
        error: error
      }

  error.status = 404
  res.render('error', locals)

  next()
}

router
  .get('/', (req, res) => {
    res.end('<h1>Terminamos la configuracion de nuestra primer app en express</h1>')
  })
  .get('/jade', (req, res, next) => {
    let locals = {
      title: 'Jade',
      link: 'http://jade-lang.com/',
      description: 'Como material se ha utilizado para fabricar utensilios y adornos desde hace más de 5000 años.1​ A lo largo del tiempo se desarrolló un verdadero culto del jade. Los objetos de jade tenían (y tienen) fama de amuletos que atraen la suerte. En sus orígenes el jade era usado por ser duro y resistente. Por ello se utilizaba también para elaborar armas, herramientas y máscaras, como las conocidas en América como «máscara de jade». Casi desde el principio se intentaron vender otros minerales con la denominación de jade, lo cual se logró con el mineral llamado serpentina ("jade de China", "jade nuevo"). La serpentina no sólo tiene el mismo aspecto que el jade, sino que aparece en los mismos yacimientos que la jadeíta y la nefrita. Es un material más blando y menos resistente que el jade. Como se trabaja mucho mejor que el jade se ha establecido como sustituto preferido en los últimos años.'
    }

    res.render('index', locals)
  })
  .use(error404)

module.exports = router
