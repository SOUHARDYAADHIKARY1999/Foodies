// importing the important packages which are required
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser =require('body-parser');
var cors=require('cors');

// connecting with the database in mongodb atlas
const connectdb = require('./database/mongoose');
connectdb();



//getting the routes

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.router');
var foodsRouter = require('./routes/foods.router');
var recipesRouter = require('./routes/recipes.router');
var homeRouter = require('./routes/home.router');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}))
app.use(bodyParser.urlencoded({extended: false}));*/



// defining the url paths of the routes

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recipes',recipesRouter);
app.use('/foods',foodsRouter);
app.use('/home',homeRouter);


app.use(express.json({extended:false}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200/');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials',true);


  //next(createError(404));
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  if (err.name === 'ValidationError') {
    var valErrors = [];
    Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
    res.status(422).send(valErrors)
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




// defining the port number
const port = process.env.port || 8080; 
app.listen(port,()=>console.log('Server started'));




module.exports = app;
