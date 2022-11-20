let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
// let aboutmeRouter=require('./routes/aboutme');
let usersRouter = require('./routes/users');
const uri = 'mongodb://localhost/mean-book';
   const db = require('mongoose').connect(uri);
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
// app.use('/aboutme',aboutmeRouter)
app.use('/users', usersRouter);

app.use('/aboutme', (req, res) => {

// catch 404 and forward to error handler
app.use(function(req, res, next) {
});

res.render('./partials/aboutme', {
  title: 'SUHAIB_Portfolio',
  section: 'ABOUT ME'
})
})
app.use('/contact', (req, res) => {
res.render('./partials/contact', {
    title: 'SUHAIB_Portfolio',
    section: 'CONTACT'
})
})
app.use('/projects', (req, res) => {
res.render('./partials/projects', {
    title: 'SUHAIB_Portfolio',
    section: 'PROJECT'
})
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',
  {
    title:"Error"


  }
  
  
  
  
  );
});

module.exports = app;