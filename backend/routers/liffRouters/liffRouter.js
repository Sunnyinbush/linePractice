//There are two things: 
//1. Build a route for getting the User ID, location, budget, and the time that they have
//2. Build a route for postting pictures that the users had choosen
const express = require('express');
const controller = require('../../controllers/liffControllers/foodController')
const router = express.Router();


router.route('/line-group')
.post(controller.postLineGroup); //I will get a list of people and group ID from pun and the set of picture 

router.route('/game')
.get(controller.getResult) //Pun will be recieving from me
.post(controller.postResult); //I will recieve the result of the game from pun (Data: Q1 what pic, Q2 What pic ...)


module.exports = router;