const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('user-store.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
});

var express = require('express')
var app = module.exports = express()

var users = [];

db.serialize(() => {
    db.each(`SELECT * from User`, (err, row) => {
      if (err) {
        console.error(err.message);
      }

      users.push(row)
  });
});



app.get('/user/search', function (req, res) {
  var result = [];

  if (req.phone != null) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].phone == req.phone) {
        result.push(users[i]);
      }
    }
  } else if (req.name != null) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].firstName + users[i].lastName == req.name) {
        result.push(users[i]);
      }
    }
  } else {
    for (var i = 0; i < users.length; i++) {
      var interestFound = false;

      for (var j = 0; j < users[i].interests.length; j++) {
        if (users[i].interests[j] == req.interest) {
          interestFound = true;
          break;
        }
      }

      if (interestFound) {
        result.push(users[i]);
      }
    }
  }

  res.send(result);
});