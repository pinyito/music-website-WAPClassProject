const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/login', userController.sendLoginData);
router.get('/songs', userController.fetchSongs);
router.get('/playlist', userController.fetchPlaylist);
router.get('/search', userController.fetchSearchResult);

module.exports = router;