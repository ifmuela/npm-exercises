'use strict'

var conn = require('./movie-connection'),
    MovieModel = () => {}

MovieModel.getAll = (callBack) => {
  conn
    .find()
    .exec((err, docs) => {
      if(err) throw err
      callBack(docs)
    })
}
MovieModel.getOne = (id, callBack) => {
  conn
    .findOne({movie_id: id})
    .exec((err, docs) => {
      if(err) throw err
      callBack(docs)
    })
}
MovieModel.insert = (data, callBack) => {
  conn.create(data, (err) => {
    if(err) throw err
    callBack()
  })
}
MovieModel.update = (data, callBack) => {
  conn.findOneAndUpdate(
    {movie_id: data.movie_id},
    {
      title: data.title,
      release_year: data.release_year,
      rating: data.rating,
      image: data.image
    },
    (err) => {
    if(err) throw err
    callBack()
  })
}
MovieModel.delete = (id, callBack) => {
  conn.remove({movie_id: id}, (err) => {
    if(err) throw err
    callBack()
  })
}


module.exports = MovieModel
