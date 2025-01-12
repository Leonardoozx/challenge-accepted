const express = require('express');

const router = express.Router();

const WeathersController = require('../Controllers/weathersController');
const localeVerifierMiddleware = require('../Middlewares/localeVerifier');

const weathersController = new WeathersController();

// check if the query locale param exists, and if so, returns the forecast over that query
router.get(
  '/',
  localeVerifierMiddleware,
  weathersController.getWeatherByLocale
);

// returns all the weathers in db
router.get('/', weathersController.getAllWeathers);

module.exports = router;
