
exports.up = function(knex) {
  return knex.schema
  .createTable("movies", movies =>{
    movies.increments();
    movies
      .string("movie_title", 255)
      .notNullable()
      .unique();
  })
  .createTable("topMovies", tbl => {
    tbl.increments();
    tbl.integer('movie_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('movies');
    tbl.integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users');  
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("topMovies")
  .dropTableIfExists("movies");
};
