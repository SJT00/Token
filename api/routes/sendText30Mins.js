var express = require('express');
var router = express.Router();

var accountSid = 'AC991278e29f093b69e7ec9b40093afe94';
var authToken = 'a5434e4ae2100e849183cbe2a8c11d44';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

router.get('/', function(req, res, next) {
    res.send('Send text request received.');
    let buddies = ['+12899686783', '+12895012662', '+19057338786'];

    buddies.map(buddy => 
        client.messages.create({
            body: 'Message from Token: Saad may still be in a high-risk area.',
            to: buddy,
            from: '+16476938696'
        })
        .then((message) => console.log(message.sid))
    );
});

module.exports = router;