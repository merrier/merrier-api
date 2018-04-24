var ensureSecure = require('./ensure-secure');
var hsts = require('./hsts');

var middleware = {
  ensureSecure: ensureSecure,
  hsts: hsts,
};

function setupMiddleware(app) {
  app.use(ensureSecure());
}

module.exports = setupMiddleware;
module.exports.middleware = middleware;