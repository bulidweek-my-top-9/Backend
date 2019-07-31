
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('musicians').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('musicians').insert([
        {id: 2, artist_name: 'Aerosmith'},
        {id: 1, artist_name: 'AC/DC'},
        {id: 3, artist_name: 'Aesop Rock'},
        {id: 4, artist_name: 'America'},
        {id: 5, artist_name: 'Animal Collective'},
        {id: 6, artist_name: 'The Beatles'},
        {id: 7, artist_name: 'Beck'},
        {id: 8, artist_name: 'Chance the Rapper'},
        {id: 9, artist_name: 'Childish Gambino'},
        {id: 10, artist_name: 'Clarence Clarity'},
        {id: 11, artist_name: 'Daft Punk'},
        {id: 12, artist_name: 'De La Soul'},
        {id: 13, artist_name: 'Death Grips'},
        {id: 14, artist_name: 'Earl Sweatshirt'},
        {id: 15, artist_name: 'Fiona Apple'},
        {id: 16, artist_name: 'Fleet Foxes'},
        {id: 17, artist_name: 'Flying Lotus'},
        {id: 18, artist_name: 'Gorillaz'},
        {id: 19, artist_name: 'Harry Nilsson'},
        {id: 20, artist_name: 'Hot Chip'},
        {id: 21, artist_name: 'Iceage'},
        {id: 22, artist_name: 'Iglooghost'},
        {id: 23, artist_name: 'Jeffrey Lewis'},
        {id: 24, artist_name: 'Killer Mike'},
        {id: 25, artist_name: 'King Missile'},
        {id: 26, artist_name: 'Lou Reed'},
        {id: 27, artist_name: 'MGMT'},
        {id: 28, artist_name: 'The Mountain Goats'},
        {id: 29, artist_name: 'Nas'},
        {id: 30, artist_name: 'of Montreal'},
        {id: 31, artist_name: 'Patsy Cline'},
        {id: 32, artist_name: 'Queen'},
        {id: 33, artist_name: 'Radiohead'},
        {id: 34, artist_name: 'Talking Heads'}
      ]);
    });
};
