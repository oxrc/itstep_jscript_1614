var express = require('express')
var app = module.exports = express();

var db = require('../db');

app.get('/user/edit', function (req, res) {
    var stringQuery = 'UPDATE Person SET firstName = "' + req.query.firstName + '", lastName = "' + req.query.lastName + '", phone = ' + req.query.phone + ', active = ' + req.query.active + ', age = ' + req.query.age + ' WHERE id = ' + req.query.id
  db.connection.run( stringQuery, function (err) {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      res.json(status);
    console.log(stringQuery);
      return console.log(err.message);
    }
    console.log(`A row has been updated ${req.query.id}`);
    status = {
      status: "ok",
      interest: {
        id: req.query.id,
        description: req.query.desc
      }
    }
    res.json(status);
  });
});