const express = require('express');
const jwt = require('jsonwebtoken');
const Musicians = require('./music-model.js');
const TopMusic = require('../users/music-fav-model.js');
const { authenticate } = require('../auth/authenticate');

const router = express.Router();

router.get("/", (req, res) => {
  Musicians.find()
  .then(musicians => {
    res.status(200).json(musicians);
  })
  .catch(error => {
    res.status(400).json(error);
  })
})
router.post("/:id", authenticate, (req, res) => {
  let { id } = req.params;
  let { artist_name } = req.body;
  //console.log("name", artist_name)

  Musicians.findBy(artist_name)
  .then(found => {
    //console.log("found", found)
    if(found && found.length){
      //add to fav musicians by id of what is found
      
      //console.log("found", found[0].id);
      let fav = {
        artist_id: found[0].id,
        user_id: id
      };
      //console.log("newArtist", fav);
      TopMusic.add(fav)
      .then(() => {
        //console.log("Added:", added);
        res.status(200).json(`artist in database, ${artist_name} has been added to your top 9`)
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
    }
    else{
      let artist = req.body;
      Musicians.add(artist)
      .then(() => {
        res.status(200).json(`artist not in database, added ${artist_name} to database and your top 9`)
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
      
    }
  })
  .catch(error => {
    res.status(400).json({error: error.message});
  })

  //TopMusic.add(id)
})

module.exports = router;