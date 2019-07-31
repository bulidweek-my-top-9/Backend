const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./user-model.js');
const TopMusic = require('./music-fav-model.js');
const { authenticate } = require('../auth/authenticate');

const router = express.Router();

router.post("/register", (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 11);
  user.password = hash;

  Users.add(user)
  .then(saved => {
    res.status(201).json({id: saved});
  })
  .catch(error => {
    res.status(500).json({error});
  })
})
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username})
  .first()
  .then(user => {
    if(user && bcrypt.compareSync(password, user.password)){
      const token = makeToken(user);
      res.status(200).json({token: token, user});
    } else {
      res.status(401).json({message: error.message})
    }
  })
  .catch(error => {
    res.status(500).json({error: error.message});
  })
})
router.get("/:id", authenticate, (req, res) => {
  let { id } = req.params;

  Users.findById({id})
  .first()
  .then(user => {
    TopMusic.findForUser({id})
    .then(top_music => {
      res.status(200).json({user, top_music})
    })
  })
  .catch(error => {
    res.status(400).json({error: error.message});
  })
})
// router.get("/", (req, res) => {
//   Users.find()
//   .then(users => {
//     res.status(200).json(users);
//   })
//   .catch(error => {
//     res.status(400).json(error);
//   })
// })


function makeToken(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username,
  };

  const jwtOptions = {
    expiresIn: '1d'
  };
  
  const jwtSecret = process.env.TOKEN_SECRET;

  return jwt.sign(jwtPayload, jwtSecret, jwtOptions)
};

module.exports = router;