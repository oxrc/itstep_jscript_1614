var express = require('express');
var app = module.exports = express();

var db = require('../db');

app.get('/interest/new', function (req, res) {
  var status;
  db.connection.run(`INSERT INTO Interest(description) VALUES(?)`, [req.query.desc], function (err) {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      res.json(status);
      return console.log(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    status = {
      status: "ok",
      interest: {
        id: this.lastID,
        description: req.query.desc
      }
    }
    res.json(status);
  });
});