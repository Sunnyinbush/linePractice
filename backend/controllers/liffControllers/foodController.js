const Joi = require("joi");
const fs = require("fs");
const axios = require('axios');

//file path for database.json in jsonserver
const filePath = "./backend/database.json";

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

  const info = {
    ownerId: req.body.ownerId,
    gameId: req.body.gameId,
    groupId: req.body.groupId,
    memberList: req.body.memberList,
    selectedTime: req.body.selectedTime,
    selectedBudget: req.body.selectedBudget,
    selectedLocation: req.body.selectedLocation
  };

  try {
    const response = await axios.post('http://localhost:9000/gameState', info);
    console.log(`Data saved to port 9000: ${response.data}`);
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