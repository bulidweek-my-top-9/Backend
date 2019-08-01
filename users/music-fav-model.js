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
function edit (user_id, id, artist_id) {
  // console.log("id", id);
  // console.log("artist", artist);
  return db("favoriteMusicians")
  .where({user_id: user_id, id: id})
  .update({artist_id})
}

function remove (user_id, id) {
return db("favoriteMusicians")
.where({user_id: user_id, id: id})
.del()
}