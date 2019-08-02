const db = require("../database/dbConfig.js");

module.exports = {
  findForUser, 
  add,
  edit, 
  remove
}

function findForUser({id}) {
  //let id = {id};
  return db("topAnimals")
  .innerJoin("animals", "topAnimals.animal_id", "animals.id")
  .where({ user_id: id})
  .select("animals.animal_name", "topAnimals.id", "user_id")
}
function add(animal) {
  return db("topAnimals")
  .insert(animal)
}
function edit (user_id, id, animal_id) {

  return db("topAnimals")
  .where({user_id: user_id, id: id})
  .update({animal_id: animal_id})
}

function remove (user_id, id) {
  return db("topAnimals")
  .where({user_id: user_id, id: id})
  .del()
}