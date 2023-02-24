const Joi = require("joi");
const fs = require("fs");
const axios = require('axios');
const { response } = require("express");

//Retrieving UserID, location, budget, and the time that the user have
//Get json data based on the info


const filePath = 'd:/Coding/linePractice/jsonServer/database.json';
const storageEndpoint = 'http://localhost:9000/lineId';


const postLineId = (req, res) => {
  const lineId = req.body;

  axios.post(storageEndpoint, lineId)
    .then(response => {
      console.log(`Data saved successfully: ${response.data}`);
      res.status(200).json({status: 'received info', data: info});
    })
    .catch(error => {
      console.error(`Error saving data: ${error.message}`);
      res.status(500).send('Internal server error');
    });
}


//req.body.json มี key = userID ที่รับเป็น
const postLineGroup = (req,res) => {
    const schema = {
        userId: Joi.array().required(),
        groupId: Joi.string().required(),
        location: Joi.string().required(),
        ownerId: Joi.string().required(),
        timeLimit: Joi.number().required(),
        budget: Joi.array().required()
    }

    const result = Joi.validate(req.body.json, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
        return;
    }
    const info = {
        userId: req.body.userId,
        groupId: req.body.groupId,
        location: req.body.location,
        ownerId: req.body.ownerId,
        timeLimit: req.body.timeLimit,
        budget: req.body.budget
    };
    try {
        let existingData = fs.readFileSync(filePath);
        if (existingData) {
          existingData = JSON.parse(existingData);
          if (Array.isArray(existingData)) {
            existingData.push(info);
          } else {
            existingData = [existingData, info];
          }
        } else {
          existingData = [info];
        }
      
        fs.writeFileSync(filePath, JSON.stringify(existingData));
        console.log(`Data saved to ${filePath}`);
      
        res.status(200).json({status: 'received info', data: info});
      } catch (err) {
        console.error(err);
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
    postLineId,
    postLineGroup,
    getResult,
    postResult
}