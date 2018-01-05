'use strict'

var mongoose = require('mongoose'),
    config = require('./db-config'),
    Schema = mongoose.Schema,
    MoviesSchema = new Schema({
      movie_id: "string",
      title: "string",
      release_year: "string",
      rating: "string",
      image: "string"
    },
    {
      collection: "movie"
    }),
    MovieModel = mongoose.model("Movie", MoviesSchema)

mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.db}`)

module.exports = MovieModel
