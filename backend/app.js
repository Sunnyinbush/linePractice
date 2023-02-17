const express = require('express');
const line = require('@line/bot-sdk');
const config = {
  channelAccessToken: 'vqiiCUBQCIZS0AJwgAunwn47nyFlDemUcsx9fr7SPXIQmXIlbg17N5hm0z+zo1Kcgges2TvHcKRoDuKBFiF0rAHuqE7TBQNYFlk1Q+Mkq2UyymeyWA249Abektv8lnES71cNhVO1LdOQiqsX/kx5ywdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'ca2d11dc313463c0420dce1998398dfa',
};
const app = express();
const client = new line.Client(config);
const port = process.env.PORT || 4000;

app.post('/webhook', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((error) => {
      console.error(error);
      res.status(500).end();
    });
});

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text,
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})