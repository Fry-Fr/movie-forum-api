const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secret');

const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    next({ status:401, message: 'Not Authorized' })
  }

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return next({ status: 401, message: 'Authorization error' })
    }
    req.decodedToken = decodedToken;
    next();
  });
};

module.exports = {
  restricted
}