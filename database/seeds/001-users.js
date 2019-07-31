bcrypt = require("bcryptjs");
const password = bcrypt.hashSync("pass", 10);
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('musicians').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('musicians').insert([
        {id: 2, username: 'user1', password: password},
        {id: 1, username: 'user2', password: password},
        {id: 3, username: 'user3', password: password}
      ]);
    // });
};