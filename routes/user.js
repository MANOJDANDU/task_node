const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get('/task/list',
    userController.getTaskList
);

module.exports = router; 