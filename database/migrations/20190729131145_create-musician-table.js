
exports.up = function(knex) {
  return knex.schema.createTable("musicians", musicians =>{
    musicians.increments(40, 1);

    musicians
      .string("artist_name", 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("musicians");
};
