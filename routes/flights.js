var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
/* GET users listing. */

//GET /flights
router.get('/', flightsCtrl.index);
//GET /flights/new
router.get('/new', flightsCtrl.new);
//GET 
router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);


module.exports = router;
