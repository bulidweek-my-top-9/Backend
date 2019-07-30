const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./user-model.js');
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
      res.status(200).json({token: token});
    } else {
      res.status(401).json({message: error.message})
    }
  })
  .catch(error => {
    res.status(500).json({error: error.message});
  })
})

function makeToken(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username,
  };

  const jwtOptions = {
    expiresIn: '1d'
  };
  
  const jwtSecret = 'add a .env file to root of project with the JWT_SECRET variable';

  return jwt.sign(jwtPayload, jwtSecret, jwtOptions)
};

module.exports = router;