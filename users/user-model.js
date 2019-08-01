const db = require("../database/dbConfig.js");

module.exports = {
  add,
  findBy,
  findById,
  find
}

async function add(user) {
  return db("users")
  .insert(user)
  
}
function findBy (filter){
  return db("users").where(filter);
}
function findById ({id}){
  return db("users")
  .where({ id })
  .select("users.username", "users.id");
}
function find () {
  return db("users");
}
