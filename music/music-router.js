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
router.post("/:id", (req, res) => {
  let { id } = id;
  Musicians.findById(id)
  .then(found => {
    if(found){
      
    }
    else{

    }
  })
  //TopMusic.add(id)
})

module.exports = router;