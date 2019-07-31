const db = require("../database/dbConfig.js");

module.exports = {
  find,
  add, 
  findBy
}

function find (){
  return db("musicians");
}

function add (artist) {
  return db("musicians").insert(artist);
}

function findBy (artist_name) {
  return db("musicians")
  .where({artist_name: artist_name});
}