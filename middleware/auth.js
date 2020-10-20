// middleware is function that has access to req/res cycle and object. Any time we hit an endpoint, we can fire the middleware
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  // x-auth-token is basically the key to the token inside the header
  const token = req.header('x-auth-token');

  // Check if there is a token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied.' });
  }

  //
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
