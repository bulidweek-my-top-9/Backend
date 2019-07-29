const jwt = require('jsonwebtoken');

const jwtKey =
  process.env.JWT_SECRET ||
  'make sure to move this to a .env file soon ok';

// quickly see what this file exports
module.exports = {
  authenticate,
};

// implementation details
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  //get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        return res.status(401).json(err);
      }
      else {
        req.decoded = decoded;

        next();
      }
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}