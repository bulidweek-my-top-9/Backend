const db = require("../database/dbConfig.js");

module.exports = {
  findForUser, 
  add,
  edit, 
  remove
}

function findForUser({id}) {
  //let id = {id};
  return db("topMovies")
  .innerJoin("movies", "topMovies.movie_id", "movies.id")
  .where({ user_id: id})
  .select("movies.movie_title", "topMovies.id", "user_id")
}
function add(movie) {
  return db("topMovies")
  .insert(movie)
}
function edit (id, movie_id) {

  return db("topMovies")
  .where({id})
  .update({movie_id})
}

function remove (id) {
return db("topMovies")
.where({id: id})
.del()
}