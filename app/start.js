var express = require('express');
var setupMiddleware = require('../middleware');
var middleware = setupMiddleware.middleware;
var APP_CONF = require('../app.json');

// routes
var indexRoute = require('./routes/index');
var websitesRoute = require('./routes/websites');
var badRequestRoute = require('./routes/badRequest');

var app = express();
app.disable('x-powered-by');
setupMiddleware(app);

var port = APP_CONF.env.PORT;

app.use('/', indexRoute.getRouter());
app.use('/websites', websitesRoute.getRouter());
app.use('*', badRequestRoute.getRouter());

var server = app.listen(port, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🌎  Listening on port %s.', port);
  }
});

function gracefullyShutdown(signal) {
  return function() {
    logger.error('[PROCESS ' + signal + '][PID]' + process.pid + '[MEMORY]' + process.memoryUsage().heapUsed);
    server.close(function() {
      console.log('Closed out remaining connections.');
      process.exit(0);
    });
    setTimeout(function() {
      console.error('Could not close connections in time, forcefully shutting down');
      logger.error('[PROCESS ' + signal + ' FORCE][PID]' + process.pid + '[MEMORY]' + process.memoryUsage().heapUsed);
      process.exit(1);
    }, 2.5 * 1000);
  };
}

process.on('SIGINT', gracefullyShutdown('SIGINT'));
process.on('SIGTERM', gracefullyShutdown('SIGTERM'));

process.on('uncaughtException', function(err) {
  setImmediate(function() {
    process.exit(1);
  });
});
