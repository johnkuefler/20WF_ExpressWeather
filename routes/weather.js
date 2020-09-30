var express = require('express');
var router = express.Router();
var weatherController = require('../controllers/weatherController');

/* GET home page. */
router.get('/', weatherController.get_weather);

module.exports = router;
