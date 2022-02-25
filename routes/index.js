var config = require('../config');
var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => { 
  res.render('index', {cost: config.cost});
});

module.exports = router;
