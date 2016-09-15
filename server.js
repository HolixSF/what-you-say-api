var express = require('express');
var app = express();
var api = require('./api');
var config = require('./api/config/api');
require('./api/middleware')(app);

app.get('/', function(req, res) {
  res.redirect('/api');
});

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.status(500).json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.status(500).json({
    message: err.message,
    error: err
  });
});

app.listen(config.port, function() {
	console.log('listening on http://localhost:' + config.port)
});
