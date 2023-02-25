const Joi = require("joi");
const axios = require('axios');
const sendFlexMessage = require ('../../controllers/messageController/sendFlexController.js');

const postLineGroup = async (req, res) => {
  const schema = {
    ownerId: Joi.string().required(),
    gameId: Joi.number().required(),
    groupId: Joi.string().required(),
    memberList: Joi.array().required(),
    selectedTime: Joi.number().required(),
    selectedBudget: Joi.array().required(),
    selectedLocation: Joi.string().required(),
  };

  const infotodb = {
    ownerId: req.body.ownerId,
    gameId: req.body.gameId,
    groupId: req.body.groupId,
    memberList: req.body.memberList,
    selectedTime: req.body.selectedTime,
    selectedBudget: req.body.selectedBudget,
    selectedLocation: req.body.selectedLocation
  };

  const infotoflex = {
    type: "gameStart",
    source: {
      type: "group",
      groupId: req.body.groupId,
      userId: req.body.ownerId,
      memberList: req.body.memberList
    }

  }

  try {
    const response = await axios.post('http://localhost:9000/gameState', infotodb);
    console.log(`Data saved to port 9000: ${response.data}`);
    const response2 = await axios.post('http://localhost:4000/webhook', infotoflex);
    console.log(`Flex posted to LINE ${response2.data}`);
    res.status(200).json({ status: 'received info', data: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

const getResult = (req, res) => {
    res.status(200).json({
        question1: ['pic1', 'pic2'],
        question2: ['pic1', 'pic2'],
        question3: ['pic1', 'pic2'],
        question4: ['pic1', 'pic2'],
        question5: ['pic1', 'pic2'],
    })
}

const postResult = (req, res) => {
    res.send("posting result")
}

module.exports = {
    postLineGroup,
    getResult,
    postResult
}