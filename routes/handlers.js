var express = require('express');
var router = express.Router();
var exports = module.exports = {};
// require line bot dep
const line = require('@line/bot-sdk');

const config = {
  channelAccessToken: process.env.LINE_BOT_CHANNEL_TOKEN,
  channelSecret: process.env.LINE_BOT_CHANNEL_SECRET,
};

const client = new line.Client(config);

router.get('/', function(req, res, next) {
  res.send('test');
});


router.post('/sending', function (req, res) {
	var lineId = 'U34f149724f23c004673a3e11409ed3c0';
	if (req.body.events) {
		sendMessageToQuestetra(req.body.events);
		return;
	}

	sendConfirmTemplate(req.body);
});


function sendConfirmTemplate(data) {
	// From Questetra to LINE - separate function for calling on the index
	console.log(data.message);
	console.log(data.email);
	var lineId = 'U34f149724f23c004673a3e11409ed3c0';
  const message = {
    "type": "template",
    "altText": "this is a confirm template",
    "template": {
        "type": "confirm",
        "text": data.message,
        "actions": [
            {
              "type": "message",
              "label": "Yes",
              "text": "yes"
            },
            {
              "type": "message",
              "label": "No",
              "text": "no"
            }
        ]
    }
  }
  
  client.pushMessage(lineId, message)
    .then(() => {
      console.log('message has ben sent');

    })
    .catch((err) => {
      // console.log();
    });

  res.send(true);

}

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: 'text', text: event.message.text };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}


function sendMessageToQuestetra(events) {
	// From LINE to Questetra
	console.log(events.message);
	

}

module.exports = router;