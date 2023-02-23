const {flexMessageData} = require('../../models/sendFlexModels.js');
const line = require('@line/bot-sdk');
const config = {
  channelAccessToken: 'vqiiCUBQCIZS0AJwgAunwn47nyFlDemUcsx9fr7SPXIQmXIlbg17N5hm0z+zo1Kcgges2TvHcKRoDuKBFiF0rAHuqE7TBQNYFlk1Q+Mkq2UyymeyWA249Abektv8lnES71cNhVO1LdOQiqsX/kx5ywdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'ca2d11dc313463c0420dce1998398dfa',
};

const client = new line.Client(config);
console.log(flexMessageData);
const sendFlexMessage = async (req, res) => {
  const { events } = req.body;
  events.forEach(async (event) => {
    if (event.type === 'message' && event.message.type === 'text') {
      console.log(event);
      const { groupId } = event.source;
      // Construct the Flex message object using the retrieved data
      const message = {
        type: 'flex',
        altText: 'This is a Flex Message',
        contents: flexMessageData,
      };

      // Send the Flex message to the user
      return client.pushMessage(groupId, message);
    }
  });

  res.sendStatus(200);
};


module.exports = {
  sendFlexMessage,
};
