module.exports = {
  matches,
};

// implementation details
function matches(req, res, next) {

  let id = req.params.user_id;
  console.log("id", id)
  if(parseInt(id) === req.decoded.subject){
    next();
  } else {
    res.status(403).json("anvalid user id")
  }
}


