const db = require("../database/dbConfig.js");

module.exports = {
  find,
  add, 
  findBy
}

function find (){
  return db("movies");
}

function add (movie) {
  return db("movies").insert(movie);
}

function findBy (movie_title) {
  return db("movies")
  .where({movie_title: movie_title});
}