var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


//basic routes sent to index.js and all other routing handled from there :)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//Initilaizes the app as a whole
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/http://localhost:8090/contacts', function(req, res) {
 var contactAry = { id: 2,
                  name: 'Fattman',
                  email: 'Dudes101@Gmail.com',
                  message: 'Yo kevin, biggest fan ever'}
});

app.get('/', function(req, res){
  res.send('Hey');
});

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
//middle ware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

module.exports = app;











app.get('contact/sendcontact/:email', function(req, res){
  contact.sendcontact(req.params.id, function(err, contact){
    res.render('contact_info', {
      title: 'Contact',
      contact:contact
    });
  });
});




//not using this just yet
app.post('not sure yet', function(req, res){
  let contact = new contact();
  contact.name = req.body.name;
  contact.subject = req.body.author;
  contact.email = req.body.email;
  contact.message = req.body.message;


});

app.post('/success', function(req, res){
  let contact = new contact();
  contact.name = req.body.name;
  contact.subject = req.body.subject;
  contact.email = req.body.email;
  contact.message = req.body.message;
});


// add contact to db
app.post('/contact', function(req, res){
  let contact = new contact();

  contact.name = req.body.name;
  contact.subject = req.body.subject;
  contact.email = req.body.email;
  contact.message = req.body.message;

  console.log('Submitted');
  console.log(function(err){
    if(err){
      console.log(err);
      return;
    } else{
      res.render('/success', {name: req.body.name, 
                                subject: req.body.subject, 
                                email: req.body.email, 
                                message: req.body.message});
    }
  });


  return;
});