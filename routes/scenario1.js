var utils = require('../utils');
var config = require('../config');
var express = require('express');
var router = express.Router();
  
router.post('/', (req,res,next) => { 
    var cost_low = utils.processCost(true);
    var cost_high = utils.processCost(false);

    var l_val = utils.getRandomValue(config.low_variations, "");
    var h_val = utils.getRandomValue(config.high_variations, "");

    var low_var = [l_val];
    var high_var = [h_val];

    var A_arr = utils.processTime(l_val);
    var B_arr = utils.processTime(h_val);

    res.render('scenario', {title: 'Scenario 1', path: '/scenario2', 
        info: req.body, choices: '', low_var: low_var, high_var: high_var,
        cost_low: cost_low, cost_high: cost_high,
        start: config.start, arrival: config.arrival,
        A_arr_l: A_arr[0], A_arr_h: A_arr[1], B_arr_l: B_arr[0], B_arr_h: B_arr[1]});
});

module.exports = router;