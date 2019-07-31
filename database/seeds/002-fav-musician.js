
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('favoriteMusicians').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('favoriteMusicians').insert([
        {user_id: '1', artist_id: '1'},
        {user_id: '1', artist_id: '11'},
        {user_id: '1', artist_id: '10'},
        {user_id: '1', artist_id: '21'},
        {user_id: '1', artist_id: '2'},
        {user_id: '1', artist_id: '3'},
        {user_id: '1', artist_id: '4'},
        {user_id: '1', artist_id: '5'},
        {user_id: '1', artist_id: '6'},
        {user_id: '2', artist_id: '19'}
      ]);
    // });
};
