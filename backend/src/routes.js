const express = require('express');
const routes = express.Router();
const mewsController = require('./controllers/mewsController');

routes.get('/mews', mewsController.index);
routes.post('/mews/create', mewsController.create);

module.exports = routes;
