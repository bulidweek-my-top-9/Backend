bcrypt = require("bcryptjs");
const password = bcrypt.hashSync("pass", 10);
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('musicians').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user1', password: password},
        {username: 'user2', password: password},
        {username: 'user3', password: password}
      ]);
    // });
};