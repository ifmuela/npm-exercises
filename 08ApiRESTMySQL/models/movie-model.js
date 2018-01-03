'use strict'

var conn = require('./movie-connection'),
    MovieModel = () => {}

MovieModel.getAll = (callBack) => {
  conn.query('SELECT * FROM movie', callBack)
}
MovieModel.getOne = (id, callBack) => {
  conn.query('SELECT * FROM movie WHERE movie_id = ?', id, callBack)
}
MovieModel.insert = (data, callBack) => {
  conn.query('INSERT INTO movie SET ?', data, callBack)
}
MovieModel.update = (data, callBack) => {
  conn.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], callBack)
}
MovieModel.delete = (id, callBack) => {
  conn.query('DELETE FROM movie WHERE movie_id = ?', id, callBack)
}


module.exports = MovieModel
