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


app.post('/Login', function (req, res) {
  console.log(req.body)
  request("http://localhost:3000/api/user/", function (error, response, body) {
    if (!error) {
      var users = JSON.parse(body)
      for (var key in users) {
        if (users.hasOwnProperty(key)) {
          if (users[key].email == req.body.email && users[key].password == req.body.password) {
            console.log("Successfuly logged in")
            var result = { success: true }
            res.send(result)
          }
          else {
            var result = { success: false }
            res.send(result)
          }
        }
      }
    }
    else {
      console.log(error)
    }
  })
})

module.exports = app;
