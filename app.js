var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () { console.log("Connection to DB succeeded") });

var resourceRouter = require('./routes/resource');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var trees = require('./models/trees');
var treessRouter = require('./routes/trees');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trees', treessRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


async function recreateDB() {
  // Delete everything
  await trees.deleteMany();

  let instance1 = new
    trees({ trees_Name: "palm", trees_height: "100ft", trees_cost: 400 });
  instance1.save().then(() => {
    console.log('First Object is created');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
  let instance2 = new
    trees({ trees_Name: "bamboo", trees_height: "150ft", trees_cost: 1000 });
  instance2.save().then(() => {
    console.log('Second Object is created');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
  let instance3 = new
    trees({trees_Name: "neem", trees_height: "50ft", trees_cost: 700 });
  instance3.save().then(() => {
    console.log('Third Object is created');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
