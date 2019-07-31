const db = require("../database/dbConfig.js");

module.exports = {
  findForUser, 
  add
}

function findForUser({id}) {
  //let id = {id};
  return db("favoriteMusicians")
  .innerJoin("musicians", "favoriteMusicians.artist_id", "musicians.id")
  .where({ user_id: id})
  .select("musicians.artist_name", "user_id")
}
function add(artist) {
  console.log(artist);
  return db("favoriteMusicians")
  .insert(artist)
}