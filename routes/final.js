var express = require('express');
const Responses = require('../models/response')
var router = express.Router();

router.post('/', (req,res,next) => { 
  var choices = req.body.choices + req.body.scenario;
  var choices_arr = choices.split(",")
  var info = JSON.parse(req.body.info);
  
  var resp = {
    "age": info.age,
    "income": info.income,
    "gender": info.gender,
    "scenario1": choices_arr[0],
    "scenario2": choices_arr[1],
    "scenario3": choices_arr[2],
    "scenario4": choices_arr[3],
    "scenario5": choices_arr[4]
  }

  //console.log(resp);
  //console.log(req.body.low_var);
  //console.log(req.body.high_var);

  Responses.create(resp).then((response) => {
    console.log('Response Added', response)
    res.render('thankyou');
  }, (err) => next(err))

});

module.exports = router;
