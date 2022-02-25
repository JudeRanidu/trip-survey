var utils = require('../utils');
var config = require('../config');
var express = require('express');
var router = express.Router();
  
router.post('/', (req,res,next) => { 
    var cost_low = utils.processCost(true);
    var cost_high = utils.processCost(false);
    
    var l_val = utils.getRandomValue(config.low_variations, req.body.low_var);
    var h_val = utils.getRandomValue(config.high_variations, req.body.high_var);
    
    var low_var = JSON.parse(req.body.low_var);
    var high_var = JSON.parse(req.body.high_var);
    low_var.push(l_val);
    high_var.push(h_val);

    var A_arr = utils.processTime(l_val);
    var B_arr = utils.processTime(h_val);

    var choices = req.body.choices + req.body.scenario + ",";

    res.render('scenario', {title: 'Scenario 4', path: '/scenario5',
        info: req.body.info, choices: choices, low_var: low_var, high_var: high_var,
        cost_low: cost_low, cost_high: cost_high,
        start: config.start, arrival: config.arrival,
        A_arr_l: A_arr[0], A_arr_h: A_arr[1], B_arr_l: B_arr[0], B_arr_h: B_arr[1]});
});

module.exports = router;