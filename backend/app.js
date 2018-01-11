// Imports
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet')
var cors = require('cors')
var request = require('request')
var rp = require('request-promise')

// Init
var app = express();

app.use(helmet())
app.use(cors())

// Config
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Controllers
var index = require('./src/rest/index');
var user = require('./src/rest/user');
app.use('/api', index);
app.use('/api/user', user);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.jsonp(err.status || 500);
// });

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

app.get('/', function (req, res) {
  request("http://localhost:3000/api/user/", function (error, response, body) {
    if (!error) {
      var users = JSON.parse(body)
      for (var key in users) {
        if (users.hasOwnProperty(key)) {
          console.log(users[key].id + ": Email:" + users[key].email + " Password:" + users[key].password);
        }
      }
      res.send(body)
    }
    else {
      console.log(error)
    }
  })
})

//TODO: Optimise search on db
app.post('/Login', function (req, res) {
  var optionsCheck = {
    method: 'GET',
    uri: 'http://localhost:3000/api/user/',
    json: true
  }
  rp(optionsCheck).then(function (users) {
    var conflict = false;
    if (users.length < 0) 
    {
      var result = { success: false }
      res.send(result)
    }
    console.log(req.body)
    for (var user in users) {
      if (users.hasOwnProperty(user)) {
        console.log(users[user].email)
        console.log(req.body.email)
        console.log(users[user].password)
        console.log(req.body.password)
        if (users[user].email == req.body.email && users[user].password == req.body.password) {
          var result = { success: true }
          res.send(result)
          break;
        }
        else {
          var result = { success: false }
          res.send(result)
          break;
        }
      }
    }
  })
})


app.post("/register", function (req, res) {
  var optionsCheck = {
    method: 'GET',
    uri: 'http://localhost:3000/api/user/',
    json: true
  }
  rp(optionsCheck).then(function (users) {
    var conflict = false;
    for (var user in users) {
      if (users.hasOwnProperty(user)) {
        if (users[user].email == req.body.email) {
          conflict = true;
          break;
        }
      }
    }
    if (conflict) {
      console.log("User already exists")
      var result = { success: false }
      res.send(result)
    }
    else {
      console.log("Registering...")
      var jsonDataObj = {
        email: req.body.email, password: req.body.password,
        firstname: req.body.firstName, lastname: req.body.lastName
      };
      console.log(jsonDataObj)
      var optionsRegister = {
        method: 'POST',
        uri: 'http://localhost:3000/api/user/',
        body: jsonDataObj,
        json: true
      }
      rp(optionsRegister).then(function (parsedBody) {
        console.log("Success!")
        var result = { success: true }
        res.send(result)
      })
    }
  })

})
module.exports = app;
