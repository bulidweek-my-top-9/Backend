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
router.post("/:user_id", authenticate, (req, res) => {
  let { user_id } = req.params;
  let { artist_name } = req.body;
  //console.log("name", artist_name)

  Musicians.findBy(artist_name)
  .then(found => {
    //console.log("found", found)
    if(found && found.length){
      let fav = {
        artist_id: found[0].id,
        user_id: user_id
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
    } else {
      let artist = req.body;
      Musicians.add(artist)
      .then(() => {
        
        Musicians.findBy(artist_name)
        .then(found => {
            let fav = {
              artist_id: found[0].id,
              user_id: user_id
            };
            //console.log("newArtist", fav);
        TopMusic.add(fav)
      .then(() => {
        //console.log("Added:", added);
        res.status(200).json(`artist not in database, added ${artist_name} to database and your top 9`)
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
    })
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
      
    }
  })
  .catch(error => {
    res.status(400).json({error: error.message});
  })

})

router.put("/:id", (req, res) => {
  //set the id, user id vars from the parameters. artist name is sent in the body
  let id = req.params.id;
  //let user_id = req.params.user_id;
  let { artist_name } = req.body;
  //looks for the name sent in the body, sees if it's in the databse
  Musicians.findBy(artist_name)
  .then(found => {
    if(found && found.length){  //if it already exists in the database, edit the top9 only
      let artist_id = found[0].id;//this gets set to the id that was found on the musicians table 
        //user_id //the users id stays the same
 
      TopMusic.edit(id, artist_id) //this recieves the primary key id of the row you are altering, and the object of new forign keys
      .then(() => {
        res.status(200).json(`artist in musicians database, entry has been changed to ${found[0].artist_name} in your top 9`)
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
    } else {
      let artist = req.body;
      Musicians.add(artist)
      .then(() => {
        
        Musicians.findBy(artist_name)
        .then(found => {
          let artist_id = found[0].id;
            //console.log("newArtist", fav);
      TopMusic.edit(id, artist_id)
      .then(() => {
        //console.log("Added:", added);
        res.status(200).json(`artist not in database, entry has been added to musicians database and changed to ${found[0].artist_name}  your top 9`)
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
    })
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
      
    }
  })
  .catch(error => {
    res.status(400).json({error: error.message});
  })
})

router.delete("/:id", (req, res) => {
   const id = req.params.id;

   TopMusic.remove(id)
   .then(deleted => {
     res.status(200).json(deleted)
   })
   .catch(error => {
    res.status(400).json({error: error.message});
  })
})

module.exports = router;