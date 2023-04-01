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
    } else if (event.type === 'join' && event.source.type === 'group'){
      const message = 
        [
          {
            "type": "text",
            "text": "สวัดดี! กินอะไรดีเข้ามาช่วยทุกคนในกลุ่มแล้ว!"
          },
          {
            "type": "template",
            "altText": "this is a image carousel template",
            "template": {
              "type": "image_carousel",
              "columns": [
                {
                  "imageUrl": "https://iili.io/HMQdDFI.jpg",
                  "action": {
                    "type": "message",
                    "text": "กินอะไรดี"
                  }
                },
                {
                  "imageUrl": "https://iili.io/HMQdbat.jpg",
                  "action": {
                    "type": "message",
                    "text": "คืออะไร"
                  }
                }
              ],

            }
          }
      ]
      
      await client.replyMessage(event.replyToken, message);
    }
    else if (event.type === 'message' && event.message.type === 'text' && event.message.text === 'จบเกม'){
      const message = {
        type: 'flex',
        altText: 'This is a Flex Message',
        contents: flexMessageData['restaurantflex'],
      }
      groupId = event.groupId;
      await client.pushMessage(groupId, message);
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

let count = 0;
const startGame = async (req, res) => {
  console.log("called start game")
  const events = getData;
  const eventsUser = await events.getGameState();
  const event = eventsUser[count];
  count += 1;
  // Change the Flex message object using the retrieved data
  const profile = await client.getProfile(req.body.ownerId);
  const username = profile.displayName;
  flexMessageData.startgroupflex.header.contents[0].text = `${username} สร้างเกมแล้ว!`;
/*   const currentlist = event.memberList;
  let allMember = [];
  for (let i = 0; i < currentlist.length; i++) {
    const userId = currentlist[i];
    console.log(userId);
    const profile = await client.getProfile(userId);
    const username = profile.displayName;
    allMember.push(username);
  }  
  console.log(allMember) */
  flexMessageData.startgroupflex.header.contents[1].text= `@Fu @Arty @tt @Pun`;
  // Construct the Flex message object using the retrieved data
  const message = {
    type: 'flex',
    altText: 'This is a Flex Message',
    contents: flexMessageData['startgroupflex'],
  };
  groupId = event.groupId;
  // Send the Flex message to the group
  const submitted = await client.pushMessage(groupId, message);
  res.sendStatus(200, submitted);
}

let count1 = 0;
const finishGame = async (req, res) => {
  count1 = count1 + 1;
  const event = req.body;
      // Construct the Flex message object using the retrieved data
      groupId = event.groupId;
      userID = event.userId;
      const profile = await client.getProfile(userID);
      const username = profile.displayName;
      console.log(count)
      const message = {
        type: 'text',
        text: `ยินดีด้วย ${username} เล่นเกมเสร็จเป็นที่ ${count1}!`,
      };
      // Send the Flex message to the group
      const submitted = await client.pushMessage(groupId, message);
  res.sendStatus(200, submitted);
};

module.exports = {
  sendFlexMessage,
  startGame,
  finishGame,
  endGame
};
