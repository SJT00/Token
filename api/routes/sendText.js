var express = require('express');
var router = express.Router();

var accountSid = 'AC991278e29f093b69e7ec9b40093afe94';
var authToken = 'a5434e4ae2100e849183cbe2a8c11d44';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

router.get('/', function(req, res, next) {
    res.send('Complete');

    client.messages.create({
        body: 'pls work',
        to: '+12899686783',  // Text this number
        from: '+16476938696' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
});

module.exports = router;