const express = require('express');
const userModel = require('../models/user');

module.exports.sendLoginData = (req, res, next) => {
    let verificationRes = userModel.verifyUser(req.body.username, req.body.password);
    res.json(verificationRes);
};

module.exports.fetchSongs = (req, res) => {
    let songs = userModel.loadSongs();
    res.json(songs);
}

module.exports.fetchPlaylist = (req, res) => {
    let songList = userModel.getPlayList();
    res.json(songList);
}

module.exports.fetchSearchResult = (req, res) => {
    let searchInput = req.query.song;
    res.json(userModel.searchSong(searchInput));
}