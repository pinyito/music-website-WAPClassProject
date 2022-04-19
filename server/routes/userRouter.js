const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/login', userController.sendLoginData);
router.get('/songs', userController.fetchSongs);
router.get('/session-strings', userController.fetchSessionStrings);

module.exports = router;