const express = require('express');
const router = express.Router();
const flexMessageController = require('../../controllers/messageController/sendFlexController.js');

router.post('/', flexMessageController.sendFlexMessage);

module.exports = router;

