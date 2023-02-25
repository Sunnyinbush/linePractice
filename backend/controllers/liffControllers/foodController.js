const Joi = require("joi");
const axios = require('axios');
const fs = require('fs');

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

const getResult = (req, res) => {
    res.status(200).json({
        question1: ['pic1', 'pic2'],
        question2: ['pic1', 'pic2'],
        question3: ['pic1', 'pic2'],
        question4: ['pic1', 'pic2'],
        question5: ['pic1', 'pic2'],
    })
}

const postResult = async (req, res) => {
  //accept result of userID and array of which picture they chose for each page
  //save to database

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

  //send 200 response
  res.send(200, "Game Data Saved Successfully");

}

module.exports = {
    postLineGroup,
    getResult,
    postResult
}