
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('musicians').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('musicians').insert([
        // {artist_name: 'Aerosmith'},
        {artist_name: 'AC/DC'},
        {artist_name: 'Aesop Rock'},
        {artist_name: 'America'},
        {artist_name: 'Animal Collective'},
        {artist_name: 'The Beatles'},
        {artist_name: 'Beck'},
        {artist_name: 'Chance the Rapper'},
        {artist_name: 'Childish Gambino'},
        {artist_name: 'Clarence Clarity'},
        {artist_name: 'Daft Punk'},
        {artist_name: 'De La Soul'},
        {artist_name: 'Death Grips'},
        {artist_name: 'Earl Sweatshirt'},
        {artist_name: 'Fiona Apple'},
        {artist_name: 'Fleet Foxes'},
        {artist_name: 'Flying Lotus'},
        {artist_name: 'Gorillaz'},
        {artist_name: 'Harry Nilsson'},
        {artist_name: 'Hot Chip'},
        {artist_name: 'Iceage'},
        {artist_name: 'Iglooghost'},
        {artist_name: 'Jeffrey Lewis'},
        {artist_name: 'Killer Mike'},
        {artist_name: 'King Missile'},
        {artist_name: 'Lou Reed'},
        {artist_name: 'MGMT'},
        {artist_name: 'The Mountain Goats'},
        {artist_name: 'Nas'},
        {artist_name: 'of Montreal'},
        {artist_name: 'Patsy Cline'},
        {artist_name: 'Queen'},
        {artist_name: 'Radiohead'},
        {artist_name: 'Talking Heads'}
      ]);
    // });
};
