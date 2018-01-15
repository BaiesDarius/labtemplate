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
var game = require('./src/rest/game');
var userrole = require('./src/rest/userrole');
var wishlist = require('./src/rest/wishlist');
var cart = require('./src/rest/cart');
app.use('/api', index);
app.use('/api/user', user);
app.use('/api/game', game);
app.use('/api/cart', cart);
app.use('/api/userrole', userrole);
app.use('/api/wishlist', wishlist);

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
  var optionsCheck = {
    method: 'GET',
    uri: 'http://localhost:3000/api/user/',
    json: true
  }
  rp(optionsCheck).then(function (users) {
    for (var key in users) {
      if (users.hasOwnProperty(key)) {
        console.log(users[key].id + ": Email:" + users[key].email + " Password:" + users[key].password);
      }
    }
    res.send(users)
  })
})
app.post('/AllGames', function (req, res) {
  var optionsGames = {
    method: 'GET',
    uri: 'http://localhost:3000/api/game/',
    json: true
  }
  rp(optionsGames).then(function (games) {
    console.log(games)
    if (games == null) {
      var result = { success: false }
      res.send(result)
    }
    else {
      var result = { success: true, games: games }
      res.send(result)
    }
  })
})
app.post('/Login', function (req, res) {
  var optionsCheck = {
    method: 'POST',
    uri: 'http://localhost:3000/api/user/email',
    body: req.body,
    json: true
  }
  rp(optionsCheck).then(function (user) {
    if (user == null) {
      var result = { success: false }
      res.send(result)
    }
    else {
      if (user.email == req.body.email && user.password == req.body.password) {
        var userJSON = {
          id: user.id,
          email: user.email
        }
        var optionsRole = {
          method: 'POST',
          uri: 'http://localhost:3000/api/userrole/getByUserId/',
          body: userJSON,
          json: true
        }
        rp(optionsRole).then(function (role) {
          console.log(role.role)
          if (role.role == 'User') {
            var result = { success: true, id: user.id, firstname: user.firstname, lastname: user.lastname }
            res.send(result)
          }
          else {
            var result = { success: true, id: user.id, firstname: user.firstname, lastname: user.lastname, isAdmin: true }
            res.send(result)
          }
        })
      }
      else {
        var result = { success: false }
        res.send(result)
      }
    }
  })
})
app.post('/AdminCreate', function (req, res) {
  var optionsCreateGame = {
    method: 'POST',
    uri: 'http://localhost:3000/api/game/',
    body: req.body,
    json: true
  }
  rp(optionsCreateGame).then(function (parsedBody) {
    console.log("Successfuly created game")
    var result = { success: true }
    res.send(result)
  })
})
app.post('/GetCart', function (req, res) {
  var optionsGetCart = {
    method: 'POST',
    uri: 'http://localhost:3000/api/cart/getByUserId/',
    body: req.body,
    json: true
  }
  rp(optionsGetCart).then(function (cart) {
    var promises = []
    for (var i = 0; i < cart.length; i++) {
      var optionsGetGameByID = {
        method: 'GET',
        uri: 'http://localhost:3000/api/game/' + cart[i].idgame,
        json: true
      }
      var newPromise = rp(optionsGetGameByID)
      promises.push(newPromise)
    }
    return Promise.all(promises)
  }).then(gameslist => {
    var result = { success: true, games: gameslist }
    res.send(result)
  })

})
app.post('/DeleteCart', function (req, res) {
  var optionsFindCart = {
    method: 'POST',
    uri: 'http://localhost:3000/api/cart/findByUserAndGameId',
    body: req.body,
    json: true
  }
  rp(optionsFindCart).then(function (cart) {
    if(cart!=null)
    {
      var optionsDeleteCart = {
        method: 'DELETE',
        uri: 'http://localhost:3000/api/cart/' + cart.id,
        json: true
      }
      rp(optionsDeleteCart).then(function (parsedBody) {
        var result = { success: true }
        res.send(result)
      })
    }
    else
    {
      console.log("Deleted null entry")
    }
  })
})
app.post('/cartAdd', function (req, res) {
  var optionsCartAdd = {
    method: 'POST',
    uri: 'http://localhost:3000/api/cart/',
    body: req.body,
    json: true
  }
  rp(optionsCartAdd).then(function (parsedBody) {
    var result = { success: true }
    res.send(result)
  })
})
app.post("/register", function (req, res) {
  var optionsCheck = {
    method: 'POST',
    uri: 'http://localhost:3000/api/user/email',
    body: req.body,
    json: true
  }
  rp(optionsCheck).then(function (user) {
    var conflict = false;
    if (user != null) {
      if (user.email == req.body.email) {
        console.log(user.email)
        conflict = true;
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
      var optionsRegister = {
        method: 'POST',
        uri: 'http://localhost:3000/api/user/',
        body: jsonDataObj,
        json: true
      }
      rp(optionsRegister).then(function (parsedBody) {
        console.log("Success!")
        var optionsLastUser = {
          method: 'POST',
          uri: 'http://localhost:3000/api/user/getLast',
          json: true
        }
        rp(optionsLastUser).then(function (lastUser) {
          console.log(lastUser.id)
          var userRole = {
            iduser: `${lastUser.id}`,
            role: "User"
          }
          var optionsUserRole = {
            method: 'POST',
            uri: 'http://localhost:3000/api/userrole/',
            body: userRole,
            json: true
          }
          rp(optionsUserRole).then(function (parsedBody) {
            var result = { success: true }
            res.send(result)
          })
        })
      })
    }
  })
})
module.exports = app;
