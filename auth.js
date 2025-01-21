const config = require('./config.json');

module.exports = function authenticate(req, res, next) {
  const key = req.query.key;
  if (key === config.key) {
    next();
  } else {
    res.status(401).send('Chave inválida');
  }
};