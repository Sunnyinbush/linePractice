const Joi = require("joi");
const axios = require('axios');
const restaurantModel = require('../../models/restaurantModel.js');

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
    console.log(`Data saved to port 9000:`);
    res.status(200).json({ status: 'received info', data: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

const getPicture = (req, res) => {
    res.status(200).json({
        question1: ['pic1', 'pic2'],
        question2: ['pic1', 'pic2'],
        question3: ['pic1', 'pic2'],
        question4: ['pic1', 'pic2'],
        question5: ['pic1', 'pic2'],
    })
}

const postResult = async (req, res) => {
  const schema = {
    groupId: Joi.string().required(),
    userId: Joi.string().required(),
    result: Joi.array().required(),
  };

  const result = {
    groupId: req.body.groupId,
    userId: req.body.userId,
    result: req.body.result
  };

  try {
    // Get game state from jsonServer database
    const response = await axios.get(`http://localhost:9000/gameState?groupId=${req.body.groupId}`);
    // Map result to gameResult array based on page number
    response.data[0].gameResult.forEach((gameResultItem, index) => {
      const page = gameResultItem.page;
      gameResultItem.picturechoose.push(req.body.result[page - 1]);
    });

    // Update game state in jsonServer database
    await axios.patch(`http://localhost:9000/gameState/${response.data[0].groupId}`, response.data[0]);

    // Send response to client
    res.status(200).json(response.data[0]);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}


module.exports = {
    postLineGroup,
    getPicture,
    postResult
}