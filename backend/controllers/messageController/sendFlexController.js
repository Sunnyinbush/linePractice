const { flexMessageData } = require('../../models/sendFlexModels.js');
const line = require('@line/bot-sdk');
const config = {
  channelAccessToken: 'vqiiCUBQCIZS0AJwgAunwn47nyFlDemUcsx9fr7SPXIQmXIlbg17N5hm0z+zo1Kcgges2TvHcKRoDuKBFiF0rAHuqE7TBQNYFlk1Q+Mkq2UyymeyWA249Abektv8lnES71cNhVO1LdOQiqsX/kx5ywdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'ca2d11dc313463c0420dce1998398dfa',
};
const {restaurantName} = require('../../models/sendFlexModels.js');
const client = new line.Client(config);
const fs = require('fs');
const usersChoice = require('../../models/userModels.js');

// Reply Flex Message Before Start Game
const sendFlexMessage = async (req, res) => {
  const { events } = req.body;
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    if (event.type === 'message' && event.message.type === 'text' && (event.message.text === 'กินไรดี' || event.message.text === 'กินอะไรดี')) {
      if (event.source.type === 'group') {
        // Construct the Flex message object using the retrieved data
        const message = {
          type: 'flex',
          altText: 'This is a Flex Message',
          contents: flexMessageData['groupflex'],
        };
        groupId = event.source.groupId;
        // Send the Flex message to the group
        await client.replyMessage(event.replyToken, message);
      } else if (event.source.type === 'user') {
        // Construct the Flex message object using the retrieved data
        const message = {
          type: 'flex',
          altText: 'This is a Flex Message',
          contents: flexMessageData['userflex'],
        };
        userId = event.source.userId;
        // Send the Flex message to the user
        await client.replyMessage(event.replyToken, message);
      }
    }
  }
  res.sendStatus(200);
};

// Push Flex Message for End Game
const endGame = async (req, res) => {
  const { events } = usersChoice;                                                                                        
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    if (event.type === 'endGame') {
      if (event.source.type === 'group') {
        // Construct the Flex message object using the retrieved data
        const message = {
          type: 'flex',
          altText: 'This is a Flex Message',
          contents: flexMessageData['restaurantflex'],
        };
        groupId = event.source.groupId;
        // Send the Flex message to the group
        await client.pushMessage(groupId, message);
      } else if (event.source.type === 'user') {
        // Construct the Flex message object using the retrieved data
        const message = {
          type: 'flex',
          altText: 'This is a Flex Message',
          contents: flexMessageData['restaurantflex'],
        };
        userId = event.source.userId;
        // Send the Flex message to the user
        await client.pushMessage(userId, message);
      }
    }
  }
  res.sendStatus(200);
};


module.exports = {
  sendFlexMessage,
};
