const db = require("../app/dbConfig.js.js");

module.exports = {
  add,
  findBy,
  //find
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return id;
}
function findBy (filter){
  return db("users").where(filter);
}

