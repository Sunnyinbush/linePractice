//There are two things: 
//1. Build a route for getting the User ID, location, budget, and the time that they have
//2. Build a route for postting pictures that the users had choosen
const express = require('express');
const controller = require('../controller/foodController')
const router = express.Router();


router.route('/api/liff/creategame')
.get(controller.getInfo)
.post(controller.postPic);

router.route('/api/endgame')
.get(controller.getRank);


module.exports = router;