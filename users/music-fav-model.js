const db = require("../database/dbConfig.js");

module.exports = {
  findForUser, 
  add,
  edit, 
  remove
}

function findForUser({id}) {
  //let id = {id};
  return db("favoriteMusicians")
  .innerJoin("musicians", "favoriteMusicians.artist_id", "musicians.id")
  .where({ user_id: id})
  .select("musicians.artist_name", "favoriteMusicians.id", "user_id")
}
function add(artist) {
  console.log(artist);
  return db("favoriteMusicians")
  .insert(artist)
}
function edit (id, artist) {
  console.log("id", id);
  console.log("artist", artist);
  return db("favoriteMusicians")
  .where({id})
  .update(artist)
}

function remove (id) {
return db("favoriteMusicians")
.where({id: id})
.del()
}