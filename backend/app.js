const express = require('express');
const bodyParser = require('body-parser');
const line = require('@line/bot-sdk');
const config = {
  channelAccessToken: 'vqiiCUBQCIZS0AJwgAunwn47nyFlDemUcsx9fr7SPXIQmXIlbg17N5hm0z+zo1Kcgges2TvHcKRoDuKBFiF0rAHuqE7TBQNYFlk1Q+Mkq2UyymeyWA249Abektv8lnES71cNhVO1LdOQiqsX/kx5ywdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'ca2d11dc313463c0420dce1998398dfa',
};
const app = express();
const client = new line.Client(config);
const port = process.env.PORT || 4000;

function sendFlexMessage(userId) {
  const message = {
    type: 'flex',
    altText: 'This is a Flex Message',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'Hello, Fu!',
          },
        ],
      },
    },
  };

  return client.pushMessage(userId, message);
}

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const { events } = req.body;
  events.forEach(async (event) => {
    if (event.type === 'message' && event.message.type === 'text') {
      const { userId } = event.source;
      await sendFlexMessage(userId);
    }
  });

  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})