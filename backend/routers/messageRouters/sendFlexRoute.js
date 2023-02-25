const express = require('express');
const router = express.Router();
const flexMessageController = require('../../controllers/messageController/sendFlexController.js');

// router.post('/', flexMessageController.sendFlexMessage);
router.post('/', (req, res) => {
    const functionName = req.body.functionName; // get the function name from the request body
    if (functionName === 'endGame') {
        flexMessageController.endGame(req, res); // call the sendFlexMessage function
    } else {
        flexMessageController.sendFlexMessage(req, res); // call the sendFlexMessage function
    }
  });

module.exports = router;

