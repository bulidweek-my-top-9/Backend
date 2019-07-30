const express = require('express');
const jwt = require('jsonwebtoken');
const Musicians = require('./music-model.js');
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

module.exports = router;