const { flexMessageData } = require('../../models/sendFlexModels.js');
const line = require('@line/bot-sdk');
const config = {
  channelAccessToken: 'vqiiCUBQCIZS0AJwgAunwn47nyFlDemUcsx9fr7SPXIQmXIlbg17N5hm0z+zo1Kcgges2TvHcKRoDuKBFiF0rAHuqE7TBQNYFlk1Q+Mkq2UyymeyWA249Abektv8lnES71cNhVO1LdOQiqsX/kx5ywdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'ca2d11dc313463c0420dce1998398dfa',
};

const client = new line.Client(config);
const fs = require('fs');

const getData = require('../../models/restaurantModel.js');
// classifier for using sendFLexMessage or endGame

// Reply Flex Message Before Start Game
const sendFlexMessage = async (req, res) => {
  const { events } = req.body;
  console.log(events);
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
  const eventsEndOnDemand = req.body;
  const events = getData;
  const eventsUser = await events.getGameState();
  const eventsRestaurant = await events.getRestaurantData();
  const randomNum1 = Math.floor(Math.random() * 3);
  const randomNum2 = Math.floor(Math.random() * 2); 
  console.log(randomNum1);                                                                                    
  const event = eventsUser[randomNum1];
  console.log(event.totalPoints);
  if (event.type === 'endGame' || eventsEndOnDemand.message.text === 'จบเกม') {
    if (JSON.stringify(event.totalPoints) === JSON.stringify(eventsRestaurant[randomNum1].choice) || eventsEndOnDemand.message.text === 'จบเกม') {
      // Fix Restaurant template
      flexMessageData['restaurantflex'].hero.altContent.url = eventsRestaurant[randomNum1].data[randomNum2].videolink;
      flexMessageData['restaurantflex'].hero.url = eventsRestaurant[randomNum1].data[randomNum2].videolink;
      flexMessageData['restaurantflex'].hero.previewUrl = eventsRestaurant[randomNum1].data[randomNum2].photolink;
      flexMessageData['restaurantflex'].hero.action.uri = eventsRestaurant[randomNum1].data[randomNum2].videolink;
      flexMessageData['restaurantflex'].body.contents[0].text = eventsRestaurant[randomNum1].data[randomNum2].placetitle;
      flexMessageData['restaurantflex'].body.contents[1].contents[1].text = eventsRestaurant[randomNum1].data[randomNum2].rating;
      flexMessageData['restaurantflex'].body.contents[2].contents[0].contents[1].text = eventsRestaurant[randomNum1].data[randomNum2].classification;
      flexMessageData['restaurantflex'].body.contents[2].contents[1].contents[1].text = eventsRestaurant[randomNum1].data[randomNum2].opentime;
      // console.log(eventsRestaurant[randomNum].data.wongnai);
      // console.log(flexMessageData['restaurantflex'].footer.contents[0].contents.action.uri);

      // flexMessageData['restaurantflex'].footer.contents[0].contents.action.uri = eventsRestaurant[randomNum].data.wongnai;
      // console.log(flexMessageData['restaurantflex'].footer.contents[0].contents.action.uri);
      // flexMessageData['restaurantflex'].footer.contents[1].action.uri = eventsRestaurant[randomNum].data.maplink;

      // Construct the Flex message object using the retrieved data
      const message = {
        type: 'flex',
        altText: 'This is a Flex Message',
        contents: flexMessageData['restaurantflex'],
      };
      // const message = {
      //   type: 'text',
      //   text: 'สุดยอดเลย คุณชนะแล้ว',
      // };

      groupId = event.groupId;
      console.log(groupId);
      // Send the Flex message to the group
      await client.pushMessage(groupId, message);
    } else{
      // Construct the Flex message object using the retrieved data
      const message = {
        type: 'flex',
        altText: 'This is a Flex Message',
        contents: flexMessageData['restaurantflex'],
      };
      userId = event.ownerid;
      // Send the Flex message to the user
      await client.pushMessage(userId, message);
    }
  }
  res.sendStatus(200);
};


module.exports = {
  sendFlexMessage,
  endGame
};
