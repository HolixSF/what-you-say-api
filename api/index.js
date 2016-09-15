var express = require('express');
var router = express.Router();
var watson = require('./config/watson');
var twilioConfig = require('./config/twilio');
var client = require('twilio')(twilioConfig.sid, twilioConfig.token);


router.get('/', function(req, res, next) {
  res.json({text: 'Welcome to my API'});
});

router.post('/tone', function(req, res, next) {
  watson.toneAnalyzer.tone(req.body, function(err, tone) {
    if (err) {
      res.json(err);
    } else {
      res.json(tone);
    }
  });
});

router.post('/message', function(req, res, next) {
  client.messages.create({ 
    to: req.body.number, 
    from: twilioConfig.num, 
    body: req.body.text, 
  }, function(err, message) { 
    console.log(err, message.sid);
  });
  next();
})

module.exports = router;