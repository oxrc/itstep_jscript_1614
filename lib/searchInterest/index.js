var express = require('express');
var app = module.exports = express();

var db = require('../db');

app.get('/interest/search', function (req, res) {
  db.connection.all(`Select * from Interest WHERE description="` + req.query.description + '"', (err, rows) => {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      return console.log(err.message);
    } else {
      status = {
        status: "ok",
        interest: {
          id: rows.id,
          description: rows.description
        }
      }
      res.json(status);

    }
  });
});
