const express = require('express');
const Animals = require('./animals-model.js');
const TopAnimals = require('./top-animals-model.js');
const { authenticate } = require('../auth/authenticate');
const { matches } = require('../auth/check-user.js');

const router = express.Router();

router.get("/", (req, res) => {
  Animals.find()
  .then(animals => {
    res.status(200).json(animals);
  })
  .catch(error => {
    res.status(400).json(error);
  })
})
router.post("/:user_id", authenticate, matches, (req, res) => {
  let { user_id } = req.params;
  let { animal_name } = req.body;
  //console.log("name", movie_title)

  Animals.findBy(animal_name)
  .then(found => {
    //console.log("found", found)
    if(found && found.length){
      let fav = {
        animal_id: found[0].id,
        user_id: user_id
      };
  

      TopAnimals.add(fav)
      .then(() => {
        //console.log("Added:", added);
        res.status(200).json(`animal in database, ${animal_name} has been added to your top 9`)
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
    } else {
      let animal = req.body;
      Animals.add(animal)
      .then(() => {
        
        Animals.findBy(animal_name)
        .then(found => {
            let fav = {
              animal_id: found[0].id,
              user_id: user_id
            };
      
        TopAnimals.add(fav)
      .then(() => {
        //console.log("Added:", added);
        res.status(200).json(`animal not in database, added ${animal_name} to database and your top 9`)
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
  let { animal_name } = req.body;
  //looks for the name sent in the body, sees if it's in the databse
  Animals.findBy(animal_name)
  .then(found => {
    if(found && found.length){  //if it already exists in the database, edit the top9 only
      let animal_id = found[0].id;//this gets set to the id that was found on the movies table 
        //user_id //the users id stays the same
 
      TopAnimals.edit(user_id, id, animal_id) //this recieves the primary key id of the row you are altering, and the object of new forign keys
      .then(edited => {
        if(edited === 1){
          res.status(200).json(`animal in animals database, entry has been updated to ${found[0].animal_name} in your top 9`)
        } else {
          res.status(400).json("invalid item id")
        }
        
      })
      .catch(error => {
        res.status(400).json({error: error.message});
      })
    } else {
      let animal = req.body;
      Animals.add(animal)
      .then(() => {
        
        Animals.findBy(animal_name)
        .then(found => {
          let animal_id = found[0].id;
            //console.log("newmovie", fav);
      TopAnimals.edit(user_id, id, animal_id)
      .then(edited => {
        //console.log("Added:", added);
        if(edited === 1 ){
          res.status(200).json(`animal not in database, entry has been added to animals database and updated to ${found[0].animal_name}  your top 9`)
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

   TopAnimals.remove(user_id, id)
   .then(deleted => {
     res.status(200).json(deleted)
   })
   .catch(error => {
    res.status(400).json({error: error.message});
  })
})

module.exports = router;