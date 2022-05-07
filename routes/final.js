var express = require('express');
const Responses = require('../models/response')
var router = express.Router();

router.post('/', (req,res,next) => { 
  var choices = req.body.choices + req.body.scenario;
  var choices_arr = choices.split(",")
  var info = JSON.parse(req.body.info);

  var low_var = JSON.parse(req.body.low_var);
  var high_var = JSON.parse(req.body.high_var);

  var costs_A = JSON.parse(req.body.costs_A);
  var costs_B = JSON.parse(req.body.costs_B);
  
  var resp = {
    "age": info.age,
    "income": info.income,
    "gender": info.gender,
    "scn1_choice": choices_arr[0],
    "scn1_TA_var": low_var[0],
    "scn1_TB_var": high_var[0],
    "scn1_TA_cost": costs_A[0],
    "scn1_TB_cost": costs_B[0],
    "scn2_choice": choices_arr[1],
    "scn2_TA_var": low_var[1],
    "scn2_TB_var": high_var[1],
    "scn2_TA_cost": costs_A[1],
    "scn2_TB_cost": costs_B[1],
    "scn3_choice": choices_arr[2],
    "scn3_TA_var": low_var[2],
    "scn3_TB_var": high_var[2],
    "scn3_TA_cost": costs_A[2],
    "scn3_TB_cost": costs_B[2],
    "scn4_choice": choices_arr[3],
    "scn4_TA_var": low_var[3],
    "scn4_TB_var": high_var[3],
    "scn4_TA_cost": costs_A[3],
    "scn4_TB_cost": costs_B[3],
    "scn5_choice": choices_arr[4],
    "scn5_TA_var": low_var[4],
    "scn5_TB_var": high_var[4],
    "scn5_TA_cost": costs_A[4],
    "scn5_TB_cost": costs_B[4]
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
