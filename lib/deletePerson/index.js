var express = require('express');
var app = module.exports = express();

var db = require('../db');

app.get('/user/delete', function (req, res) {
  db.connection.run(`DELETE from Person WHERE id =` + req.query.id, function (err) {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      res.json(status);
      return console.log(err.message);
    }
  });
  db.connection.run(`DELETE from Person_Interests WHERE personId =` + req.query.id, function (err) {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      res.json(status);
      return console.log(err.message);
    }
    console.log(`A row has been deleted ${req.query.id}`);
    res.json("Okey, person has been removed");
  });
});