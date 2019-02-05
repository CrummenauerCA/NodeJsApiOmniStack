const express = require('express');
const routes = express.Router();

const TweetController = require('./controllers/TweetController');

routes.get('/', (req, res) => {
    return res.send('Hello World');
});

module.exports = routes;