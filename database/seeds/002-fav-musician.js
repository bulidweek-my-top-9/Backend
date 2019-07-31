
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favoriteMusicians').del()
    .then(function () {
      // Inserts seed entries
      return knex('favoriteMusicians').insert([
        {id: 1, user_id: '1', artist_id: '1'},
        {id: 2, user_id: '1', artist_id: '11'},
        {id: 3, user_id: '1', artist_id: '10'},
        {id: 4, user_id: '1', artist_id: '21'},
        {id: 5, user_id: '1', artist_id: '2'},
        {id: 6, user_id: '1', artist_id: '3'},
        {id: 7, user_id: '1', artist_id: '4'},
        {id: 8, user_id: '1', artist_id: '5'},
        {id: 9, user_id: '1', artist_id: '6'}
      ]);
    });
};
