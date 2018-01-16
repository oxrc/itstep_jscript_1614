var express = require('express')
var app = module.exports = express();

var db = require('../db');

app.get('/interest/edit', function (req, res) {
  db.connection.run(`UPDATE Interest SET description = '`+ req.query.desc+`' WHERE id =`+ req.query.id, function (err) {
    if (err) {
      status = {
        status: "error",
        error_text: err.message
      }
      res.json(status);
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