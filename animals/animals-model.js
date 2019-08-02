const db = require("../database/dbConfig.js");

module.exports = {
  find,
  add, 
  findBy
}

function find (){
  return db("animals");
}

function add (animal) {
  return db("animals").insert(animal);
}

function findBy (animal_name) {
  return db("animals")
  .where({animal_name: animal_name});
}