
exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments(10, 1);

    users
      .string("username", 255)
      .notNullable()
      .unique();
    users.string("password", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
