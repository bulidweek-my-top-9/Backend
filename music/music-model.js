const db = require("../database/dbConfig.js");

module.exports = {
  find,
  add
}

function find (){
  return db("musicians");
}
function add (artist) {
  return db("musicians").insert(artist);
}