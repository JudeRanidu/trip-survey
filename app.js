var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');

var indexRouter = require('./routes/index');
var sc1Router = require('./routes/scenario1');
var sc2Router = require('./routes/scenario2');
var sc3Router = require('./routes/scenario3');
var sc4Router = require('./routes/scenario4');
var sc5Router = require('./routes/scenario5');
var finalRouter = require('./routes/final');

const connect =  mongoose.connect(config.mongoUrl);

connect.then((db) => {
  console.log('Connected Successfully to the MongoDB Server!!')
}, (err) => {console.log(err)})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/scenario1', sc1Router);
app.use('/scenario2', sc2Router);
app.use('/scenario3', sc3Router);
app.use('/scenario4', sc4Router);
app.use('/scenario5', sc5Router);
app.use('/final', finalRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
