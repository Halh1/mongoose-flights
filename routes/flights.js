var express = require('express');
var router = express.Router();
var flightCtrl = require('../controllers/flights');
/* GET users listing. */

//GET /flights
router.get('/', flightCtrl.index);
//GET /flights/new
router.get('/new', flightCtrl.new);


module.exports = router;
