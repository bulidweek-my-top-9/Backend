exports.up = function(knex) {
  return knex.schema
  .createTable("favoriteMusicians", tbl => {
  tbl.increments();
  tbl.integer('artist_id')
  .unsigned()
  .notNullable()
  .references('id')
  .inTable('musicians')
  .onUpdate('CASCADE');
  tbl.integer('user_id')
  .unsigned()
  .notNullable()
  .references('id')
  .inTable('users')
  .onUpdate('CASCADE');  
});
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("favoriteMusicians");
};
