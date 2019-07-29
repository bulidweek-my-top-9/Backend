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
    res.status(201).json({saved: saved.message});
  })
  .catch(error => {
    res.status(500).json({error});
  })
})

module.exports = router;