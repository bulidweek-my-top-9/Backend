const express = require('express');
const Movies = require('./movies-model.js');
const TopMovies = require('./top-movies-model.js');
const { authenticate } = require('../auth/authenticate');
const { matches } = require('../auth/check-user.js');

const router = express.Router();

router.get("/", (req, res) => {
  Movies.find()
  .then(movies => {
    res.status(200).json(movies);
  })
  .catch(error => {
    res.status(400).json(error);
  })
})
router.post("/:user_id", authenticate, matches, check9, (req, res) => {
  let { user_id } = req.params;
  let { movie_title } = req.body;
  //console.log("name", movie_title)

  Movies.findBy(movie_title)
  .then(found => {
    //console.log("found", found)
    if(found && found.length){
      let fav = {
        movie_id: found[0].id,
        user_id: user_id
      };
  

      TopMovies.add(fav)
      .then(() => {
        //console.log("Added:", added);
        res.status(200).json(`movie in database, ${movie_title} has been added to your top 9`)
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
    } else {
      let movie = req.body;
      Movies.add(movie)
      .then(() => {
        
        Movies.findBy(movie_title)
        .then(found => {
            let fav = {
              movie_id: found[0].id,
              user_id: user_id
            };
      
        TopMovies.add(fav)
      .then(() => {
        //console.log("Added:", added);
        res.status(200).json(`movie not in database, added ${movie_title} to database and your top 9`)
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

router.put("/:user_id/:id", authenticate, matches, (req, res) => {
  //set the id, user id vars from the parameters. movie name is sent in the body
  let id = req.params.id;
  let user_id = req.params.user_id;
  //let user_id = req.params.user_id;
  let { movie_title } = req.body;
  //looks for the name sent in the body, sees if it's in the databse
  Movies.findBy(movie_title)
  .then(found => {
    if(found && found.length){  //if it already exists in the database, edit the top9 only
      let movie_id = found[0].id;//this gets set to the id that was found on the movies table 
        //user_id //the users id stays the same
 
      TopMovies.edit(user_id, id, movie_id) //this recieves the primary key id of the row you are altering, and the object of new forign keys
      .then(edited => {
        if(edited === 1){
          res.status(200).json(`movie in movies database, entry has been updated to ${found[0].movie_title} in your top 9`)
        } else {
          res.status(400).json("invalid item id")
        }
        
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
    } else {
      let movie = req.body;
      Movies.add(movie)
      .then(() => {
        
        Movies.findBy(movie_title)
        .then(found => {
          let movie_id = found[0].id;
            //console.log("newmovie", fav);
      TopMovies.edit(user_id, id, movie_id)
      .then(edited => {
        //console.log("Added:", added);
        if(edited === 1 ){
          res.status(200).json(`movie not in database, entry has been added to movies database and updated to ${found[0].movie_title}  your top 9`)
        } else {
          res.status(400).json("invalid item id")
        }
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

router.delete("/:user_id/:id", authenticate, matches, (req, res) => {
   const id = req.params.id;
   const user_id = req.params.user_id;

   TopMovies.remove(user_id, id)
   .then(deleted => {
     res.status(200).json(deleted)
   })
   .catch(error => {
    res.status(400).json({error: error.message});
  })
})


function check9 (req, res, next){
  const id = req.params.user_id;
  TopMovies.findForUser({id})
  .then(found => {
    if(found.length < 9){
      next()
    } else {
      res.status(400).json("user already has maximum amount of 9 items selected")
    }
  })
  .catch(error => {
    res.status(400).json({error: error.message});
  })
}

module.exports = router;