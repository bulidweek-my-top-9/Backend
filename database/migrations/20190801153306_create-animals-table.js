
exports.up = function(knex) {
  return knex.schema
  .createTable("animals", movies =>{
    movies.increments();
    movies
      .string("animal_name", 255)
      .notNullable()
      .unique();
  })
  .createTable("topAnimals", tbl => {
    tbl.increments();
    tbl.integer('animal_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('animals');
    tbl.integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users');  
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("topAnimals")
  .dropTableIfExists("animals");
};
